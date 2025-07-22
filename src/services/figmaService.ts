// Figma API Service with MCP Integration
// 실제 Figma API 연동을 위한 서비스

interface FigmaToken {
  id: string
  name: string
  value: string
  type: 'color' | 'typography' | 'spacing'
  description?: string
}

interface FigmaFile {
  key: string
  name: string
  lastModified: string
  thumbnailUrl?: string
}

interface FigmaConnection {
  accessToken: string
  fileKey: string
  fileName: string
}

interface MCPConnection {
  serverUrl: string
  apiKey: string
  projectId: string
}

class FigmaService {
  private accessToken: string = ''
  private fileKey: string = ''
  private baseUrl: string = 'https://api.figma.com/v1'
  private mcpConnection: MCPConnection | null = null
  private syncInterval: NodeJS.Timeout | null = null
  private lastModified: string = ''

  // Figma 연결 설정
  async connect(accessToken: string, fileKey: string): Promise<FigmaConnection> {
    try {
      this.accessToken = accessToken
      this.fileKey = fileKey

      // 파일 정보 가져오기
      const fileInfo = await this.getFileInfo(fileKey)
      this.lastModified = fileInfo.lastModified
      
      return {
        accessToken,
        fileKey,
        fileName: fileInfo.name
      }
    } catch (error) {
      throw new Error(`Failed to connect to Figma: ${error}`)
    }
  }

  // MCP 서버 연결 설정
  async connectMCP(serverUrl: string, apiKey: string, projectId: string): Promise<MCPConnection> {
    try {
      this.mcpConnection = {
        serverUrl,
        apiKey,
        projectId
      }

      // MCP 서버 연결 테스트
      const response = await fetch(`${serverUrl}/health`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('MCP server connection failed')
      }

      return this.mcpConnection
    } catch (error) {
      throw new Error(`Failed to connect to MCP: ${error}`)
    }
  }

  // Figma 파일 정보 가져오기
  async getFileInfo(fileKey: string): Promise<FigmaFile> {
    const response = await fetch(`${this.baseUrl}/files/${fileKey}`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch file info: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      key: fileKey,
      name: data.name,
      lastModified: data.lastModified,
      thumbnailUrl: data.thumbnailUrl
    }
  }

  // 실시간 동기화 시작
  async startRealtimeSync(callback: (tokens: FigmaToken[]) => void): Promise<void> {
    if (!this.accessToken || !this.fileKey) {
      throw new Error('Figma connection not established')
    }

    // 30초마다 파일 변경 확인
    this.syncInterval = setInterval(async () => {
      try {
        const fileInfo = await this.getFileInfo(this.fileKey)
        
        // 파일이 변경되었는지 확인
        if (fileInfo.lastModified !== this.lastModified) {
          console.log('Figma file changed, updating tokens...')
          
          // 새로운 토큰 추출
          const tokens = await this.extractTokens(this.fileKey)
          this.lastModified = fileInfo.lastModified
          
          // MCP 서버에 업데이트 전송
          if (this.mcpConnection) {
            await this.updateMCPTokens(tokens)
          }
          
          // 콜백 실행
          callback(tokens)
        }
      } catch (error) {
        console.error('Realtime sync error:', error)
      }
    }, 30000) // 30초마다 체크
  }

  // MCP 서버에 토큰 업데이트
  async updateMCPTokens(tokens: FigmaToken[]): Promise<void> {
    if (!this.mcpConnection) {
      throw new Error('MCP connection not established')
    }

    try {
      const response = await fetch(`${this.mcpConnection.serverUrl}/tokens/update`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.mcpConnection.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          projectId: this.mcpConnection.projectId,
          tokens,
          source: 'figma',
          timestamp: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error(`MCP update failed: ${response.statusText}`)
      }

      console.log('Tokens updated in MCP server')
    } catch (error) {
      console.error('MCP update error:', error)
    }
  }

  // 디자인 토큰 추출
  async extractTokens(fileKey: string): Promise<FigmaToken[]> {
    try {
      const response = await fetch(`${this.baseUrl}/files/${fileKey}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`)
      }

      const data = await response.json()
      const tokens: FigmaToken[] = []

      // 색상 토큰 추출
      this.extractColorTokens(data.document, tokens)
      
      // 타이포그래피 토큰 추출
      this.extractTypographyTokens(data.document, tokens)
      
      // 간격 토큰 추출
      this.extractSpacingTokens(data.document, tokens)

      return tokens
    } catch (error) {
      throw new Error(`Failed to extract tokens: ${error}`)
    }
  }

  // 색상 토큰 추출
  private extractColorTokens(node: any, tokens: FigmaToken[]) {
    if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE' || node.type === 'VECTOR') {
      if (node.fills && node.fills.length > 0) {
        const fill = node.fills[0]
        if (fill.type === 'SOLID' && fill.color) {
          const color = this.rgbToHex(fill.color.r, fill.color.g, fill.color.b)
          tokens.push({
            id: node.id,
            name: node.name || 'Color',
            value: color,
            type: 'color',
            description: node.description
          })
        }
      }
    }

    // 자식 노드들도 재귀적으로 처리
    if (node.children) {
      node.children.forEach((child: any) => {
        this.extractColorTokens(child, tokens)
      })
    }
  }

  // 타이포그래피 토큰 추출
  private extractTypographyTokens(node: any, tokens: FigmaToken[]) {
    if (node.type === 'TEXT') {
      const style = node.style
      if (style) {
        const fontSize = style.fontSize || 16
        const fontFamily = style.fontFamily || 'Inter'
        const fontWeight = style.fontWeight || 400

        tokens.push({
          id: node.id,
          name: node.name || 'Typography',
          value: `${fontSize}px`,
          type: 'typography',
          description: `${fontFamily} ${fontWeight}`
        })
      }
    }

    if (node.children) {
      node.children.forEach((child: any) => {
        this.extractTypographyTokens(child, tokens)
      })
    }
  }

  // 간격 토큰 추출
  private extractSpacingTokens(node: any, tokens: FigmaToken[]) {
    if (node.type === 'FRAME' || node.type === 'GROUP') {
      if (node.paddingLeft || node.paddingRight || node.paddingTop || node.paddingBottom) {
        const padding = node.paddingLeft || node.paddingRight || node.paddingTop || node.paddingBottom
        tokens.push({
          id: node.id,
          name: node.name || 'Spacing',
          value: `${padding}px`,
          type: 'spacing',
          description: 'Padding spacing'
        })
      }
    }

    if (node.children) {
      node.children.forEach((child: any) => {
        this.extractSpacingTokens(child, tokens)
      })
    }
  }

  // RGB를 HEX로 변환
  private rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => {
      const hex = Math.round(n * 255).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  // 토큰을 Figma에 업데이트
  async updateTokens(fileKey: string, tokens: FigmaToken[]): Promise<void> {
    // 실제 구현에서는 Figma Plugin API를 사용해야 합니다
    // 여기서는 시뮬레이션만 제공합니다
    console.log('Updating tokens in Figma:', tokens)
    
    // 실제 구현 예시:
    // const response = await fetch(`${this.baseUrl}/files/${fileKey}/nodes`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Authorization': `Bearer ${this.accessToken}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ tokens })
    // })
  }

  // 실시간 동기화 중지
  stopRealtimeSync(): void {
    if (this.syncInterval) {
      clearInterval(this.syncInterval)
      this.syncInterval = null
      console.log('Realtime sync stopped')
    }
  }

  // 연결 해제
  disconnect(): void {
    this.stopRealtimeSync()
    this.accessToken = ''
    this.fileKey = ''
    this.mcpConnection = null
    this.lastModified = ''
  }

  // 연결 상태 확인
  isConnected(): boolean {
    return !!(this.accessToken && this.fileKey)
  }

  // MCP 연결 상태 확인
  isMCPConnected(): boolean {
    return !!this.mcpConnection
  }
}

// 싱글톤 인스턴스 생성
export const figmaService = new FigmaService()

// 타입 내보내기
export type { FigmaToken, FigmaFile, FigmaConnection, MCPConnection } 
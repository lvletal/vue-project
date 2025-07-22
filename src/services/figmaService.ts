// Figma API Service
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

class FigmaService {
  private accessToken: string = ''
  private fileKey: string = ''
  private baseUrl: string = 'https://api.figma.com/v1'

  // Figma 연결 설정
  async connect(accessToken: string, fileKey: string): Promise<FigmaConnection> {
    try {
      this.accessToken = accessToken
      this.fileKey = fileKey

      // 파일 정보 가져오기
      const fileInfo = await this.getFileInfo(fileKey)
      
      return {
        accessToken,
        fileKey,
        fileName: fileInfo.name
      }
    } catch (error) {
      throw new Error(`Failed to connect to Figma: ${error}`)
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

  // 실시간 동기화 설정
  async setupRealtimeSync(fileKey: string, callback: (tokens: FigmaToken[]) => void): Promise<void> {
    // WebSocket이나 Polling을 사용한 실시간 동기화
    // 실제 구현에서는 Figma의 실시간 API를 사용해야 합니다
    
    setInterval(async () => {
      try {
        const tokens = await this.extractTokens(fileKey)
        callback(tokens)
      } catch (error) {
        console.error('Realtime sync error:', error)
      }
    }, 30000) // 30초마다 체크
  }

  // 연결 해제
  disconnect(): void {
    this.accessToken = ''
    this.fileKey = ''
  }

  // 연결 상태 확인
  isConnected(): boolean {
    return !!(this.accessToken && this.fileKey)
  }
}

// 싱글톤 인스턴스 생성
export const figmaService = new FigmaService()

// 타입 내보내기
export type { FigmaToken, FigmaFile, FigmaConnection } 
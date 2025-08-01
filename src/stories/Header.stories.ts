import type { Meta, StoryObj } from '@storybook/vue3'
import Header from '../components/Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'TOONBET 브랜드 헤더 컴포넌트입니다. 핑크색 고양이 로고, "Sign In/Up" 버튼, 3x3 그리드 메뉴 아이콘이 포함되어 있습니다.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// TOONBET 헤더
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'TOONBET 브랜드 헤더입니다. 핑크색 고양이 로고, "Sign In/Up" 버튼, 3x3 그리드 메뉴 아이콘이 포함되어 있습니다.'
      }
    }
  }
}

// 모바일 반응형 테스트
export const MobileResponsive: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: '모바일 화면에서의 헤더 반응형 동작을 확인할 수 있습니다.'
      }
    }
  }
}

// 데스크톱 뷰
export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: '데스크톱 화면에서의 헤더를 확인할 수 있습니다.'
      }
    }
  }
}

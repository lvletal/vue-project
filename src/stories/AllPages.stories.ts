import type { Meta, StoryObj } from '@storybook/vue3';
import HomeView from '../views/HomeView.vue';
import TokenStudio from '../views/TokenStudio.vue';

const meta: Meta = {
  title: 'Pages/All Pages',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '프로젝트의 모든 메인 페이지들을 한눈에 볼 수 있습니다.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  render: () => ({
    components: { HomeView },
    template: '<HomeView />'
  }),
  parameters: {
    docs: {
      description: {
        story: '컴포넌트 갤러리 홈페이지 - 모든 컴포넌트를 아코디언 형태로 보여줍니다.'
      }
    }
  }
};

export const TokenStudioPage: Story = {
  render: () => ({
    components: { TokenStudio },
    template: '<TokenStudio />'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Figma 연동 디자인 토큰 관리 스튜디오 - 색상, 타이포그래피, 간격 등을 관리합니다.'
      }
    }
  }
}; 
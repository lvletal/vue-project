import type { Meta, StoryObj } from '@storybook/vue3';
import HomeView from '../views/HomeView.vue';

const meta: Meta<typeof HomeView> = {
  title: 'Pages/HomeView',
  component: HomeView,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '메인 홈페이지로, 모든 컴포넌트들을 아코디언 형태로 보여줍니다.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithAllAccordionsOpen: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '모든 아코디언이 열린 상태의 홈페이지'
      }
    }
  }
}; 
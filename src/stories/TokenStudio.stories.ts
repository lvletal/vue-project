import type { Meta, StoryObj } from '@storybook/vue3';
import TokenStudio from '../views/TokenStudio.vue';

const meta: Meta<typeof TokenStudio> = {
  title: 'Pages/TokenStudio',
  component: TokenStudio,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Figma와 연동되는 디자인 토큰 관리 스튜디오입니다. 색상, 타이포그래피, 간격 등의 디자인 시스템을 관리할 수 있습니다.'
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

export const ConnectedToFigma: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Figma에 연결된 상태의 TokenStudio'
      }
    }
  }
};

export const DisconnectedFromFigma: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Figma에 연결되지 않은 상태의 TokenStudio'
      }
    }
  }
}; 
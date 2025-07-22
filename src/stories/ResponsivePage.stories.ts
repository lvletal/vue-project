import type { Meta, StoryObj } from '@storybook/vue3';
import ResponsivePage from '../views/ResponsivePage.vue';

const meta: Meta<typeof ResponsivePage> = {
  title: 'Pages/ResponsivePage',
  component: ResponsivePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '반응형 디자인을 보여주는 데모 페이지입니다. 다양한 화면 크기에서 레이아웃이 어떻게 변하는지 확인할 수 있습니다.'
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

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: '모바일 뷰에서의 반응형 페이지'
      }
    }
  }
};

export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: '태블릿 뷰에서의 반응형 페이지'
      }
    }
  }
}; 
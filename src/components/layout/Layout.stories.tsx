import React, { ComponentProps, useMemo } from 'react';
import { Meta, Story } from '@storybook/react';

import Layout from '.';
import { BaseHeaderOne } from 'common/styles/baseComponents';

type CustomLayoutProps = ComponentProps<typeof Layout> & { childrenCount: number };

export default {
  title: 'Components/Layout',
  component: Layout,
  args: {
    childrenCount: 1,
  },
  argTypes: {
    childrenCount: { control: 'number' },
  },
} as Meta<CustomLayoutProps>;

const Template: Story<CustomLayoutProps> = ({ childrenCount, ...args }) => {
  const liComponents = useMemo(() => {
    const components = [];

    for (let i = 1; i <= childrenCount; i++) {
      components.push(<BaseHeaderOne> Header {i + 1} </BaseHeaderOne>);
    }

    return components;
  }, [childrenCount]);

  return <Layout {...args}>{liComponents}</Layout>;
};

export const Main = Template.bind({});

Main.args = {
  childrenCount: 1,
};

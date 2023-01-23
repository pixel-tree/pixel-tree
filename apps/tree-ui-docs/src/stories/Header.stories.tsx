import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
}

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}

export default meta

import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'

describe('Home.vue', () => {
  it('renders two buttons for the exercises', () => {
    const wrapper = shallowMount(Home)

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Exercise one')
    expect(buttons[1].text()).toBe('Exercise two')
  })
})
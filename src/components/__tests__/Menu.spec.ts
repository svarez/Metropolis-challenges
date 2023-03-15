import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'
import { MenuItem } from '@/interfaces/MenuItem'

describe('Menu', () => {

  const items: MenuItem[] = [
    {
      id: 1,
      label: 'Item 1',
      isExpanded: false,
      level: 1,
      children: [
        {
          id: 2,
          level: 2,
          label: 'Sub-item 1',
          isExpanded: false,
          children: []
        }
      ]
    }
  ]

  it('renders a list of items', () => {
    const wrapper = mount(Menu, {
      props: {
        items
      }
    })

    expect(wrapper.find('.menu-item-label').text()).toBe('Item 1')
  })


  it('expands a submenu when its parent is clicked', async () => {
    const wrapper = mount(Menu, {
      props: {
        items
      }
    })

    const subitem = wrapper.find('.menu-item:nth-child(1) .arrow')
    expect(subitem.classes()).toContain('arrow')

    await subitem.trigger('click')
    expect(subitem.classes()).toContain('arrow-up')
  })
})
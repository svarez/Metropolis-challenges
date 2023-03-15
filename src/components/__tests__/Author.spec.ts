import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AuthorComponent from '@/components/Author.vue'
import { Author } from '@/interfaces/Author'

describe('Author', () => {
  it('renders the author name and opens modal on click', async () => {
    
    const author:Author = {
      id: 1,
      fullName: 'John Doe',
      pictureUrl: 'https://via.placeholder.com/150',
      role: 'Writer',
      publications: 10,
      views: 1000,
      followers: 50,
      profileUrl: 'https://example.com/johndoe',
      affiliations: []
    }

    const selectedAuthor = null
    
    const wrapper = shallowMount(AuthorComponent, {
      props: {
        author,
        selectedAuthor
      }
    })

    const name = wrapper.find('.name')
    expect(name.text()).toBe('John Doe')

    const modal = wrapper.find('.box')
    expect(modal.exists()).toBe(false)

    name.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.box').exists()).toBe(true)
  })
})

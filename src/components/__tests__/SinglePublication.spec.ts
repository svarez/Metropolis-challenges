import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SinglePublication from '@/components/SinglePublication.vue'
import { Publication } from '@/interfaces/Publication'

describe('SinglePublication', () => {

    const publication:Publication = {
        type: 'Article',
        title: 'Test Article',
        journal: 'Test Journal',
        section: 'Test Section',
      }

    it('renders the correct publication data', () => {
      const wrapper = mount(SinglePublication, {
        props: {
          publication,
        },
      })
  
      expect(wrapper.find('h4').text()).toBe('Article')
      expect(wrapper.find('h3').text()).toBe('Test Article')
      expect(wrapper.find('h5').text()).toBe('Test Journal | Test Section')
    })
  })
  
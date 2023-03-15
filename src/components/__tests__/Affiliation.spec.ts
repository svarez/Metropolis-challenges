import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AffiliationComponent from '@/components/Affiliation.vue'
import { Affiliation } from '@/interfaces/Affiliation'

describe('ComponentName', () => {
  it('should show affiliations list when clicked', async () => {
    const affiliations:Affiliation[] = [
      { id: 1, name: 'Affiliation1', city: 'City1', country: 'Country1' },
      { id: 2, name: 'Affiliation2', city: 'City2', country: 'Country2' },
      { id: 3, name: 'Affiliation3', city: 'City3', country: 'Country3' },
    ]
    const wrapper = shallowMount(AffiliationComponent, {
      props: {
        affiliations,
      },
    })
    const title = wrapper.find('.title')
    title.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.affiliations-list').exists()).toBe(true)
  })
})

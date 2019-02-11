/* global describe, expect, test */

import React from 'react'
import { shallow } from 'enzyme'

import TaskTitle from './'

describe('TaskTitle', () => {
  test('truncates the title if it\'s less than 17 characters', () => {
    const component = shallow(<TaskTitle title='A really really long title' />)
    expect(component.text()).toEqual('A really really l...')
  })

  test('doesn\'t trucate titles that are under 17 chars', () => {
    const component = shallow(<TaskTitle title='a short title' />)
    expect(component.text()).toEqual('a short title')
  })
})

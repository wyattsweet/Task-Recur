/* global expect, test, jest */

import React from 'react';
import { mount } from 'enzyme';

import EditButton from './EditButton';
import context from './testFixture';


jest.mock('./Provider');

// const hasButton = wrapper => wrapper.find(sel['button']).length === 1;

test('renders a button', () => {
  const component = mount(<EditButton />); /*eslint-disable-line */
  expect(component.find('button').length).toBe(1);
});

test('function called on click', () => {
  const component = mount(<EditButton />);
  component.find('button').simulate('click');
  expect(context.setTaskToEdit.mock.calls.length).toBe(1);
});

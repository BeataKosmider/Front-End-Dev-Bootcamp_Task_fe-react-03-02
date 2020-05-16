import React from 'react';
import List from './List';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  listItems: ['1', '2', '3'],
  isOrdered: true
};

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  })

  it('Dodano poprawną ilość li wewnątrz ul', () => {
    expect(wrapper.find('li').length).toBe(props.listItems.length);
  });

  it('Dodano poprawnie komponent listy OL, zgodnie z parametrem isOrdered', () => {
    expect(wrapper.find('ol').exists()).toBe(true);
  });

  it('Dodano poprawnie komponent listy UL, zgodnie z parametrem isOrdered', () => {
    props.isOrdered = false;
    wrapper = shallow(<List {...props} />);
    expect(wrapper.find('ul').exists()).toBe(true);
  });
});
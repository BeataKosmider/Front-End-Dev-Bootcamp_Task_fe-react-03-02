import React from 'react';
import List from './List';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  listItems: ['1', '2', '3'],
  isOrdered: true,
};

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  it('Dodano poprawną ilość li wewnątrz ul', () => {
    expect(wrapper.find('li').length).toBe(props.listItems.length);
  });

  it('Dodano uporządkowaną listę (<ol>) jeśli isOrdered jest true', () => {
    expect(wrapper.find('ol').exists()).toBe(true);
  });

  it('Dodano nieuporządkowaną listę (<ul>) jeśli isOrdered jest false', () => {
    props.isOrdered = false;
    wrapper = shallow(<List {...props} />);
    expect(wrapper.find('ul').exists()).toBe(true);
  });

  it('Dodano key do kazdego li', () => {
    const listItems = wrapper.find('li');

    listItems.forEach((listItem, index) => {
      expect(listItem.key()).toBe(String(index));
    });
  });
});

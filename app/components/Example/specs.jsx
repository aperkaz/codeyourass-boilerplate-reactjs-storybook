import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Example from './Example';

describe('Example', () => {
  it('should contain h1', () => {
    const component = shallow(<Example />);
    expect(component.find('h1')).be.present();
  });
  it('should contain h1 with text', () => {
    const component = shallow(<Example>Text</Example>);
    expect(component.find('h1')).to.have.text('This is example. So say: Text');
  });
});

chai.use(chaiEnzyme());

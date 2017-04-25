import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import ArticlePanel from './ArticlePanel';

/*
const defaultProps = {
  title: 'TITLE',
  subtitle: 'SUBTITLE. DOLOR AMET DOLO AMET',
  followers: 15,
  userName: 'DENISA JUNA',
  date: '3 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};
*/

describe('ArticlePanel', () => {
  it('should contain div', () => {
    const wrapper = shallow(<ArticlePanel />);
    expect(wrapper.find('div')).be.present();
  });
  
  // assert the content of the new createt component
  it('should contain div', () => {
    const component = shallow(<ArticlePanel />);
    expect(component.find('div')).be.present();
  });
});

chai.use(chaiEnzyme());

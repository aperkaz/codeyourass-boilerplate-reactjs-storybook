import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, render, mount } from 'enzyme';
import ArticlePanel from './ArticlePanel';

/* Props for tests */
const defaultProps = {
  dispatch: () => {},
  manifest: { components: [] },
};

const baseProps = {
  title: 'BASE TITLE',
  subtitle: '',
  followers: 1,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: '',
};

const imageProps = {
  title: 'TITLE',
  subtitle: '',
  followers: 2,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};

const subtitleProps = {
  title: 'TITLE',
  subtitle: 'SUBTITLE',
  followers: 3,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: '',
};

const completeProps = {
  title: 'COMPLETE TITLE',
  subtitle: 'COMPLETE SUBTITLE',
  followers: 4,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};

describe('ArticlePanel', () => {
  it('should render without blowing up', () => {
    const wrapper = shallow(<ArticlePanel {...defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });

  // assert the content of the new createt component
  it('should contain div', () => {
    const wrapper = shallow(<ArticlePanel />);
    expect(wrapper.find('#main')).be.present();
  });

  // assert props render correctly
  it('rendering with image and subtitle', () => {
    const wrapper = mount(<ArticlePanel data={completeProps} />);

    expect(wrapper.find('#title').text()).to.equal('COMPLETE TITLE');
    expect(wrapper.find('#subtitle').text()).to.equal('COMPLETE SUBTITLE');
    expect(wrapper.find('#followers').text()).to.equal('4 FOLLOWERS');
    expect(wrapper.find('#userName').text()).to.equal('ALAIN PERKAZ');
    expect(wrapper.find('#date').text()).to.equal('1 MARCH 2017');
    expect(wrapper.find('#main').props().style.backgroundImage).to.eql('url( http://kingofwallpapers.com/gradient/gradient-011.jpg )');
  });

  it('rendering with subtitle', () => {
    //const wrapper = shallow(<ArticlePanel props={subtitleProps}/>);
    //expect(wrapper).to.containMatchingElement(  <h4 id="subtitle">SUBTITLE</h4>);
  });

  it('rendering with image', () => {

  });

  it('rendering without image and subtitle', () => {

  });

});

chai.use(chaiEnzyme());

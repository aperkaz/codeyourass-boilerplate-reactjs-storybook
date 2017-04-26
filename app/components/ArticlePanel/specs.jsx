import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import ArticlePanel from './ArticlePanel';

/* Props for tests */
const defaultProps = {
  dispatch: () => {},
  manifest: { components: [] },
};

const baseProps = {
  title: 'TITLE',
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
    const wrapper = shallow(<ArticlePanel article={defaultProps} />);
    expect(wrapper.length).to.eql(1);
  });

  // assert the content of the new createt component
  it('should contain main div', () => {
    const wrapper = shallow(<ArticlePanel article={baseProps} />);
    expect(wrapper.find('#article-panel-main')).be.present();
  });

  // assert props render correctly
  it('rendering with image and subtitle', () => {
    const wrapper = mount(<ArticlePanel article={completeProps} />);

    expect(wrapper.find('#title').text()).to.equal('COMPLETE TITLE');
    expect(wrapper.find('#subtitle').text()).to.equal('COMPLETE SUBTITLE');
    expect(wrapper.find('#followers').text()).to.equal('4 FOLLOWERS');
    expect(wrapper.find('#userName').text()).to.equal('ALAIN PERKAZ');
    expect(wrapper.find('#date').text()).to.equal('1 MARCH 2017');
    expect(wrapper.find('#article-panel-main').props().style.backgroundImage).to.eql('url( http://kingofwallpapers.com/gradient/gradient-011.jpg )');
  });

  // aasert conditional renderings
  it('rendering with subtitle and without image', () => {
    const wrapper = mount(<ArticlePanel article={subtitleProps} />);

    expect(wrapper.find('#subtitle').text()).to.equal('SUBTITLE');
    expect(wrapper.find('#article-panel-main').props().style.backgroundImage).to.equal(null);
  });

  it('rendering with image and without subtitle', () => {
    const wrapper = mount(<ArticlePanel article={imageProps} />);

    expect(wrapper.find('#subtitle')).be.not.present();
    expect(wrapper.find('#article-panel-main').props().style.backgroundImage).to.eql('url( http://kingofwallpapers.com/gradient/gradient-011.jpg )');
  });

  it('rendering without image and subtitle', () => {
    const wrapper = mount(<ArticlePanel article={baseProps} />);

    expect(wrapper.find('#subtitle')).be.not.present();
    expect(wrapper.find('#article-panel-main').props().style.backgroundImage).to.eql(null);
  });
});

chai.use(chaiEnzyme());

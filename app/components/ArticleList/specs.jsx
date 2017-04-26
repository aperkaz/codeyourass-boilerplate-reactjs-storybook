import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import ArticleList from './ArticleList';

/* Props for tests */
const defaultProps = {
  dispatch: () => {},
  manifest: { components: [] },
};

const articleProps = {
  title: 'TITLE',
  subtitle: 'SUBTITLE . DOLOR AMET DOLO AMET',
  followers: 4,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};

const articles = [articleProps, articleProps, articleProps];

describe('ArticleList', () => {
  it('should render without blowing up', () => {
    const wrapper = shallow(<ArticleList articles={defaultProps} />);
    expect(wrapper.length).to.equal(1);
  });

  it('list size', () => {
    const wrapper = mount(<ArticleList articles={articles} />);
    expect(wrapper.find('.article')).to.have.length(3);
  });
});

chai.use(chaiEnzyme);

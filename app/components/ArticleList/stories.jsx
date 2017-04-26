import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ArticleList from './ArticleList';

/* Props for stories */
const simpleArticleProps = {
  title: 'SIMPLE TITLE',
  followers: 1,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
};

const complexArticleProps = {
  title: 'COMPLEX TITLE',
  subtitle: 'SUBTITLE . DOLOR AMET DOLO AMET',
  followers: 4,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};

const simpleArticles = [
  simpleArticleProps, simpleArticleProps,
  simpleArticleProps, simpleArticleProps,
];
const complexArticles = [
  complexArticleProps, complexArticleProps,
  complexArticleProps, complexArticleProps,
];

/* Helper CSS class*/
const style = {
  width: '80%',
  margin: '30px auto',
};

storiesOf('ArticleList', module)

.add('List with simple articles', () => (
  <div style={style}>
    <ArticleList articles={simpleArticles} />
  </div>
))

.add('List with complex articles', () => (
  <div style={style}>
    <ArticleList articles={complexArticles} />
  </div>
));

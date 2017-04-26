import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ArticlePanel from './ArticlePanel';

/* Props for stories */
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
  subtitle: 'SUBTITLE . DOLOR AMET DOLO AMET',
  followers: 3,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: '',
};

const completeProps = {
  title: 'TITLE',
  subtitle: 'SUBTITLE . DOLOR AMET DOLO AMET',
  followers: 4,
  userName: 'ALAIN PERKAZ',
  date: '1 MARCH 2017',
  imagePath: 'http://kingofwallpapers.com/gradient/gradient-011.jpg',
};

console.log(...Object.values(completeProps));

/* Add stories */
storiesOf('ArticlePanel', module)

.add('default', () => (
  <ArticlePanel article={baseProps}/>
))

.add('With image and subtitle', () => (
  <ArticlePanel article={completeProps}  ></ArticlePanel>
))

.add('With image, without subtitle', () => (
  <ArticlePanel article={imageProps} />
))

.add('With subtitle, without image', () => (
  <ArticlePanel article={subtitleProps} />
))

.add('Without image and subtitle', () => (
  <ArticlePanel article={baseProps} />
));

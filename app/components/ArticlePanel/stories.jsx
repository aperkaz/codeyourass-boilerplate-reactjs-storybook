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

/* CSS class*/
const style = {
    width: '80%',
    margin: '30px auto',
};

/* Add stories */
storiesOf('ArticlePanel', module)

.add('default', () => (
  <div style={style}>
    <ArticlePanel article={baseProps}/>
  </div>
))

.add('With image and subtitle', () => (
  <div style={style}>
    <ArticlePanel article={completeProps}  />
  </div>
))

.add('With image, without subtitle', () => (
  <div style={style}>
    <ArticlePanel article={imageProps} />
  </div>
))

.add('With subtitle, without image', () => (
  <div style={style}>
    <ArticlePanel article={subtitleProps} />
  </div>
))

.add('Without image and subtitle', () => (
  <div style={style}>
    <ArticlePanel article={baseProps} />
  </div>
));

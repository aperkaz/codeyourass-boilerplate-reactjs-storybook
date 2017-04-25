import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ArticlePanel from './ArticlePanel';

storiesOf('Alain\'s components', module)

.add('with text', () => (
  <ArticlePanel>Article</ArticlePanel>
));

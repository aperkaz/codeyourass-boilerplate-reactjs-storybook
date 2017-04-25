import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Example from './Example';


storiesOf('Example Button', module)

.add('with text', () => (
  <Example>Hello Example!</Example>
))

.add('with other text', () => (
  <Example>Good bye</Example>
));

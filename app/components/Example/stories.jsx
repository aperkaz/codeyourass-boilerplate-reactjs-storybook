import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Example from './Example';

storiesOf('Button', module)

.add('with text', () => (
  <Example>Hello Example!</Example>
));

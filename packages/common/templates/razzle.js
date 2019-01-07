// @flow
import Template from './template';
import { decorateSelector } from '../theme';

export default new Template(
  'razzle',
  'Razzle',
  'https://github.com/jaredpalmer/razzle',
  'razzle',
  decorateSelector(() => '#e75480'), // TODO: Update Color
  {
    isServer: true,
    showOnHomePage: true, // TODO: Any other config needed?
  }
);

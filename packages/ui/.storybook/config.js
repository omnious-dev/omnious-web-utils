// CSS import
import './index.css';
// import '@omnious/reset';
// import 'github-markdown-css/github-markdown';

// Global import
import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: '@omnious/ui',
  url: 'https://www.npmjs.com/package/@omnious/ui',
  hierarchyRootSeparator: /\|/
});

setDefaults({
  inline: true,
  styles: base => ({
    ...base,
    infoBody: {
      ...base.infoBody,
      border: 0
    }
  })
});

const req = require.context('../src', true, /\.stories.tsx$/);
const loadStories = () => {
  require('./Welcome.stories');
  req.keys().forEach(file => req(file));
};

configure(loadStories, module);

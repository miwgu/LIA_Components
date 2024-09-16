// src/components/atoms/button/button.stories.jsx
// src/components/atoms/button/button.stories.jsx
import React from 'react';
import Button from './Button'; // Importera från index.js

export default {
  title: 'LIA/Atom/Button',
  component: Button,
};

export const Default = (args) => <Button {...args} />;
Default.args = {
  text: '', // Standardvärde för `text`
};
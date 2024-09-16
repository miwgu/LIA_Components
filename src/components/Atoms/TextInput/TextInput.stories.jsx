import React from 'react';
import TextInput from './TextInput'; // Importera från index.js

export default {
  title: 'LIA/Atom/TextInput',
  component: TextInput,
};

export const Default = (args) => <TextInput {...args} />;
Default.args = {
  label: 'Label', // Standardvärde för `label`
  value: '', // Standardvärde för `value`
  onChange: () => {}, // Standardfunktion för `onChange`
  type: 'text', // Standardtyp för `input`
};
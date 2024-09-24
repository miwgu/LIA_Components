import React, { useState } from 'react';
import SearchInput from './SearchInput';

export default {
  title: 'Form/SearchInput',
  component: SearchInput,
};

const Template = (args) => {
  const [value, setValue] = useState(''); // Simulera state-hantering för input-värdet

  return (
    <SearchInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
};

export const WithText = Template.bind({});
WithText.args = {
  value: 'Initial Search Value',
  placeholder: 'Search for items',
};

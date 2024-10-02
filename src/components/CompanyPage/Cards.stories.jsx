import React from 'react'
import Cards from './Cards'

export default {
  title: 'LIA/CompanyPage/Cards',
  component: Cards,
}

function Template(args) {
  return <Cards {...args} />
}

const data =

{
  title: "It-special",
  description: "Student type- Frontend and backend developer"
}

export const CardComponent = Template.bind({})
CardComponent.args = {
  ...data,
}
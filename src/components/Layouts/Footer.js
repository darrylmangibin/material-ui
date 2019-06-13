import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, onSelect, category }) => {
  const index = category ? muscles.findIndex((group) => {
    return group === category
  }) + 1 : 0

  const onIndexChange = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => {
          return <Tab key={group} label={group} />
        })}
        
      </Tabs>
    </Paper>
  )
}

export default Footer;
import React from 'react';
import TabsContainer from '../containers/tabs-container';

export default function(props) {
  return (
      <TabsContainer key={props.params.categoryId} params={props.params}/>
    );
}

import React from 'react';
import { removeItem } from '../actions/actionCreators';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
       className="button"
       onClick={() => props.removeItem(props.feature)}
       >
         X
         </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

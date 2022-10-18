import React from 'react';
import PropTypes from 'prop-types';

CartList.propTypes = {
  listItems: PropTypes.array,
};

CartList.propTypes = {
  listItems: [],
};

function CartList({ listItems }) {
  return (
    <div>
      <ul>
        {listItems.map((list) => (
          <li key={list.id}>{list.product}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;

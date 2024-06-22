import React from 'react';

function CartIcon({ onClick, cartItemCount }) {
  return (
    <div onClick={onClick} style={{ position: 'fixed', top: 10, right: 10, cursor: 'pointer' }}>
      🛒 {cartItemCount}
    </div>
  );
}

export default CartIcon;

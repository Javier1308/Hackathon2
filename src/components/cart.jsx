import React, { useState } from 'react';
import CartIcon from './cartIcon';
import CartModal from './CartModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handlePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPurchaseComplete(true);
      setCartItems([]);
    }, 5000);
  };

  return (
    <div>
      <CartIcon onClick={() => setIsCartOpen(true)} cartItemCount={cartItems.length} />
      {isCartOpen && (
        <CartModal
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={handleRemoveFromCart}
          onPurchase={handlePurchase}
          isLoading={isLoading}
          isPurchaseComplete={isPurchaseComplete}
        />
      )}
      <div>
        <h1>Lista de Productos</h1>
        <button onClick={() => handleAddToCart('Producto 1')}>Añadir Producto 1</button>
        <button onClick={() => handleAddToCart('Producto 2')}>Añadir Producto 2</button>
      </div>
    </div>
  );
}

export default App;
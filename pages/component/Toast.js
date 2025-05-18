import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useCartStore } from './store/cartStore';
import { AiOutlineClose } from 'react-icons/ai';

const Toast = () => {
  const [visible, setVisible] = useState(false);
  const { cart, removeFromCart } = useCartStore(state => state);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Use spring animation to control sliding
  const slideIn = useSpring({
    transform: visible ? 'translateX(0%)' : 'translateX(100%)',
    opacity: visible ? 1 : 0,
    config: { tension: 200, friction: 30 }
  });

  // Listen to cart changes to show the toast for the latest item added
  useEffect(() => {
    if (cart.length > 0) {
      const lastItem = cart[cart.length - 1];
      setLastAddedItem(lastItem);
      setVisible(true);

      // Hide toast after 3 seconds
      setTimeout(() => setVisible(false), 3000);
    }
  }, [cart]);

  // Remove item from cart
  const handleRemoveItem = (slug) => {
    removeFromCart(slug);
    setVisible(false); // Hide toast immediately when item is removed
  };

  return (
    lastAddedItem && (
      <animated.div
        className="fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg flex items-center space-x-4 shadow-lg"
        style={slideIn}
      >
        <div className="flex flex-col">
          <p className="font-bold">{lastAddedItem.name}</p>
          <p>${lastAddedItem.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => handleRemoveItem(lastAddedItem.slug)}
            className="bg-red-500 p-2 rounded-full"
            aria-label="Remove from cart"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </animated.div>
    )
  );
};

export default Toast;

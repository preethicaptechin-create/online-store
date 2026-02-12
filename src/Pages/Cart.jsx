// import React, { useEffect, useState } from "react";
// import { products } from "../Services/Product";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   // ✅ Load cart from localStorage
// useEffect(() => {
//   const savedCart =
//     JSON.parse(localStorage.getItem("cart")) || [];

//   console.log("Cart loaded:", savedCart);

//   setCart(savedCart);
// }, []);


//   // ✅ Save cart to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Increase quantity
//   const increaseQty = (id) => {
//     setCart(cart.map(item =>
//       item.id === id
//         ? { ...item, qty: item.qty + 1 }
//         : item
//     ));
//   };

//   // ✅ Decrease quantity
//   const decreaseQty = (id) => {
//     setCart(cart
//       .map(item =>
//         item.id === id
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       )
//       .filter(item => item.qty > 0)
//     );
//   };

//   // ✅ Remove item
//   const removeItem = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   // ✅ Total price
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   if (cart.length === 0) {
//     return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
//   }

//   return (
//     <div className="cart-page">

//       <h1>Your Cart</h1>

//       {cart.map(item => (

//         <div key={item.id} className="cart-item">

//           <img src={item.image} alt={item.name} />

//           <div className="cart-info">

//             <h3>{item.name}</h3>
//             <p>₹ {item.price}</p>

//             <div className="qty-controls">

//               <button onClick={() => decreaseQty(item.id)}>−</button>

//               <span>{item.qty}</span>

//               <button onClick={() => increaseQty(item.id)}>+</button>

//             </div>

//             <button
//               className="remove-btn"
//               onClick={() => removeItem(item.id)}
//             >
//               Remove
//             </button>

//           </div>

//         </div>

//       ))}

//       <h2 className="total">
//         Total: ₹ {total}
//       </h2>

//     </div>
//   );
// };

// export default Cart;


// 
import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {

  // ✅ Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Increase quantity
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // ✅ Remove item
  const removeItem = (id) => {
    setCart(prev =>
      prev.filter(item => item.id !== id)
    );
  };

//   // ✅ Total price
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   // ✅ Total items
//   const totalItems = cart.reduce(
//     (sum, item) => sum + item.qty,
//     0
//   );

// total quantity
const totalItems = cart.reduce(
  (sum, item) => sum + item.qty,
  0
);

// total price
const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);


  // ✅ Empty cart UI
//   if (cart.length === 0) {
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         Your cart is empty
//       </h2>
//     );
//   }

  return (

    <div className="cart-page">

      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">

        {/* 🛒 ITEMS SECTION */}
        <div className="cart-items">

          {cart.map(item => (

            <div key={item.id} className="cart-item">

              <img
                src={item.image}
                alt={item.name}
                className="cart-img"
              />

              <div className="cart-info">

                <h3>{item.name}</h3>
                <p className="price">₹ {item.price}</p>

                <div className="qty-controls">

                  <button onClick={() => decreaseQty(item.id)}>−</button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>+</button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* 💰 SUMMARY SECTION */}
        <div className="cart-summary">

          <h2>Total</h2>

          <p>Total Items: {totalItems}</p>

          <p>Total Price: ₹ {totalPrice}</p>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;

import Close from "../images/icon-close.svg";
import CartContent from "./CartContent";
import { useStateContext } from "./ContextProvider";

const Cart = ({ setOpenCart }) => {
  const { cart } = useStateContext();

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div className="cart-container">
      <button
        onClick={handleCloseCart}
        style={{ border: "none", background: "transparent" }}
      >
        <img alt="x" src={Close} style={{ padding: "20px" }} />
      </button>
      <div className="cart-title">Cart</div>
      {cart === [] ? <div>Your cart is empty</div> : <CartContent />}
    </div>
  );
};

export default Cart;

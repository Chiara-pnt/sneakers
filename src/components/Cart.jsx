import { useStateContext } from "./ContextProvider";
import Close from "../images/icon-close.svg";
import CartContent from "./CartContent";

const Cart = ({ setOpenCart }) => {
  const { full } = useStateContext();

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
      {full ? (
        <CartContent />
      ) : (
        <div className="cart-body">Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;

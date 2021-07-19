import { toast } from "react-toastify";

const notificationsMiddleware = () => (next) => (action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    const productName = action.singleProduct.name;
    toast.success(`cart: added ${productName}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  next(action);
};

export default notificationsMiddleware;

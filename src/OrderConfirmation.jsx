import { gapi } from "gapi-script";
import GoogleAuth from "./GoogleAuth";

const OrderConfirmation = ({ eventId }) => {
  console.log(eventId);
  return (
    <>
      <h1>Order Confirmed</h1>
      <GoogleAuth />
    </>
  );
};

export default OrderConfirmation;

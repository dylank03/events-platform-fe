import { gapi } from "gapi-script";
import GoogleAuth from "./GoogleAuth";
import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
  const { eventId } = useParams();
  console.log(eventId);

  return (
    <>
      <h1>Order Confirmed</h1>
      <GoogleAuth />
    </>
  );
};

export default OrderConfirmation;

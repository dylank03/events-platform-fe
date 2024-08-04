import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";

const EmbeddedCheckout = () => {
  const { eventId } = useParams();
  const [orderComplete, setOrderComplete] = useState(false);

  var exampleCallback = function () {
    setOrderComplete(true);
  };

  window.EBWidgets.createWidget({
    // Required
    widgetType: "checkout",
    eventId: eventId,
    iframeContainerId: `eventbrite-widget-container-${eventId}`,

    // Optional
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  });

  return (
    <>
      {orderComplete && <Navigate to="/confirmation" replace={true} />}
      <div id={`eventbrite-widget-container-${eventId}`}></div>
    </>
  );
};

export default EmbeddedCheckout;

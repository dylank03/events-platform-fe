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
    modal: true,
    modalTriggerElementId: `eventbrite-widget-modal-trigger-${eventId}`,
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  });

  return (
    <>
      {orderComplete && <Navigate to="/confirmation" replace={true} />}
      <div id={`eventbrite-widget-container-${eventId}`}>
        <button id={`eventbrite-widget-modal-trigger-$eventId`} type="button">
          Buy Tickets
        </button>
      </div>
    </>
  );
};

export default EmbeddedCheckout;

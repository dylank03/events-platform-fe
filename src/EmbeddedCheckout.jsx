import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";

const EmbeddedCheckout = () => {
  const { eventId } = useParams();
  const [orderComplete, setOrderComplete] = useState(false);

  var exampleCallback = function () {
    setOrderComplete(true);
  };

  window.EBWidgets.createWidget({
    widgetType: "checkout",
    eventId: eventId,
    iframeContainerId: `eventbrite-widget-container-${eventId}`,
    iframeContainerHeight: 425,
    onOrderComplete: exampleCallback,
  });

  return (
    <>
      {orderComplete && (
        <Navigate to={`/confirmation/${eventId}`} replace={true} />
      )}
      <div id={`eventbrite-widget-container-${eventId}`}></div>
    </>
  );
};

export default EmbeddedCheckout;

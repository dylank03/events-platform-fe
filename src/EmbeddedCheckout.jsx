import { useParams } from "react-router-dom";

const EmbeddedCheckout = () => {
  const { eventId } = useParams();

  var exampleCallback = function () {
    console.log("Order complete!");
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

  return <div id={`eventbrite-widget-container-${eventId}`}></div>;
};

export default EmbeddedCheckout;

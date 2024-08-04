const EmbeddedCheckout = () => {
  var exampleCallback = function () {
    console.log("Order complete!");
  };

  window.EBWidgets.createWidget({
    // Required
    widgetType: "checkout",
    eventId: "974265583587",
    iframeContainerId: "eventbrite-widget-container-974265583587",

    // Optional
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  });

  return <div id="eventbrite-widget-container-974265583587"></div>;
};

export default EmbeddedCheckout;

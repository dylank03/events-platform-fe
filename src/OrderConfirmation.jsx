import { useParams } from "react-router-dom";
import { getEvent } from "./api/api";
import { useEffect, useState } from "react";
import AddToCalendar from "./AddToCalendar";

const OrderConfirmation = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [calendarLink, setCalendarLink] = useState("");

  useEffect(() => {
    getEvent(eventId).then((eventDetails) => {
      setEvent({
        summary: eventDetails.data.name.text,
        start: {
          dateTime: eventDetails.data.start.local,
          timeZone: "Europe/Zurich",
        },
        end: {
          dateTime: eventDetails.data.end.local,
          timeZone: "Europe/Zurich",
        },
      });
    });
  }, []);

  return (
    <>
      <h1>Order Confirmed</h1>
      <AddToCalendar event={event} setCalendarLink={setCalendarLink} />
    </>
  );
};

export default OrderConfirmation;

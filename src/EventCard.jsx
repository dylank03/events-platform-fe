import { useEffect, useState } from "react";
import { getEvents } from "./api/api";

const EventCard = () => {
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents().then(({ events }) => {
      setLoading(false);
      setEvents(events);
    });
  }, [loading]);

  return (
    <>
      {loading || (
        <ul>
          {events.map((event) => {
            return (
              <li className="event-card" key={event.id}>
                <h1>{event.name.text}</h1>
                <h2>{event.start.local}</h2>
                <h2>{event.end.local}</h2>
                <h3>{event.currency}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default EventCard;

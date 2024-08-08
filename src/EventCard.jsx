import { useEffect, useState } from "react";
import { getEvents } from "./api/api";
import { Link } from "react-router-dom";

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
              <Link to={"/event/" + event.id} key={event.id}>
                <li className="event-card">
                  <img
                    className="card-event-image"
                    src={
                      event.logo ||
                      "https://images.pexels.com/photos/17506106/pexels-photo-17506106/free-photo-of-top-view-of-people-sitting-at-a-table-in-a-cafe-with-coffees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                  <h1>{event.name.text}</h1>
                  <h2>{new Date(event.start.local).toDateString()}</h2>
                  <h2>{new Date(event.end.local).toDateString()}</h2>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default EventCard;

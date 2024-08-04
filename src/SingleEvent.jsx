import { Navigate, useParams } from "react-router-dom";
import { getEvent } from "./api/api";
import { useState, useEffect } from "react";

const SingleEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(false);
  // useEffect(() => {
  //   getEvent(eventId).then(({ data }) => {
  //     setEvent(data);
  //     setLoading(false);
  //   });
  // }, [loading]);

  return (
    <div>
      {register && <Navigate to="/checkout" replace={true}></Navigate>}
      {loading || (
        <>
          <div className="event-container">
            <h1>{event.name.text}</h1>
            <img
              className="event-image"
              src={
                event.logo ||
                "https://images.pexels.com/photos/17506106/pexels-photo-17506106/free-photo-of-top-view-of-people-sitting-at-a-table-in-a-cafe-with-coffees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
            <h3>
              <span className="material-symbols-outlined">person</span>{" "}
              capacity: {event.capacity}
            </h3>
            <h3>start: {event.start.local}</h3>
            <h3>end: {event.end.local}</h3>
          </div>
          <p className="event-summary">
            {event.summary || "There is no summary for this event"}{" "}
          </p>
          <button
            onClick={() => {
              setRegister(true);
            }}
            className="event-register-button"
          >
            Get Tickets!
          </button>
        </>
      )}
    </div>
  );
};

export default SingleEvent;

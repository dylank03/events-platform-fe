import { useParams } from "react-router-dom";
import { getEvent } from "./api/api";
import { useState, useEffect } from "react";

const SingleEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvent(eventId).then(({ data }) => {
      setEvent(data);
      setLoading(false);
    });
  }, [loading]);

  console.log(event);

  return <div>{loading || <h1>{event.name.text}</h1>}</div>;
};

export default SingleEvent;

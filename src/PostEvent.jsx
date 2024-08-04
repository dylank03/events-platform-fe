import { useState } from "react";
import { postEvent } from "./api/api";

const PostEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventLogo, setEventLogo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedEventStart =
      new Date(eventStart).toISOString().slice(0, 19) + "Z";
    const formattedEventEnd =
      new Date(eventEnd).toISOString().slice(0, 19) + "Z";
    postEvent(eventName, formattedEventStart, formattedEventEnd, eventLogo)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <form className="register-container">
        <div>
          <h1>Post Event</h1>
          <label className="form-label">Event Name:</label>
          <input
            className="form-input"
            value={eventName}
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
          <label className="form-label">Event Start</label>
          <input
            className="form-input"
            value={eventStart}
            onChange={(event) => {
              setEventStart(event.target.value);
            }}
            type="datetime-local"
          />
          <label className="form-label">Event End</label>
          <input
            className="form-input"
            value={eventEnd}
            onChange={(event) => {
              setEventEnd(event.target.value);
            }}
            type="datetime-local"
          />
          <label className="form-label">Event Logo/Image (optional)</label>
          <input
            className="form-input"
            value={eventLogo}
            onChange={(event) => {
              setEventLogo(event.target.value);
            }}
          />
          <button className="form-button" onClick={handleSubmit}>
            Post!
          </button>
        </div>
      </form>
    </>
  );
};

export default PostEvent;

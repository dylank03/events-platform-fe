import { getUser } from "./api/api";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const HomePage = ({ setUser }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    getUser()
      .then(({ user }) => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setUser(user);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <>
      <EventCard />
    </>
  );
};

export default HomePage;

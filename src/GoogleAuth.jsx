import React, { useEffect, useState, useRef } from "react";

const CLIENT_ID =
  "598255800283-9pg5gq71eh2nokm4srg3u0v9ere2bj4o.apps.googleusercontent.com";
const API_KEY = "AIzaSyCfGebDU7ldlTk5uachJrsqyhR_B5K2gek";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar";

function GoogleAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState("");
  const tokenClient = useRef(null);
  const authorizeButton = useRef(null);
  const signoutButton = useRef(null);

  useEffect(() => {
    const gapiLoaded = () => {
      gapi.load("client", initializeGapiClient);
    };

    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
    };

    const gisLoaded = () => {
      tokenClient.current = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "",
      });
    };

    const loadGapiAndGis = () => {
      const script1 = document.createElement("script");
      script1.src = "https://apis.google.com/js/api.js";
      script1.onload = gapiLoaded;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://accounts.google.com/gsi/client";
      script2.onload = gisLoaded;
      document.body.appendChild(script2);
    };

    loadGapiAndGis();
  }, []);

  const handleAuthClick = () => {
    tokenClient.current.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      setIsSignedIn(true);
      await addEventToCalendar();
    };

    if (gapi.client.getToken() === null) {
      tokenClient.current.requestAccessToken({ prompt: "consent" });
    } else {
      tokenClient.current.requestAccessToken({ prompt: "" });
    }
  };

  const handleSignoutClick = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      setIsSignedIn(false);
      setEvents("");
    }
  };

  var event = {
    summary: "Google I/O 2015",
    location: "800 Howard St., San Francisco, CA 94103",
    description: "A chance to hear more about Google's developer products.",
    start: {
      dateTime: "2024-08-06T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2024-08-06T17:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  const addEventToCalendar = async () => {
    try {
      await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Google Calendar API Quickstart</p>
      {isSignedIn || (
        <button ref={authorizeButton} onClick={handleAuthClick}>
          Authorize
        </button>
      )}
      {isSignedIn && (
        <button ref={signoutButton} onClick={handleSignoutClick}>
          Sign Out
        </button>
      )}
      <h1>{events}</h1>
    </div>
  );
}

export default GoogleAuth;

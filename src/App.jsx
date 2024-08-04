import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import { useState } from "react";
import PostEvent from "./PostEvent";
import SingleEvent from "./SingleEvent";
import PageNotFound from "./PageNotFound";
import EmbeddedCheckout from "./EmbeddedCheckout";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header setUser={setUser} user={user}></Header>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage setUser={setUser} />} />
        <Route path="/postevent" element={<PostEvent />} />
        <Route path="/event/:eventId" element={<SingleEvent />} />
        <Route path="/checkout/:eventId" element={<EmbeddedCheckout />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

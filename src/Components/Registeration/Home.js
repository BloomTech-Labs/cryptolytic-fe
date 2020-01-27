import React from "react";
import firebase from "firebase/app";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;

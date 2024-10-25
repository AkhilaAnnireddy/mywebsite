import React from "react";
import "./Home.css";
import profilePicture from "../../Assets/akhila_annireddy_headshot.png";

function Home() {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Akhila Annireddy</h1>
        <p>
          I am a passionate software engineer exploring machine learning,
          artificial intelligence, and solving complex problems with code. I
          love building software solutions that impact lives.
        </p>
      </div>

      <div className="image-container">
        <img
          src={profilePicture}
          alt="Akhila Annireddy"
          className="profile-picture"
        />
      </div>
    </div>
  );
}

export default Home;

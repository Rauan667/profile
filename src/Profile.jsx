import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="profile">
      <h2>About Me</h2>
      <p>
        Hi, my name is Rauan, I am 19 years old. I go to the gym to maintain my
        body tone. I went to karate for 10 years, I have the title of candidate
        master of sports and a black belt. As a child, I went to football and
        played the dombyra. I really love music and can play various musical
        instruments. I have been interested in programming since the 10th grade.
      </p>
      <div className="photo-gallery">
        <button onClick={handlePrev}>&lt; Prev</button>
        <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={handleNext}>Next &gt;</button>
      </div>
      <h3>Education</h3>
      <div className="education">
        <img src="https://qamalladinuniversity.online/wp-content/uploads/2022/08/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-08-14_%D0%B2_17.51.20-removebg-preview.png" />
        <p>Field of study: Frontend Development</p>
        <p>University: Qamalladin University</p>
        <p>Year: 2024 - 2025</p>
      </div>
    </div>
  );
}

export default Profile;

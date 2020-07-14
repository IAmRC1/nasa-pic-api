import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { shorten, full } from "../utils.js";

const apiKey = 'kt7ORKopOufpMdFLtx6rq3ug8rtBGUv8mVf3aIPz'

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
    fetchPhoto();
  }, []);

  const read_more = (str) => {
    const read_more_btn = document.getElementById('rm_btn');
    read_more_btn.classList.add('d-none')
    const para = full(str)
    setDesc(para)
  }

  if (!photoData) return <div />;

  return (
    <>
    <NavBar />
    <div className="nasa-photo">
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{shorten(photoData.explanation)}
          {desc === "" ? <span id="rm_btn" className="read-more" onClick={() => read_more(photoData.explanation)}>...Read More</span> : desc}
        </p>
      </div>
    </div>
    </>
  );
}

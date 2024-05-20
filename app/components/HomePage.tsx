"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const HomePage = () => {
  const URL = "https://zenquotes.io/api/image";
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response);
      console.log(data);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData;
  });

  return (
    <div>
      <img
        src="https://zenquotes.io/api/image"
        alt="Image"
        height={100}
        width={100}
      />
    </div>
  );
};

export default HomePage;

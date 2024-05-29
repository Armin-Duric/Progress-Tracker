"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const HomePage = () => {
  interface Quote {
    content: string;
    author: string;
  }

  const URL = "https://api.quotable.io/quotes/random?tags=motivational";
  const [data, setData] = useState<Quote[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center m-4 p-10 w-full">
      <h1>{data ? data[0].content : "Loading..."}</h1>
      <h2>{data ? `By: ${data[0].author}` : null}</h2>
    </div>
  );
};

export default HomePage;

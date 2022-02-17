import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Pages() {

  const currentLocation = useLocation()
  console.log(currentLocation.pathname);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/news/v3/content/all/arts.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
      )
      .then((res) => {
        console.log(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, );

  return (
    <section>
      <h1>{currentLocation.pathname.replace("/", "")}</h1>
    </section>
  );
}

export default Pages;

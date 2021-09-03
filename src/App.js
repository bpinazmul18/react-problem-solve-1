import "./styles.css";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const Countryinfo = () => {
  // const {name} = useParams()
  const [country, setCountry] = useState({});

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/bangladesh`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);

  return (
    <div>
      <h1>This is card</h1>
      <h1>Name: {country.name}</h1>
    </div>
  );
};

export default Countryinfo;

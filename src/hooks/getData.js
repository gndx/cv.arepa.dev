import { useState, useEffect } from "react";

const getData = (url) => {
  const [person, usePerson] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(myData => usePerson(myData));
  }, []);

  return person;
}

export default getData;
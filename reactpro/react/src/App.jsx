import { useState } from "react";
import "./App.css";
import Panasz from "./components/Panasz";

function App() {
  function OsszesPanasz() {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }

  const deletePanasz = (id) => {
    fetch(`http://127.0.0.1:8000/api/panasz/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        setData((values) => {
          return values.filter((item) => item.id !== id);
        });
      });
  };

  function WriteJson(data) {
    return (
      <>
        {data.map((panasz) => (
          <Panasz
            key={panasz.id}
            Panasznev={panasz.nev}
            Panaszleiras={panasz.leiras}
            Bejelento={panasz.bejelento}
            Datum={panasz.datum}
            Panasztorles={() => deletePanasz(panasz.id)}></Panasz>
        ))}
      </>
    );
  }

  const [data, setData] = useState(null);

  return (
    <>
      {OsszesPanasz()}
      {data ? <div>{WriteJson(data)} </div> : <div></div>}
    </>
  );
}

export default App;

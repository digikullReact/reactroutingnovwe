import axios from "axios";
import { useState } from "react";

export default function GoogleBooks() {
  const [state, setState] = useState([]);
  const buttonClick = () => {
    // APi call here

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
      .then((response) => {
        setState(response.data.items);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-4 offset-4">
          <button onClick={buttonClick} className="btn btn-success">
            Get Data
          </button>
        </div>
      </div>

      <div className="row">
        {state.map((ele) => (
          <li key={ele.id}>{ele.volumeInfo.title}</li>
        ))}
      </div>
    </div>
  );
}

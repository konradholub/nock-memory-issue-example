import React, { useEffect, useState } from "react";

import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:8000",
  adapter: require("axios/lib/adapters/http"),
});

function App() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    axios
      .get("/repos/atom/atom/license")
      .then((res: any) => {
        // console.log(res.data);
        setIsDone(true);
      })
      .catch((err: any) => {
        console.log(err);
        // setIsDone(true);
      });
  }, [setIsDone]);

  return <div className="App">{isDone ? "Done" : "Learn React"}</div>;
}

export default App;

import React from "react";
import nock from "nock";
import axios from "axios";

describe("App", () => {
  test("can fetch test response", async () => {
    // Set up the mock request.
    const scope = nock("http://localhost")
      .get("/test")
      .reply(200, "test response");

    // Make the request. Note that the hostname must match exactly what is passed
    // to `nock()`. Alternatively you can set `axios.defaults.host = 'http://localhost'`
    // and run `axios.get('/test')`.
    await axios.get("http://localhost/test");

    // Assert that the expected request was made.
    scope.done();
  });
});

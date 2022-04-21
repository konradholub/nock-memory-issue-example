// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { clearImmediate } from "timers";
import nock from "nock";
import axios from "axios";

// `clearImmediate` doesn't exist in the jsdom environment and nock throws ReferenceError
if (typeof global.clearImmediate !== "function") {
  global.clearImmediate = clearImmediate;
}

axios.defaults.adapter = require("axios/lib/adapters/http");

beforeAll(() => {
  nock.disableNetConnect();
});

afterAll(() => {
  nock.abortPendingRequests();
  nock.cleanAll();
  nock.restore();
});

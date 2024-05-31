import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "./mocks/setup";
import "cross-fetch/polyfill";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
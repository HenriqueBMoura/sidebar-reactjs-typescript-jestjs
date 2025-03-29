import "@testing-library/jest-dom";

Object.defineProperty(window, "TextEncoder", {
  value: class MockTextEncoder {
    encode() {
      return [];
    }
  },
});

Object.defineProperty(window, "TextDecoder", {
  value: class MockTextDecoder {
    decode() {
      return "";
    }
  },
});

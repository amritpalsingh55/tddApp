import React from "react";
import { render } from "@testing-library/react-native";
import PrimaryScreen from "../src/PrimaryScreen";

describe("PrimaryScreen", () => {
    it("Actual value of render is 1 test will fail", () => {
      const { queryByText } = render(<PrimaryScreen />);
  
      const initialState = queryByText("PrimaryScreen: 0");
      expect(initialState).not.toBeNull();
    });

    it("Actual value of render is 1 test will pass", () => {
        // To get the component by text
        const { queryByText } = render(<PrimaryScreen />);
    
        const initialState = queryByText("PrimaryScreen: 1");
        expect(initialState).not.toBeNull();
      });
    
  
  });

describe("Primry Screen", () => {
    it("renders correctly", () => {
        render(<PrimaryScreen />);
    });
});


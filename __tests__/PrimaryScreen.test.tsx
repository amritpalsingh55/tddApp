
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import PrimaryScreen from "../src/PrimaryScreen";



describe('PrimaryScreen', () => {

  it('Test 1.checking updates input field value correctly, It is getting failed because props are not accessable', () => {
    render(<PrimaryScreen />);

    // Getting the input field and type text
    const inputField = screen.getByTestId('input-field');
    fireEvent.changeText(inputField, '4,5,6');

    // Verifying that input state is updated (simulate user typing "4,5,6")
    expect(inputField.props.value).toBe('4,5,6');
  });


  it('Test 2.checking updates input field value correctly with different approach', () => {
    render(<PrimaryScreen />);

    // Getting the input field and type text
    const inputField = screen.getByTestId('input-field');

    // Simulating, typing "4,5,6"
    fireEvent.changeText(inputField, '4,5,6');

    // Verifying that the input field's value has been updated.
    // `getByDisplayValue` is used to check the value of the text input after the change.
    expect(screen.getByDisplayValue('4,5,6')).toBeTruthy();
  });


  it('Test 3.checking renders correctly and displays initial values', () => {
    render(<PrimaryScreen />);

    // Checking if initial text "Sum 0" is displayed
    expect(screen.getByText(/Sum 0/)).toBeTruthy();

    // Checking if the input field is rendered
    const inputField = screen.getByTestId('input-field');
    expect(inputField).toBeTruthy();

    // Checking if the button is rendered
    const button = screen.getByTestId('btn-calculate');
    expect(button).toBeTruthy();
  });



  it('Test 4. calculating sum of numbers correctly', () => {
    render(<PrimaryScreen />);

    // Getting the input field and type text
    const inputField = screen.getByTestId('input-field');
    fireEvent.changeText(inputField, '10,,,,,kkk20itttttt+======,30');

    // Click the calculate button
    const button = screen.getByTestId('btn-calculate');
    fireEvent.press(button);

    // Verifying that the total text displays the correct sum
    expect(screen.getByText(/Sum 60/)).toBeTruthy();  // Sum of 10 + 20 + 30 = 60
  });

  it('Test 5. returns 0 when no numbers are entered', () => {
    render(<PrimaryScreen />);

    // Getting the input field and type text
    const inputField = screen.getByTestId('input-field');
    fireEvent.changeText(inputField, 'Hello, There!');

    // Click the calculate button
    const button = screen.getByTestId('btn-calculate');
    fireEvent.press(button);

    // Verifying that the total text displays 0 when no numbers are present
    expect(screen.getByText(/Sum 0/)).toBeTruthy();
  });

  it('Test 6.To handles empty input correctly', () => {
    render(<PrimaryScreen />);

    // Getting the input field and leave it empty
    const inputField = screen.getByTestId('input-field');
    fireEvent.changeText(inputField, '');

    // Click the calculate button
    const button = screen.getByTestId('btn-calculate');
    fireEvent.press(button);

    // Verifying that the total text displays 0 when the input is empty
    expect(screen.getByText(/Sum 0/)).toBeTruthy();
  });
});



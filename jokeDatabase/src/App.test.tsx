import './App.css';
import {render, screen} from "@testing-library/react"
import App from "./App"

test ("renders the login button", () => {
    render(<App/>)
    expect(screen.getByTestId("LoginButton")).toBeDefined();
});
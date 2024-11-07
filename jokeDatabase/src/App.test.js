import {render, fireEvent, screen} from "@testing-library/react"
import App from "./App"
import React from "react";

test ("renders the login button", () => {
    render(<App/>)
    expect(screen.getByTestId("LoginButton")).toBeInTheDocument();
});
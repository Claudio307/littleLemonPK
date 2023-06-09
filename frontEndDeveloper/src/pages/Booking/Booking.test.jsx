import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Booking, { initializeTimes, updateTimes } from "./Booking";
import { fetchAPI } from "../../services/api";

test("Renders the Booking page heading", () => {
    render(<Booking />);
    const headingElement = screen.getByText("Make a reservation");
    expect(headingElement).toBeInTheDocument();
});

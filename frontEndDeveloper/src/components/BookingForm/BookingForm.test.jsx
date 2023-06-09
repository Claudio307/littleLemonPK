import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import BookingForm from "./BookingForm";

describe("Booking page", () => {
    test("Test the updateTimes and initializeTimes functions", () => {
        render(
            <BookingForm availableTimes={[]} dispatchOnDateChange={() => {}} onSubmit={() => {}} />
        );
        const dateInput = screen.getByLabelText("Choose date");
        const timeInput = screen.getByTestId("res-time");
        expect(dateInput).toBeInTheDocument();
        expect(timeInput).toBeInTheDocument();
        fireEvent.change(dateInput, { target: { value: "2021-10-10" } });
        // expect(timeInput).tohave
    });
});

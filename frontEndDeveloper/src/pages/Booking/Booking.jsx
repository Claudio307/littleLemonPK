import BookingForm from "@/components/BookingForm/BookingForm";
import styles from "./styles";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../services/api";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};
const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
];
const Booking = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );
    const onSubmit = (data) => {
        submitAPI(data);
    };
    return (
        <>
            <header className={styles().header}>
                <div className={styles().background}></div>
                Make a reservation
            </header>
            <BookingForm
                availableTimes={availableTimes}
                onSubmit={onSubmit}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        </>
    );
};

export default Booking;

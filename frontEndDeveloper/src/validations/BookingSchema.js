import * as yup from "yup";

const BookingSchema = yup.object().shape({
    "res-date": yup.string().required("Please select a date"),
    "res-time": yup.string().required("Please select a time"),
    guests: yup
        .number()
        .typeError("Please select number of guests")
        .required("Please select number of guests"),
    occasion: yup.string().required("Please select an ocasion"),
});

export default BookingSchema;

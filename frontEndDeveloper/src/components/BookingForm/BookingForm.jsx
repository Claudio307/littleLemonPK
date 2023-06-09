import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BookingSchema from "../../validations/BookingSchema";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./styles";
const BookingForm = ({ availableTimes, onSubmit, dispatchOnDateChange }) => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm({
        resolver: yupResolver(BookingSchema),
    });
    return (
        <form className={styles().form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles().inputContainer}>
                <label className={styles().label} htmlFor="res-date">
                    Choose date
                </label>
                <input
                    className={styles().input}
                    type="date"
                    id="res-date"
                    data-error={String(!!errors["res-date"]?.message)}
                    onInput={(e) => {
                        dispatchOnDateChange(e.target.value);
                    }}
                    {...register("res-date")}
                />
                <ErrorMessage error={errors["res-date"]?.message} />
            </div>
            <div className={styles().inputContainer}>
                <label className={styles().label} htmlFor="res-time">
                    Choose time
                </label>
                <select
                    className={styles().input}
                    id="res-time"
                    data-testid="res-time"
                    data-error={String(!!errors["res-time"]?.message)}
                    {...register("res-time")}
                    defaultValue=""
                >
                    <option value="" hidden data-testid="select-option">
                        Select
                    </option>
                    {availableTimes.map((time) => (
                        <option value={time} key={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <ErrorMessage error={errors["res-time"]?.message} />
            </div>
            <div className={styles().inputContainer}>
                <label className={styles().label} htmlFor="guests">
                    Number of guests
                </label>
                <input
                    className={styles().input}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    data-error={String(!!errors?.guests?.message)}
                    {...register("guests")}
                />
                <ErrorMessage error={errors?.guests?.message} />
            </div>
            <div className={styles().inputContainer}>
                <label className={styles().label} htmlFor="occasion">
                    Occasion
                </label>
                <select
                    className={styles().input}
                    id="occasion"
                    data-error={String(!!errors?.occasion?.message)}
                    defaultValue={""}
                    {...register("occasion")}
                >
                    <option value="" hidden>
                        Select
                    </option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <ErrorMessage error={errors?.occasion?.message} />
            </div>

            <input
                className={styles().button}
                type="submit"
                value="Make Your reservation"
            />
        </form>
    );
};

export default BookingForm;

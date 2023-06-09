import styles from "./styles";

const ErrorMessage = ({error}) => {

    return (
        <span data-error={String(!!error)} className={styles().error}> 
            {error}
        </span>
    )
}

export default ErrorMessage;
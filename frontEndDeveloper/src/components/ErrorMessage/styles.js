import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    error: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '0.25rem',
        height: "0",
        transform: "scaleY(0)",
        transformOrigin: "top",
        transition: "all 0.3s ease-in-out",
        "&[data-error='true']": {
            transform: "scaleY(1)",
            height: "0.8rem",
        }
    }
});

export default styles;
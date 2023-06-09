import { createUseStyles } from 'react-jss'
import theme from '@/styles/theme';

const styles = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '64px auto',
        gap: "20px"
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    label: {
        fontSize: '0.8rem',
        color: theme.colors.primary1,
        marginLeft: '5px',
    },
    input: {
        height: '40px',
        fontSize: '1rem',
        padding: '0 10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
        transition: 'border 0.3s ease-in-out',
        '&:focus': {
            border: '1px solid #000',
            outline: 'none',
        },
        "&[data-error='true']": {
            borderColor: "red",
        }
    },
    button: {
        height: '40px',
        fontSize: '1rem',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: theme.colors.primary2,
        color: theme.colors.primary1,
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            filter: 'brightness(1.1)',
        }
    }
});

export default styles;
import { createUseStyles } from 'react-jss'
import theme from '../../styles/theme';

const styles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
    },
    containerStars: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        marginBottom: '10px',
    },
    star: {
        height: '20px',
    },
    image: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "10px",
        objectFit: "cover",
        objectPosition: "top center",
        "@media (max-width: 596px)": {
            width: "100px",
            height: "100px",
        },
    },
    name: {
        fontSize: "20px",
        fontWeight: "bold",
        color: theme.colors.primary1,
        marginBottom: "10px",
    },
    description: {
        fontSize: "16px",
        color: theme.colors.primary1,
    }
});

export default styles;
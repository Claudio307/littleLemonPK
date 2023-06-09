import { createUseStyles } from 'react-jss'
import theme from '@/styles/theme';

const styles = createUseStyles({
    wrapper: {
        position: "sticky",
        bottom: 0,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr 1fr',
        gridGap: '1rem',
        position: "relative",
        padding: "3rem 0",
        "@media (max-width: 800px)": {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        // "@media (max-width: 500px)": {
        //     gridTemplateColumns: 'repeat(1, 1fr)',
        //     justifyItems: "flex-start",
        // },
    },
    background: {
        backgroundColor: theme.colors.primary1,
        position: "absolute",
        height: "100%",
        left: "calc(min(-20px, (800px - 100dvw)/2))",
        right: "calc(min(-20px, (800px - 100dvw)/2))",
        zIndex: -1,
    },
    logoWhite: {
        height: "130px"
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
    },
    columnTitle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#fff"
    },
    list: {
        listStyle: "none",
        textDecoration: "none",
        color: "#fff"
    },
    listSocialMedia: {
        display: "flex",
        gap: "1rem",
        fontSize: "1.5rem",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        transition: "color 0.3s ease-in-out",
        "&:hover": {
            color: theme.colors.primary2,
        }
    },
    contactItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.5rem",
    }
});

export default styles;
import { createUseStyles } from "react-jss";
import theme from "@/styles/theme";

const styles = createUseStyles({
    nav: {},
    menu: {
        display: "block",
        cursor: "pointer",
        border: "none",
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        "@media (min-width: 800px)": {
            display: "none",
        },
    },
    menuIcon: {
        width: "100%",
        height: "100%",
    },
    list: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        right: "0",
        top: "60px",
        bottom: "0",
        width: "200px",
        transform: "translateX(100%)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#fff",
        zIndex: 9999,
        "@media (min-width: 800px)": {
            position: "static",
            flexDirection: "row",
            transform: "none",
            width: "auto",
        },
        "&[data-open='true']": {
            transform: "translateX(0)",
        },
    },
    item: {
        display: "flex",
        marginLeft: "10px",
        height: "40px",
        listStyleType: "none",
    },
    hyperLink: {
        textDecoration: "none",
        color: "#000",
        fontSize: theme.fontSizes.default,
        fontWeight: 600,
        padding: "10px 15px",
        whiteSpace: "nowrap",
        borderRadius: "5px",
        transition: "all 0.3s ease-in-out",
        "&.active": {
            backgroundColor: theme.colors.primary2,
        },
        "&:hover": {
            backgroundColor: theme.colors.primary2,
        },
    },
});

export default styles;

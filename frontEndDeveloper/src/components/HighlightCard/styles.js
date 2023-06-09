import { createUseStyles } from "react-jss";
import theme from "@/styles/theme"; 
const styles = createUseStyles({
    container: {
        borderRadius: "10px",
        backgroundColor: theme.colors.secondary3,
        overflow: "hidden",
        marginBottom: "10px",
    },
    infos: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "10px",
        height: "45%",
        boxSizing: "border-box",
    },
    infosHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        fontWeight: 700,
    },
    infosPrice: {
        color: theme.colors.secondary1,
        fontSize: theme.fontSizes.small,
        fontWeight: 700,
    },
    description: {
        color: theme.colors.primary1,
        fontSize: theme.fontSizes.default,
        fontWeight: 400,
    },
    orderButton: {
        color: "#000",
        border: "none",
        backgroundColor: "transparent",
        fontSize: theme.fontSizes.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
    },
    iconWrapper: {
        width: "20px",
        height: "20px",
    },
    icon: {
        width: "20px",
        height: "20px",
        objectFit: "contain",
    },
    image: {
        width: "100%",
        aspectRatio: "1/1",
        objectFit: "cover",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)", 
        }
    },
    imageWrapper: {
        width: "100%",
        aspectRatio: "1/1",
        overflow: "hidden",
    }
});

export default styles;

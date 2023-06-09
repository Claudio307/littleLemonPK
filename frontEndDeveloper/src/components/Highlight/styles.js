import { createUseStyles } from "react-jss";
import theme from "@/styles/theme"; 

const styles = createUseStyles({
    title: {},
    headerSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: "1rem",
    },
    headerTitle: {
        fontSize: theme.fontSizes.subtitle,
        fontWeight: "700",
    },
    headerButton: {
        backgroundColor: theme.colors.primary2,
        color: "#000",
        border: "none",
        height: "40px",
        width: "150px",
        fontSize: theme.fontSizes.default,
        fontWeight: "700",
        borderRadius: "15px",
        cursor: "pointer",
    },
    cardSection: {
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(3, 1fr)",
        "@media (max-width: 596px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
        },
    },
});

export default styles;

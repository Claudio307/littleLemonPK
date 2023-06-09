import { createUseStyles } from "react-jss";
import theme from "../../styles/theme";

const styles = createUseStyles({
    container: {
        // height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        position: "relative",
        padding: "20px 0",
    },
    background: {
        backgroundColor: theme.colors.primary1,
        position: "absolute",
        height: "100%",
        left: "calc(min(-20px, (800px - 100dvw)/2))",
        right: "calc(min(-20px, (800px - 100dvw)/2))",
        zIndex: -1,
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "400",
        fontSize: theme.fontSizes.subtitle,
    },
    containerCards: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        gridTemplateColumns: "repeat(4, 1fr)",
    
        "@media (max-width: 768px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (max-width: 596px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
        }
    },
});

export default styles;

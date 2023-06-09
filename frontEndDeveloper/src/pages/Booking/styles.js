import { createUseStyles } from 'react-jss'
import theme from "@/styles/theme";
const styles = createUseStyles({
    header: {
        backgroundColor: theme.colors.primary1,
        color: "#fff",
        textAlign: "center",
        position: "relative",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: theme.fontSizes.subtitle,
    },
    background: {
        backgroundColor: theme.colors.primary1,
        position: "absolute",
        height: "100%",
        left: "calc(min(-20px, (800px - 100dvw)/2))",
        right: "calc(min(-20px, (800px - 100dvw)/2))",
        zIndex: -1,
    },
});

export default styles;
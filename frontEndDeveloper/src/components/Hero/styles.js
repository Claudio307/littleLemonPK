import { createUseStyles } from 'react-jss'
import theme from "@/styles/theme"; 

const styles = createUseStyles({
    container: {
        // height: "250px",
        marginBottom: "10%",
        position: "relative",
    },
    background: {
        backgroundColor: theme.colors.primary1,
        position: "absolute",
        height: "100%",
        left: "calc(min(-20px, (800px - 100dvw)/2))",
        right: "calc(min(-20px, (800px - 100dvw)/2))",
        zIndex: -1,
    },
    main: {
        display: "flex",
        
        justifyContent: "space-between",
        height: "inherit",
        gap: "20px",

        "@media (max-width: 800px)": {
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
        },
    },
    infos: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
    },
    title: {
        color: theme.colors.primary2,
        fontWeight: 400,  
    },
    subtitle: {
        fontWeight: 400,
        color: "#fff"
    },
    description: {
        color: "#fff"
    },
    button: {
        backgroundColor: theme.colors.primary2,
        color: "#000",
        border: "none",
        fontSize: theme.fontSizes.sectionTitle,
        height: "40px",
        width: "150px",
        borderRadius: "15px",
    },
    foodExample: {
        objectFit: "cover",
        height: "300px",
        aspectRatio: "1/1.1",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "-20px",
    }
});

export default styles;
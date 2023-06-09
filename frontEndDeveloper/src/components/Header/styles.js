import { createUseStyles } from "react-jss";

const styles = createUseStyles({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        gap: "20px"
    },
    logo: {
        height: "80%",
    }
})
export default styles;
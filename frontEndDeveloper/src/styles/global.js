import { createUseStyles } from 'react-jss'
import theme from "@/styles/theme";
const global = createUseStyles({
    container: {
        maxWidth: "100dvw",
        width: "800px",
        margin: "0 auto",
        padding: "0 20px",
    }
})

export default global;
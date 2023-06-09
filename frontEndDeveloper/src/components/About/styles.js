import { createUseStyles } from 'react-jss'
import theme from '@/styles/theme';

const styles = createUseStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '1rem',
        padding: '3rem 0',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
        },
    },
    title: {
        color: theme.colors.primary1,
    },
    subtitle: {
        color: theme.colors.primary1,
    },
    description: {
        color: theme.colors.secondary4,
    },
    infosContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageContainer: {
        position: 'relative',
        height: '350px',
    },
    image1: {
        height: '80%',
        aspectRatio: '3/4',
        position: 'absolute',
        top: '0',
        right: '0',
        objectFit: 'cover',
        objectPosition: '-200px 0',
        "@media (max-width: 768px)": {
            height: "60%",
            aspectRatio: '16/9',
            objectPosition: 'unset'
        }
    },
    image2: {
        height: '80%',
        aspectRatio: '3/4',
        position: 'absolute',
        left: '0',
        bottom: '0',
        objectFit: 'cover',
        objectPosition: '-200px 100%',
        "@media (max-width: 768px)": {
            height: "60%",
            aspectRatio: '16/9',
            objectPosition: 'unset'
        }
    },
});

export default styles;
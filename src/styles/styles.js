import { StyleSheet , Dimensions} from 'react-native';
import theme from "./theme";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.background
    },

    flex_1: {
        flex: 1
    },

    flexDirectionColumn: {
        flexDirection: "column"
    },

    paddingVertical16: {
        paddingVertical: 16
    },
    paddingVertical8: {
        paddingVertical: 8
    }
});

export default styles;

import { StyleSheet } from "react-native";
import { width, reponsiveHeight} from "../../../Constant/styles";


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: width,
        height: reponsiveHeight(50),
        backgroundColor: 'gray',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
})

export default styles;
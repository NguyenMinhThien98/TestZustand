import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        backgroundColor: 'blue',
        marginBottom: 10
    },

    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'

    }
})

export default styles;
import { StyleSheet } from "react-native"

/*
* Home screen style
*/

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    subContainer: {
        padding: 20,
        paddingTop: 0,
        flex: 1
    },
    menuIcon: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    dotStyle: {
        backgroundColor:'green',
        height: 8,
        width: 8,
        borderRadius: 4,
        position: 'absolute',
        left: 10
    }
});

export default styles;
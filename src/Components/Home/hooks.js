import { useNavigation } from "@react-navigation/native";
import screens from "../../screen";
import { useState } from "react";

const useHomeFacade = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([
        {
            id: 1,
            screen: screens.LOGIN,
            name: 'Login'
        },

        {
            id: 2,
            screen: screens.TEST_ZUSTAND,
            name: 'TestZustand'
        }
    ]);

    const onPressItem = (screen) => {
        navigation.navigate(screen);
    }

    return {data, onPressItem}
}

export {useHomeFacade}
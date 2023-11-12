import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../Screens/LoginScreen/LoginScreen"
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen"
import UserScreen from "../Screens/UserScreen/UserScreen"
import PATH from "./NavigationPath"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={PATH.LOGIN}
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={PATH.REGISTRATION}
                    component={RegistrationScreen}
                    options={{ title: 'Sign up' }}
                />

                <Stack.Screen
                    name={PATH.USER}
                    component={UserScreen}
                    options={{ title: 'User Form', headerBackVisible: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
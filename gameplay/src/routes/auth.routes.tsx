import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";
import { AppointmentsDetails } from "../screens/AppointmentDetails";
import { AppointmentsCreate } from "../screens/AppointmentCreate";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {

    return (
        <Navigator headerMode={"none"} screenOptions={{
            cardStyle: {
                backgroundColor: "transparent"
            }
        }}>
            <Screen name="Signin" component={Signin} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
            <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
        </Navigator>
    )
}
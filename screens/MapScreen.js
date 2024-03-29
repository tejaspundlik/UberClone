import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
import Confirm from "../components/Confirm";

const MapScreen = () => {
	const Stack = createStackNavigator();
	return (
		<View>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="RideOptions"
						component={RideOptions}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Confirm"
						component={Confirm}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});

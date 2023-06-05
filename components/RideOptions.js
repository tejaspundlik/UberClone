import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

const RideOptions = () => {
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<Text style={tw`text-center text-xl `}>Select A Ride</Text>
		</SafeAreaView>
	);
};

export default RideOptions;

const styles = StyleSheet.create({});

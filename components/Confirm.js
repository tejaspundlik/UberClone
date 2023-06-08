import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Confirm = () => {
	return (
		<View style={tw`flex-grow bg-black`}>
			<Text style={tw`text-white text-4xl text-center mt-36`}>
				Booking Has Been Confirmed
			</Text>
		</View>
	);
};

export default Confirm;

const styles = StyleSheet.create({});

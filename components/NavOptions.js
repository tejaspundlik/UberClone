import {
	FlatList,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

// const data = [
// 	{
// 		id: "1",
// 		title: "Get A Ride",
// 		image: "",
// 		screen: "MapScreen",
// 	},
// ];

const NavOptions = () => {
	return (
		// <FlatList
		// 	data={data}
		// 	renderItem={({}) => (
		// 		<TouchableOpacity>
		// 			<View>
		// 				<Image
		// 					style={{
		// 						height: 200,
		// 						width: 200,
		// 						resizeMode: "contain",
		// 						marginLeft: 50,
		// 					}}
		// 					source={require("../images/UberX.png")}
		// 				></Image>
		// 				<Text>Order A Ride</Text>
		// 			</View>
		// 		</TouchableOpacity>
		// 	)}
		// />
		<TouchableOpacity
			style={tw`p-2 pl-10 pb-8 pt-4 bg-gray-200 m-6 rounded-3xl`}
		>
			<View>
				<Image
					style={{
						height: 200,
						width: 200,
						resizeMode: "contain",
						marginLeft: 50,
					}}
					source={require("../images/UberX.png")}
				></Image>
				<Text style={tw`text-center mr-6 text-lg font-semibold`}>
					Order A Ride
				</Text>
				<Icon
					style={tw`ml-28 mt-4 bg-black p-2 rounded-full w-10 mt-4`}
					name="arrowright"
					color="white"
					type="antdesign"
				/>
			</View>
		</TouchableOpacity>
	);
};

export default NavOptions;

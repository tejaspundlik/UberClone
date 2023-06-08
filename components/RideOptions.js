import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const RideOptions = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);
	const travelTimeInformation = useSelector(selectTravelTimeInformation);
	const data = [
		{
			id: "Uber-X",
			title: "UberX",
			multiplier: 1,
			image: require("../assets/uberx.png"),
		},
		{
			id: "Uber-XL",
			title: "Uber XL",
			multiplier: 1.25,
			image: require("../assets/uberxl.png"),
		},
		{
			id: "Uber-LUX",
			title: "Uber LUX",
			multiplier: 1.5,
			image: require("../assets/uberlux.png"),
		},
	];
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<Text style={tw`text-center text-xl -mt-4 mb-4`}>
				Select A Ride
			</Text>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						style={tw`flex-row justify-between items-center pl-3 pt-1 pr-7 mr-4 ml-4 ${
							item.id === selected?.id &&
							"bg-gray-200 pl-3 pt-1 pr-7 mr-4 ml-4 rounded-full"
						}`}
					>
						<Image
							style={{
								height: 75,
								width: 75,
								resizeMode: "contain",
							}}
							source={item.image}
						/>
						<Text style={tw`text-xl`}>{item.title}</Text>
						<Text style={tw`text-xl`}>
							₹
							{(travelTimeInformation?.duration.value *
								item.multiplier) /
								1}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<TouchableOpacity
				style={[
					selected?.title == null
						? styles.hide
						: tw`bg-black rounded-full mr-20 ml-20`,
				]}
				onPress={() => navigation.navigate("Confirm")}
			>
				<Text style={tw`text-center text-white text-xl mt-4 mb-4`}>
					Confirm {selected?.title}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default RideOptions;

const styles = StyleSheet.create({
	hide: {
		height: 0,
	},
});

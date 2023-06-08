import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import {
	selectTravelTimeInformation,
	setDestination,
} from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const travelTimeInformation = useSelector(selectTravelTimeInformation);

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<View style={styles.spacer}></View>
			<View>
				<GooglePlacesAutocomplete
					nearbyPlacesAPI="GooglePlacesSearch"
					placeholder="Where To?"
					debounce={400}
					styles={{
						container: {
							padding: 5,
							flex: 0,
							marginBottom: 0,
						},
						textInput: {
							margin: 8,
							backgroundColor: "#DDDDDF",
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						dispatch(
							setDestination({
								location: details.geometry.location,
								description: data.description,
							})
						);
					}}
					fetchDetails={true}
					returnKeyType={"search"}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
				/>
			</View>
			<View style={styles.divider}></View>
			<View
				style={[
					travelTimeInformation?.distance?.text == null
						? styles.hide
						: tw`bg-black mt-10 rounded-full ml-8 mr-8`,
				]}
			>
				<TouchableOpacity
					disabled={true}
					style={tw`flex-row justify-between items-center pl-3 pt-1 pr-7 mt-4 mr-8 ml-8`}
				>
					<Text style={tw`text-xl text-white`}>Distance</Text>
					<Text style={tw`text-xl text-white`}>
						{travelTimeInformation?.distance?.text}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={true}
					style={tw`flex-row justify-between items-center pl-3 pt-1 pr-7 mt-4 mb-4 mr-8 ml-8`}
				>
					<Text style={tw`text-xl text-white`}>Duration</Text>
					<Text style={tw`text-xl text-white`}>
						{travelTimeInformation?.duration?.text}
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate("RideOptions")}
					style={tw`bg-black p-6 w-44 justify-between flex flex-row mt-10 ml-auto mr-auto rounded-full`}
				>
					<Icon
						name="car"
						type="font-awesome"
						color="white"
						size={20}
					/>
					<Text style={tw`text-white text-center`}>Select Ride</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({
	divider: {
		marginTop: 25,
		marginLeft: 50,
		marginRight: 50,
		borderColor: "gray",
		borderBottomWidth: 2,
	},
	spacer: {
		marginTop: 25,
	},
	hide: {
		height: 0,
	},
});

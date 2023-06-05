import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
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
						navigation.navigate("RideOptions");
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
		</SafeAreaView>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({});

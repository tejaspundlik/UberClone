import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const Map = () => {
	const origin = useSelector(selectOrigin);
	console.log("Origin Location:", origin);
	return (
		<MapView
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				// latitude: origin.location.lat,
				// longitude: origin.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		/>
	);
};

export default Map;

const styles = StyleSheet.create({});

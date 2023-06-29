<h1 align="center">Uber Clone</h1>
<div align="center">
  <video src="https://github.com/tejaspundlik/UberClone/assets/101443790/47dca849-1743-486f-9618-6ed2422f893e" />
</div>
<p>This project is a clone of Uber, aiming to replicate its features and functionality. It encompasses various components and features essential for a seamless user experience. These include confirming bookings, integrating maps for displaying locations, enabling users to select destinations, presenting multiple ride options with calculated prices, and facilitating the final booking confirmation. </p>
<p align="center"><strong>APIs Used in the Project</strong></p>
<ol>
  <li>
    <p><strong>Google Maps API:</strong> The Google Maps API is commonly used to display maps, markers, and routes, as well as to calculate distances and travel times between locations.</p>
  </li>
  <li>
    <p><strong>Google Places API:</strong> The Google Places API enables the integration of a search bar with autocomplete functionality, allowing users to easily select their desired destinations.</p>
  </li>
  <li>
    <p><strong>Google Distance Matrix API:</strong> The Google Distance Matrix API is used to retrieve travel time and distance information between locations, which is often used to estimate ride prices and display trip durations.</p>
  </li>
</ol>

<h1 align="center">Documentation</h1>
<ol>
		<li>
			<p align="center"><strong>Confirm</strong></p>
			<p>This component displays a confirmation message for a booking.</p>
		</li>
		<li>
			<p align="center"><strong>Map</strong></p>
			<p>This component integrates the react-native-maps library to display a map view.</p>
			<p>It includes markers for the origin and destination locations, and a MapViewDirections component to show the route between them.</p>
			<p>It makes use of the Google Maps Distance Matrix API to fetch the travel time information.</p>
		</li>
		<li>
			<p align="center"><strong>NavigateCard</strong></p>
			<p>This component provides a user interface for selecting a destination.</p>
			<p>It uses the react-native-google-places-autocomplete library to provide a search bar for selecting a location.</p>
			<p>It displays the distance and duration of the trip using the travel time information fetched from the Google Maps API.</p>
			<p>It also includes a button to navigate to the "RideOptions" screen.</p>
		</li>
		<li>
			<p align="center"><strong>NavOptions</strong></p>
			<p>This component displays ride options for the user to choose from.</p>
			<p>It includes images representing different ride options.</p>
			<p>When a ride option is selected, it navigates to the "MapScreen".</p>
		</li>
		<li>
			<p align="center"><strong>RideOptions</strong></p>
			<p>This component displays a list of available ride options.</p>
			<p>It allows the user to select a ride option and calculates the estimated price based on the travel time information.</p>
			<p>After selecting a ride option, the user can confirm the booking, which navigates to the "Confirm" screen.</p>
		</li>
		<li>
			<p align="center"><strong>HomeScreen</strong></p>
			<p>This component serves as the main entry point of the application.</p>
			<p>It displays the app logo and a search bar for selecting the origin location.</p>
			<p>It also includes the NavOptions component.</p>
		</li>
		<li>
			<p align="center"><strong>MapScreen</strong></p>
			<p>This component combines the Map component and navigation components.</p>
			<p>It displays the map view and the navigation components (NavigateCard, RideOptions, Confirm) using the react-navigation library.</p>
		</li>
	</ol>

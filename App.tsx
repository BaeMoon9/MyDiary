import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Test from './src/screens/Test';
import Test2 from './src/screens/Test2';
import Diary from './src/screens/Diary';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function BottomTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Test" component={Test} options={{
				tabBarIcon: () => (
					<SimpleLineIcons name="settings" size={24} color="black" />
				),
			}} />
			<Tab.Screen name="My Diary" component={Diary} options={{
				tabBarIcon: () => (
					<FontAwesome name="book" size={24} color="black" />
				),
			}} />
			<Tab.Screen name="Test2" component={Test2} options={{
				tabBarIcon: () => (
					<SimpleLineIcons name="settings" size={24} color="black" />
				),
			}} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		// <View style={styles.container}>
		//   <Text>Open up App.tsx to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }}/>
				<Stack.Screen name="Test" component={Test} />
				<Stack.Screen name="Test2" component={Test2} />
			</Stack.Navigator>
		</NavigationContainer>

		

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

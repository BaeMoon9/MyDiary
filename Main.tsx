import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Test from './src/screens/Test';
import Test2 from './src/screens/Test2';
import Diary from './src/screens/Diary';
import NewDiary from './src/screens/NewDiary';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParam = { //ts type지정
	NewDiary: undefined;
}

export function BottomTabs() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

	return (
		<Tab.Navigator>
			<Tab.Screen name="Test" component={Test} options={{
				tabBarIcon: () => (
					<SimpleLineIcons name="settings" size={24} color="black" />
				)
			}} />
			<Tab.Screen name="My Diary" component={Diary} options={{
				tabBarIcon: () => (
					<FontAwesome name="book" size={24} color="black" />
				), headerRight: () => (
					<TouchableOpacity onPress={() => navigation.navigate('NewDiary')} style={{ paddingHorizontal: 20 }}>
						<FontAwesome name="plus-square-o" size={24} color="black" />
					</TouchableOpacity>
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

export default function Main() {

	return (
		// <View style={styles.container}>
		//   <Text>Open up App.tsx to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="BottomTabs" component={BottomTabs}
					options={{ headerShown: false }} />
				<Stack.Screen name="Test" component={Test} />
				<Stack.Screen name="Test2" component={Test2} />
				<Stack.Screen name="Diary" component={Diary} />
				<Stack.Screen name="NewDiary" component={NewDiary}
					options={{
						headerBackTitleVisible: false, 
					}} />

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

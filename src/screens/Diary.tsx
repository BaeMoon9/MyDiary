import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type RootStackParam = { //ts type지정 이거도 사실 한곳에 묶어두었으면 좋았을거같다.
	Test: undefined;
	Test2: undefined;
	Diary: undefined;
}

export default function Diary() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
				<Text>DIARY</Text>
				<StatusBar style="auto" />
			</ScrollView>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollView: {

	}
});

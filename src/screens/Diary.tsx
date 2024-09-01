import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { DiaryData } from '../datas/exampledata';
import { useDispatch, useSelector,  } from 'react-redux';
import { importDiary, RootState, AppDispatch } from '../datas/store';
import { Dispatch } from '@reduxjs/toolkit';

export type RootStackParam = { //ts type지정 이거도 사실 한곳에 묶어두었으면 좋았을거같다.
	Test: undefined;
	Test2: undefined;
	Diary: undefined;
}

export default function Diary() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
	let reduxData = useSelector((state : RootState) => {return state})
	let dispatch : Dispatch = useDispatch()

	React.useEffect(() => {
		
	}, [dispatch])

	console.log('db data', reduxData.diaryContent.contents)
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
				<Text>DIARY : {reduxData.diaryOwner.user}</Text>
				<Text>DIARY : {reduxData.diaryContent.contents}</Text>
				<StatusBar style="auto" />
				<View>
					{/* {DiaryData.map((diary, idx) => (
						<TouchableOpacity style={styles.diaries}>
							<Text>{diary.title}</Text>
							<Text>{diary.date}</Text>
						</TouchableOpacity>
					))} */}
					{
						
					}
				</View>
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

	},
	diaries: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 3,
		width: Dimensions.get("screen").width * 0.9,
		height: Dimensions.get("screen").height * 0.05,
		borderWidth: 1,
		paddingHorizontal: 5,
	}
});

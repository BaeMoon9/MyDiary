import * as React from 'react'
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector,  } from 'react-redux';
import { changeName, changeName2 } from '../datas/store';
import { RootState } from '../datas/store';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

export type RootStackParam = { //ts type지정
	Test : undefined;
	Test2 : undefined;
}

export default function Test2() {

	type exDB = {content : string, date : string, title : string} //db에서 usestate 타입 지정하기
	const [exData, setExData] = React.useState<exDB>({content : '', date: '', title: ''});//usestate 타입을 exDB로 씌우기

	useEffect(() => {
		axios.get('http://localhost:3002/exDB').then((result) => {
			setExData(result.data[0])
			//console.log(result.data[0])
		}).catch(() => {
			console.log('failed__')
		})
	}, [])

	console.log('exdata', exData.content) //hello world
	console.log('전체', exData) //{"content": "hello world", "date": "", "id": 0, "title": "exampleDB"}
	
	//const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>(); 창 이동

	let reduxData = useSelector((state : RootState) => {return state})
	let dispatch : Dispatch = useDispatch()

	//console.log(reduxData)
	return(
		<View style={styles.container}>
      <Text>{reduxData.newUser.user}</Text>
      <StatusBar style="auto" />
			<Button 
				title="redux 이름 바꾸기"
				onPress={() => {dispatch(changeName())}}
			/>
			<Button 
				title="원래 이름으로 돌아가기"
				onPress={() => {dispatch(changeName2())}}
			/>
			<Text>
				{exData.content}, {exData.date}, {exData.title}
			</Text>
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

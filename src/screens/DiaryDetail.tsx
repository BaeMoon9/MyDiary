import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; //키보드가 가리면 스크롤 내리기
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type RootStackParam = { //ts type지정
	Test: undefined;
	Test2: undefined;
	Diary: undefined;
}

export default function DiaryDetail() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

	const [newTitle, setNewTitle] = React.useState('');
	const [newContent, setNewContent] = React.useState('');

	return (
		<SafeAreaView style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAwareScrollView> 
					<KeyboardAvoidingView>
						<View style={styles.inputTitle}   />
						<View style={styles.content}>
						<View style={styles.inputContent} />
						</View>
					</KeyboardAvoidingView>
				</KeyboardAwareScrollView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	inputTitle: {
		width: Dimensions.get("screen").width * 0.9,
		height: 45,
		marginHorizontal: 12,
		marginTop: 20,
		borderWidth: 1,
		padding: 10,
	},
	inputContent: {
		width: Dimensions.get("screen").width * 0.83,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	content : {
		width: Dimensions.get("screen").width * 0.9,
		height: Dimensions.get("screen").height * 0.5,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	}
});

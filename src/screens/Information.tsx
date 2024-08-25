import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type RootStackParam = { //ts type지정
	Test : undefined;
	Test2 : undefined;
	Diary : undefined
}

export default function Infomation() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

	return(
		<View style={styles.container}>
      <Text>정보페이지</Text>
      <StatusBar style="auto" />
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

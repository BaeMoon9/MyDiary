import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type RootStackParam = { //ts type지정
	Test : undefined;
	Test2 : undefined;
}

export default function Test() {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

	return(
		<View style={styles.container}>
      <Text>Test1페이지 입니다.</Text>
      <StatusBar style="auto" />
			<Button 
				title="Test2로 이동"
				onPress={() => navigation.navigate('Test2')}
			/>
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

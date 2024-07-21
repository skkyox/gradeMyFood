import React from 'react';
import {screenHeight, screenWidth} from '@/constants/dimensions';
import THEME from "@/constants/theme";
import { Image, StyleSheet, Platform, View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {

  const mockDatas = require('@/mocks/MOCK_DATA.json')
  console.log(mockDatas[0].first_name)
  return (
    <SafeAreaView style={styles.containerGlobal}>
      <Text style={styles.title}>GradeMyFood</Text>
      <ScrollView>
      {
        mockDatas && mockDatas?.map((restaurant: any) => {
          return (
            <View style={styles.cardRestaurant}> 
              <Text style={styles.title}>{restaurant.first_name}</Text>
            </View>
          )
        })
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: '#FFFFFF'
  },
  cardRestaurant: {
    padding: THEME.space,
    marginVertical: THEME.space,
    width: screenWidth * 0.8,
    height: 200,
    backgroundColor: "#424242"
  }
});

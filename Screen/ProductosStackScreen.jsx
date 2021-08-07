import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import {DetailsScreen} from '../Pantallas/details'

// const Tab = createBottomTabNavigator();

export function ProductosScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Logrado</Text>
  
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('HomeScreen')}
        />

        {/* <Tab.Screen name="Productos" component={DetailsScreen} /> */}

      </View>
    );
  }


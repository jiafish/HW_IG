import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import Postscreen from './src/screen/postsceen';
import Messengescreen from './src/screen/messengeScreen';

const MessergeIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Message.png';
const CameraIconUrl = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Camera.png';
const LogoIconUrl = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Instagram.png';
const Film = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/film.png';
const Edit = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/edit.png';

const Stack = createStackNavigator();
const Stackref = React.createRef();

 const App = () => {
  return (
    <NavigationContainer ref={Stackref}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Postscreen}
         options={{
          headerLeft: () => <Image source={{uri: CameraIconUrl}} style={styles.CameraIcon}/>,
          headerTitle: () => <Image source={{uri: LogoIconUrl}} style={styles.Logo}/>,
          headerRight: () => {
            return(
              <TouchableOpacity
                onPress={() => Stackref.current?.navigate('Meg')}>
                  <Image source={{uri: MessergeIcon}} style={styles.CameraIcon} />
              </TouchableOpacity>
            )
          },
          headerStyle:{backgroundColor:"#F7F7F7"},
        }}
         />
        <Stack.Screen name="Meg" component={Messengescreen} 
          options={{
            title: 'jia_0623_jia',
            headerStyle:{backgroundColor:"#F7F7F7"},
            headerRight: () => {
              return(
                <View style={styles.row}>
                    <Image source={{uri: Film}} style={styles.Icon}/>
                    <Image source={{uri: Edit}} style={styles.CameraIcon}/>
                </View>
              )
            } 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  leftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CameraIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 16
  },
  Icon: {
    width: 30,
    height: 24
  },
  Logo: {
    height: 24,
    width: 80
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default App;
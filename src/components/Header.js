import React from "react";
import { StyleSheet, View, Image, TouchableOpacity} from "react-native";

const MessergeIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Message.png';
const CameraIconUrl = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Camera.png';
const LogoIconUrl = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Instagram.png';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerStyle} >
      <View style={styles.leftStyle}>
        <Image source={{uri: CameraIconUrl}} style={styles.CameraIcon}/>
        <Image source={{uri: LogoIconUrl}} style={styles.Logo}/>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('Meg')}>
        <Image source={{uri: MessergeIcon}} style={styles.CameraIcon} />
      </TouchableOpacity>
      
    </View>
  )
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
    height: 24
  },
  Logo: {
    height: 24,
    width: 80,
    marginLeft: 16
  }
});

export default Header;
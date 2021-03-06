import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const CameraIconUrl = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Camera.png';


const MessengeList=({ meg })=>{
  return(
    <View style={styles.BodyContainStyle} >
      <View style={styles.row}>
        <Image source={{uri: meg.headUrl }} style={styles.headStyle} />
        <View>
          <Text>{meg.name}</Text>
          <Text style={styles.messengeFont}>{meg.activeMessage}</Text>
        </View>
      </View>
      <Image source={{uri: CameraIconUrl }} style={[styles.Icon, styles.Opaticy]}/>
    </View>
  );
};

const styles=StyleSheet.create({
  BodyContainStyle: {
    flexDirection: 'row',
    width: screenWidth,
    height: 70,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headStyle: {
    height: 60,
    width: 60,
    marginRight: 16
  },
  Icon: {
    width: 24,
    height: 24,
    marginRight: 16
  },
  messengeFont: {
    fontSize: 12,
    color: '#c7c7c7'
  },
  Opaticy: {
    opacity: 0.8
  }
});

export default MessengeList;
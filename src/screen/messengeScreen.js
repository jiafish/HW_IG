import React from "react";
import { View, FlatList } from "react-native";

import MessengeData from "../json/meg.json";
import MessengeList from '../components/messenge';

const MessengeScreen =() =>{
  return(
    <View>
      <FlatList
        data={MessengeData}
        renderItem={({ item }) =>
        <MessengeList
            meg={item}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MessengeScreen;
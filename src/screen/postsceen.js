import React from "react";
import { View, FlatList } from "react-native";
import postData from "../json/post.json";
import postList from "../components/postList";

const PostScreen =({ }) => {
    return(
        <View style={{flex: 1}}>

            <FlatList
                data={postData}
                renderItem={({ item }) =>
                <postList
                    post={item}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default PostScreen;
import React from "react";
import { View, FlatList } from "react-native";
import postData from "../json/post.json";
import PostList from "../components/postList";
import Header from "../components/Header";

const PostScreen =({ navigation }) => {
    return(
        <View style={{flex: 1}}>
            <FlatList
                data={postData}
                renderItem={({ item }) =>
                <PostList
                    post={item}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default PostScreen;
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const MessergeIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Message.png';
const TagIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Tag.png';
const CommentIcon = '';

const postList =({post}) =>{
    return(
        <View style={styles.postListStyle}>
            <View style={styles.userContainerStyle}>
                <Image
                    style={styles.userImgStyle}
                    source={{
                        uri: post.headUrl
                    }}
                />
                <View style={styles.userStyle}>
                    <Text>{post.name}</Text>
                </View>
            </View>
            <View style={styles.postContainertyle }>
                <Image
                    style={styles.postImg}
                    source={{
                        uri: post.contentImgUrl
                    }}
                />
                <View> 

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    userContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    userImgStyle: {
        height:50,
        width:50,
        margin: 5,
    },
    userStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10
    },
    postListStyle: {

    },
    postContainertyle: {

    },
    postImg: {
        width: screenWidth,
        height: screenHeight * 0.7
    }
});

export default PostList;
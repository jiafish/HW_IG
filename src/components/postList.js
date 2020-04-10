import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const MessergeIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Message.png';
const TagIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/Tag.png';
const CommentIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/comment.png';
const LikeIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/baseline_favorite_border_black_18dp.png';
const MoreIcon = 'https://raw.githubusercontent.com/jiafish/HW_IG/master/assets/icon/outline_more_vert_black_24dp.png';

const PostList =({ post }) =>{
    return(
        <View style={styles.postListStyle}>
            <View style={styles.userContainerStyle}>
                <View style={styles.row}>
                    <Image
                    style={styles.userImgStyle}
                    source={{
                        uri: post.headUrl
                    }}
                    />
                    <Text style={styles.userStyle} >{post.name}</Text>
                </View>
                <Image style={styles.Icon} source={{uri: MoreIcon}} />
            </View>
            <Image
                    style={styles.postImg}
                    source={{
                        uri: post.contentImgUrl
                    }}/>
            <View style={styles.userContainerStyle }>
                <View style= {styles.row}> 
                    <Image source={{uri: LikeIcon}} style={styles.LikeIcon} />
                    <Image source={{uri: CommentIcon}} style={styles.Icon}/>
                    <Image source={{uri: MessergeIcon}} style={styles.Icon}/>
                </View>
                <Image source={{uri: TagIcon}} style={styles.TagIcon}/>
            </View>
            <Text style={styles.likeText}>{post.likesCount} likes</Text>
            <Text style={styles.content}>
                <Text style={styles.userStyle} >{post.name}</Text>
                {post.content}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    postListStyle: {
        marginTop: 10
    },
    userContainerStyle: {
        flexDirection: 'row',
        width: screenWidth,
        height: 56,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImgStyle: {
        height:36,
        width:36
    },
    userStyle: {
        fontWeight: "bold",
        marginLeft: 8
    },
    postImg: {
        width: screenWidth,
        height: screenHeight * 0.7,
        marginTop: 5
    },
    Icon: {
        height: 22,
        width: 22,
        marginLeft: 16
    },
    TagIcon: {
        height: 24,
        width: 30,
        marginLeft: 16
    },
    LikeIcon: {
            height: 26,
            width: 26
    },
    likeText: {
        paddingLeft: 16,
        fontWeight: "bold"
    },
    content: {
        marginTop: 8,
        paddingLeft: 16
    }
});

export default PostList;
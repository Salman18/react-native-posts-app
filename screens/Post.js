import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import CommentCard from '../components/CommentCard';
import styles from '../common/Styles';

const Post = ({route}) => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const {id, userId} = route.params.item;

  useEffect(() => {
    async function getPostDeatil() {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setPost(res.data);
    }
    async function getUserDetail() {
      const User = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      setUser(User.data);
    }

    async function getComments() {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );
      setComments(response.data);
    }
    getPostDeatil();
    getUserDetail();
    getComments();
  }, [userId, id]);

  return (
    <View style={styles.userCard}>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Post Title: </Text>
        {post.title}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>UserName:</Text>
        {user.username}
      </Text>
      <Text style={styles.placeholder}>Comments:</Text>
      <View>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <CommentCard comments={item} />}
        />
      </View>
    </View>
  );
};

export default Post;

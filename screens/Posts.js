import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import CardList from '../components/CardList';

const Posts = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    }
    getPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.title}
      renderItem={(item) => (
        <CardList
          onPress={() => navigation.navigate('Post', item)}
          posts={item}
          navigate={navigation.navigate}
        />
      )}
    />
  );
};

export default Posts;

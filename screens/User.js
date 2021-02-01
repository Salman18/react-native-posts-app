import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import styles from '../common/Styles';

const User = ({route}) => {
  const userId = route.params;
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      setUser(res.data);
    }
    getPosts();
  }, [userId]);

  const {username, email, website, company} = user;
  return (
    <View style={styles.userCard}>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Name:</Text> {username}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Email: </Text>
        {email}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Website: </Text>
        {website && website}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Company Name: </Text>
        {company && company.name}
      </Text>
    </View>
  );
};

export default User;

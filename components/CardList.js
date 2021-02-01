import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../common/Styles';

const CardList = ({posts, onPress, navigate}) => {
  const {title, userId} = posts.item;

  return (
    <TouchableOpacity onPress={onPress} style={styles.normalCard}>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Title:</Text> {title}
      </Text>
      <TouchableOpacity
        onPress={() => navigate('User', userId)}
        style={styles.button}>
        <Text>
          <Text style={styles.placeholder}>userDetails:</Text> {userId}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

//Since I am not getting username from post api

export default CardList;

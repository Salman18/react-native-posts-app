import React from 'react';
import {Text, View} from 'react-native';
import styles from '../common/Styles';

const CommentCard = ({comments}) => {
  const {email, name, body} = comments?.item;

  return (
    <View style={styles.commentCard}>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Email: </Text>
        {email}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Name:</Text> {name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.placeholder}>Body: </Text>
        {body}
      </Text>
    </View>
  );
};

export default CommentCard;

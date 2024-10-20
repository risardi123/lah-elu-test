import {Text, TouchableOpacity} from 'react-native';
import Card from '../Card';
import React from 'react';
import {styles} from './PostMemeLogin.style.tsx';

export const PostMemeLogin = () => {
  return (
    <Card style={styles.card}>
      <Text style={styles.titleText}>Mau ngepost meme kamu sendiri?</Text>
      <Text style={styles.subText}>Login dengan Google sekarang!</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </Card>
  );
};

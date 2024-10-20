import {Text, TouchableOpacity} from 'react-native';
import {borderRadius, color, fontSize, margin, paddingSize} from '../config.ts';
import Card from '../Card/Card.tsx';
import React from 'react';

export const PostMemeLogin = () => {
  return (
    <Card style={{alignItems: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: fontSize.lg,
        }}>
        Mau ngepost meme kamu sendiri?
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: margin.lg,
        }}>
        Login dengan Google sekarang!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: color.blue,
          borderRadius: borderRadius.full,
          padding: paddingSize.md,
          paddingHorizontal: paddingSize['4xl'],
          marginTop: margin.lg,
        }}>
        <Text style={{fontWeight: 'bold', color: color.white}}>Login</Text>
      </TouchableOpacity>
    </Card>
  );
};

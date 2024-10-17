import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {HashtagButton} from '../../../../components';
import {SawerButton} from '../../../../components/SawerButton/SawerButton.tsx';
import {paddingSize} from '../../../../components/config.ts';

interface HashtagListProps {
  hashtag?: string[];
}

const HashtagList = (props: HashtagListProps) => {
  return (
    <ScrollView horizontal={true} style={{margin: paddingSize.xl}}>
      <SawerButton />
      {props.hashtag &&
        Array.isArray(props.hashtag) &&
        props.hashtag.map((item, index) => (
          <HashtagButton key={index} title={item} style={styles.button} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 8, // replace with margin.md if you have a margin variable set
  },
});

export default HashtagList;

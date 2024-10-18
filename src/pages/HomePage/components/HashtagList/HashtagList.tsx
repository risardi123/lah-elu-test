import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {HashtagButton} from '../../../../components';
import {SawerButton} from '../../../../components/SawerButton/SawerButton.tsx';
import {paddingSize, margin} from '../../../../components/config.ts';

interface HashtagListProps {
  hashtag?: string[];
}

const HashtagList = (props: HashtagListProps) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
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
  scrollView: {
    margin: paddingSize.xl,
  },
  button: {
    marginLeft: margin.md,
  },
});

export default HashtagList;

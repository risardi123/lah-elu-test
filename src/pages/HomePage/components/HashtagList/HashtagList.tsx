import React from 'react';
import {ScrollView} from 'react-native';
import {HashtagButton} from '../../../../components';
import {SawerButton} from '../../../../components/Button/SawerButton/SawerButton.tsx';
import {styles} from './HashtagList.style.tsx';

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

export default HashtagList;

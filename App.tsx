import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {fontSize, margin, paddingSize} from './src/components/config.ts';
import {MediaViewer, HashtagButton} from './src/components';
import {SawerButton} from './src/components/SawerButton/SawerButton.tsx';
import {useViewableItem} from './src/hooks';
import {UserHomeFeedProfile} from './src/pages/HomePage/components/UserHomeFeedProfile/UserHomeFeedProfile.tsx';
import {UserHomeFeedbackControl} from './src/pages/HomePage/components/UserHomeFeedbackControl/UserHomeFeedbackControl.tsx';

export default function App() {
  const {handleViewableItemsChanged, currentVideoIndex} = useViewableItem();

  return (
    <SafeAreaView
      style={{backgroundColor: 'green', flex: 1, flexDirection: 'column'}}>
      <FlashList
        estimatedItemSize={5}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 200,
          viewAreaCoveragePercentThreshold: 50,
          waitForInteraction: false,
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginBottom: margin.sm,
                paddingVertical: paddingSize.xl,
                backgroundColor: currentVideoIndex === index ? 'white' : 'red',
              }}>
              <UserHomeFeedProfile
                avatarUrl={'https://cache.lahelu.com/avatar-UQmh3c4lD-34344'}
                username={'sendok_prasmita'}
                lastUpdated={'1 Hari'}
              />
              <Text
                style={{
                  fontSize: fontSize.lg,
                  fontWeight: 'bold',
                  paddingHorizontal: paddingSize.xl,
                  marginTop: margin.md,
                }}>
                Absen, sapa aj dari kalimantan 🗿
              </Text>

              <MediaViewer
                contentUrl={''}
                contentType={1}
                contentWidth={520}
                contentHeight={924}
              />

              <ScrollView
                style={{
                  paddingHorizontal: paddingSize.xl,
                  paddingVertical: paddingSize.lg,
                }}
                horizontal>
                <SawerButton />
                <HashtagButton title={'wtf'} style={{marginLeft: margin.md}} />
              </ScrollView>

              <UserHomeFeedbackControl />
            </View>
          );
        }}
        data={[0, 1]}
      />
    </SafeAreaView>
  );
}

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {disableScrollHomeAtom, useHomePage} from './hooks/useHomePage.tsx';
import {useHeaderDirection, useViewableItem} from '../../hooks';
import {FlashList} from '@shopify/flash-list';
import {UserHomeContent} from './components/UserHomeContent/UserHomeContent.tsx';
import {paddingSize} from '../../components/config.ts';
import {useAtomValue} from 'jotai/index';
import {Header} from '../../components';

export const HomePage = () => {
  const {posts, loading, fetchMore} = useHomePage();
  const {handleViewableItemsChanged, currentVideoIndex} = useViewableItem();
  const {handleScroll} = useHeaderDirection();
  const disableScrollHome = useAtomValue(disableScrollHomeAtom);

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  if (posts.length === 0) {
    return <React.Fragment />;
  }

  return (
    <>
      <Header />
      <FlashList
        scrollEnabled={disableScrollHome}
        bounces={false}
        ListHeaderComponentStyle={{
          paddingTop: paddingSize.header,
        }}
        ListFooterComponentStyle={{
          paddingBottom: 100,
          backgroundColor: 'orange',
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        data={posts}
        // this will triggered to re render the child
        extraData={currentVideoIndex}
        keyExtractor={item =>
          `post_${item.postID}_${item.userID}_${item.title}`
        }
        renderItem={({item, index}) => (
          <>
            {item.media && (
              <UserHomeContent
                key={item.userID.toString()}
                username={item.userUsername}
                avatarUrl={item.userAvatar}
                lastUpdate={item.createTime}
                title={item.title}
                contentUrl={item.media}
                contentType={item.mediaType}
                contentWidth={item.mediaWidth}
                contentHeight={item.mediaHeight}
                paused={index !== currentVideoIndex}
                muted={index !== currentVideoIndex}
                titleUp={item.totalUpvotes.toString()}
                titleComment={item.totalComments.toString()}
                hashtag={item.hashtags}
              />
            )}
          </>
        )}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        estimatedItemSize={posts.length}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 200,
          viewAreaCoveragePercentThreshold: 50,
          waitForInteraction: false,
        }}
      />
    </>
  );
};

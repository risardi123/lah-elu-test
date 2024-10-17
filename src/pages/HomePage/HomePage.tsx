import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useHomePage} from './hooks/useHomePage.tsx';
import {useViewableItem} from '../../hooks';
import {FlashList} from '@shopify/flash-list';
import {UserHomeContent} from './components/UserHomeContent/UserHomeContent.tsx';
export const HomePage = () => {
  const {posts, loading, fetchMore} = useHomePage();
  const {handleViewableItemsChanged, currentVideoIndex} = useViewableItem();
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
    <FlashList
      data={posts}
      // this will triggered to re render the child
      extraData={currentVideoIndex}
      keyExtractor={item => `post_${item.postID}_${item.userID}_${item.title}`}
      renderItem={({item, index}) => (
        <UserHomeContent
          key={item.userID.toString()}
          username={item.userUsername}
          avatarUrl={item.userAvatar}
          title={item.title}
          contentUrl={item.media}
          contentType={item.mediaType}
          contentWidth={item.mediaWidth}
          contentHeight={item.mediaHeight}
          paused={index !== currentVideoIndex}
          muted={index !== currentVideoIndex}
          titleUp={item.totalUpvotes.toString()}
          titleComment={item.totalComments.toString()}
        />
      )}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
      estimatedItemSize={posts.length}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{
        minimumViewTime: 300,
        viewAreaCoveragePercentThreshold: 50,
        waitForInteraction: false,
      }}
    />
  );
};

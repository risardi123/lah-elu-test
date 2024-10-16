import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useHomePage} from './hooks/useHomePage.tsx';
const HomePage = () => {
  const {posts, loading, fetchMore} = useHomePage();
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator size="large" color="#0000ff" />;
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={item => `post_${item.postID}_${item.userID}_${item.title}`}
      renderItem={({item}) => (
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            height: 300,
            borderColor: '#ccc',
          }}>
          <Text>{JSON.stringify(item.title)}</Text>
        </View>
      )}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
    />
  );
};
export default HomePage;

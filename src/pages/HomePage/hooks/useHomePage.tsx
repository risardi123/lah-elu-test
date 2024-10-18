import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

interface Post {
  postID: number;
  userID: number;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: number;
  feed: number;
  searchVector: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  sensitive: boolean;
  mediaType: number;
  hashtags: Array<string>;
  totalCoins: number;
  ageTime: number;
  userUsername: string;
  userAvatar: string;
  userPrivilege: number;
  userPlusTime: number;
}
interface Feed {
  postInfos: Array<Post>;
  nextPage: number;
  hasMore: boolean;
}

export const useHomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get<Feed>(
        `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`,
      );
      if (response.data && response.data.postInfos.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...response.data.postInfos]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, page]);

  const fetchMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPosts();
    }
  }, [loading, hasMore]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    page,
    loading,
    hasMore,
    fetchMore,
  };
};

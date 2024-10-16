import {useCallback, useState} from 'react';
import {ViewToken} from '@shopify/flash-list';

export const useViewableItem = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // Function to handle viewable items change
  const handleViewableItemsChanged = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index;
        if (index !== null) {
          setCurrentVideoIndex(index);
        }
      }
    },
    [],
  );

  return {
    currentVideoIndex,
    handleViewableItemsChanged,
  };
};

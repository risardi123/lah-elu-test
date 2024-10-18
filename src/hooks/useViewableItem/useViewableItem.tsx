import {useCallback, useState} from 'react';
import {ViewToken} from '@shopify/flash-list';

// This function is supposed to detect whether the current component is visible.
export const useViewableItem = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

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

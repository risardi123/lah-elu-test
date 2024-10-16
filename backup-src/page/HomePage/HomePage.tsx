import {HomeCard} from '../../component/HomeCard/HomeCard.tsx';
import {FlashList} from '@shopify/flash-list';
import {useRef, useState} from 'react';
const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];
export const HomePage = () => {
  return (
    <>
      <FlashList
        contentInsetAdjustmentBehavior="automatic"
        data={DATA}
        renderItem={() => <HomeCard />}
        estimatedItemSize={200}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 60,
        }}
      />
    </>
  );
};

// const [previouslyVisibleItems, setPreviouslyVisibleItems] = useState<
//     number[]
// >([]);
//
// const onViewableItemsChanged = useRef(
//     ({
//        viewableItems,
//      }: {
//       viewableItems: {item: number}[];
//       changed: {item: number}[];
//     }) => {
//       const currentlyVisibleItemIds = viewableItems.map(item => item.item);
//
//       // Determine if there's a change in visibility
//       const newVisibleItems = currentlyVisibleItemIds.filter(
//           id => !previouslyVisibleItems.includes(id),
//       );
//       const newlyHiddenItems = previouslyVisibleItems.filter(
//           id => !currentlyVisibleItemIds.includes(id),
//       );
//
//       if (newVisibleItems.length > 0) {
//         setPreviouslyVisibleItems(currentlyVisibleItemIds);
//       }
//
//       if (newlyHiddenItems.length > 0) {
//         console.log('Newly hidden items:', newlyHiddenItems);
//       }
//
//       // Update the previously visible items state
//       // setPreviouslyVisibleItems(currentlyVisibleItemIds);
//     },
// );

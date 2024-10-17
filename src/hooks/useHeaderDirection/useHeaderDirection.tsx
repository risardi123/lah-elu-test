import {atom, useSetAtom} from 'jotai';
import {useRef, useCallback} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAtomValue} from 'jotai/index';
import lodash from 'lodash';
import {paddingSize} from '../../components/config.ts';

export const headerDirectionAtom = atom<'up' | 'down'>('up');
export const useHeaderDirection = () => {
  const headerDirection = useAtomValue(headerDirectionAtom);
  const setHeaderDirection = useSetAtom(headerDirectionAtom);
  const offset = useRef<number>(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const dif = currentOffset - offset.current;
      const newDirection = dif < 0 ? 'up' : 'down';

      if (currentOffset < paddingSize.header) {
        if (!lodash.isEqual(headerDirection, 'up')) {
          setHeaderDirection('up');
        }
      } else if (!lodash.isEqual(headerDirection, newDirection)) {
        setHeaderDirection(newDirection);
      }

      offset.current = currentOffset;
    },
    [headerDirection, setHeaderDirection],
  );

  return {
    direction: headerDirection,
    handleScroll,
  };
};

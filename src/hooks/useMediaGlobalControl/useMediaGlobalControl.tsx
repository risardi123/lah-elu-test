import {useCallback} from 'react';
import {atom, useSetAtom} from 'jotai';

export const globalMuteAtom = atom<boolean>(false);
export const useMediaGlobalControl = () => {
  const setGlobalMute = useSetAtom(globalMuteAtom);

  const toggleSound = useCallback(() => {
    setGlobalMute(state => !state);
  }, []);

  return {
    toggleSound,
  };
};

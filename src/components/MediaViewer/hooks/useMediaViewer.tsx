import {useCallback, useEffect, useMemo, useState} from 'react';
import {MediaViewerProps} from '../MediaViewer.tsx';
import {useAtomValue} from 'jotai/index';
import {globalMuteAtom} from '../../../hooks/useMediaGlobalControl/useMediaGlobalControl.tsx';

const DEFAULT_MEDIA_RATIO = 3 / 4;
const MAX_ALLOWED_RATIO = 4 / 5;

export const useMediaViewer = (props: MediaViewerProps) => {
  const globalMute = useAtomValue(globalMuteAtom);
  const [pause, setPause] = useState<boolean>(false);

  const memoContentWidth = useMemo(() => {
    return props.contentWidth;
  }, [props.contentWidth]);

  const memoContentHeight = useMemo(() => {
    return props.contentHeight;
  }, [props.contentHeight]);

  const memoContentUrl = useMemo(() => {
    return props.contentUrl;
  }, [props.contentUrl]);

  const getAdjustedAspectRatio = useMemo(() => {
    if (!memoContentWidth || !memoContentHeight) {
      return DEFAULT_MEDIA_RATIO;
    }

    const userRatio = memoContentWidth / memoContentHeight;

    // If the content is too wide or has a higher ratio than allowed, return default
    if (userRatio < MAX_ALLOWED_RATIO) {
      return DEFAULT_MEDIA_RATIO;
    }

    return userRatio;
  }, [memoContentWidth, memoContentHeight]);

  const togglePause = useCallback(() => {
    setPause(state => !state);
  }, [setPause]);

  const getPauseState = useCallback(() => {
    return props.paused || pause;
  }, [props.paused, pause]);

  const getMuteState = useCallback(() => {
    return props.muted || globalMute;
  }, [props.muted, globalMute]);

  useEffect(() => {
    setPause(false);
  }, [props.paused]);

  return {
    memoContentWidth,
    memoContentHeight,
    memoContentUrl,
    getAdjustedAspectRatio,
    togglePause,
    pause,
    getPauseState,
    getMuteState,
  };
};

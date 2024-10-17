import {useMemo} from 'react';
import {MediaViewerProps} from '../MediaViewer.tsx';

const DEFAULT_MEDIA_RATIO = 3 / 4;
const MAX_ALLOWED_RATIO = 4 / 5;

export const useMediaViewer = (props: MediaViewerProps) => {
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

  return {
    memoContentWidth,
    memoContentHeight,
    memoContentUrl,
    getAdjustedAspectRatio,
  };
};

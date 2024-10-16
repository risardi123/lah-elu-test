import {useMemo} from 'react';
import {MediaViewerProps} from '../MediaViewer.tsx';

const DEFAULT_MEDIA_RATIO = 3 / 4;
const maxAllowedRatio = 9 / 16;

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
    const currentRatio = memoContentWidth / memoContentHeight;

    if (currentRatio > maxAllowedRatio) {
      return DEFAULT_MEDIA_RATIO;
    }

    return memoContentWidth / memoContentHeight;
  }, [memoContentWidth, memoContentHeight]);

  return {
    memoContentWidth,
    memoContentHeight,
    memoContentUrl,
    getAdjustedAspectRatio,
  };
};

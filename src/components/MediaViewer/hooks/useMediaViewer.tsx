import {useMemo} from 'react';
import {ContentViewProps} from '../ContentViewer.tsx';

const defaultRatio = 3 / 4;
const maxAllowedRatio = 9 / 16;

export const useContentViewer = (props: ContentViewProps) => {
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
      return defaultRatio;
    }
    const currentRatio = memoContentWidth / memoContentHeight;

    if (currentRatio > maxAllowedRatio) {
      return defaultRatio;
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

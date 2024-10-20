import {ViewStyle} from 'react-native';
import {Button} from '../Button.tsx';
import {color} from '../../config.ts';

interface HashtagButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
  title?: string;
}

export const HashtagButton = (props: HashtagButtonProps) => {
  return (
    <Button
      style={props.style}
      onPress={props.onPress}
      title={props.title}
      prefix="#"
      backgroundColor={color.primaryBackgroundColor}
      borderColor={color.primaryBorderColor}
      textColor={color.black}
    />
  );
};

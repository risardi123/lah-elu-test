import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useCallback, useRef, useState} from 'react';
import Video, {OnLoadData, VideoRef} from 'react-native-video';

export const HomeCard = () => {
  const videoRef = useRef<VideoRef>(null);
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const setHeightDynamic = useCallback((response: OnLoadData) => {
    const {width, height} = response.naturalSize;
    setDynamicHeight(width / height);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingVertical: 8,
        marginBottom: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 3,
          marginHorizontal: 8,
        }}>
        <View
          style={{
            width: 30,
            aspectRatio: 1,
            backgroundColor: 'red',
            borderRadius: 30,
          }}
        />
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
          Sipaling Cool
        </Text>
        <Text style={{fontSize: 12}}>•</Text>
        <Text style={{fontSize: 12}}>1 hari</Text>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
          margin: 8,
        }}>
        Komentar Title
      </Text>

      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
        }}>
        <View
          style={{
            width: '100%',
            aspectRatio: dynamicHeight > 0.53 ? dynamicHeight : 4 / 5,
          }}>
          <Video
            ref={videoRef}
            source={{
              uri: 'https://videos.pexels.com/video-files/5082588/5082588-uhd_1440_2732_25fps.mp4',
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode={'contain'}
            repeat={true}
            onLoad={setHeightDynamic}
          />
        </View>
      </View>

      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          gap: 6,
          margin: 8,
        }}>
        {['Sawer', 'Dark'].map(item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                gap: 6,
                backgroundColor: 'orange',
                alignItems: 'center',
                borderRadius: 12,
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}>
              <Icon
                name="thumb-down"
                size={12}
                color="gray"
                style={{
                  backgroundColor: 'white',
                  padding: 1,
                  borderRadius: 12,
                }}
              />
              <Text style={{fontWeight: 'bold', fontSize: 12}}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

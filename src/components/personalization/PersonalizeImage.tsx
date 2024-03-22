import {nanoid} from '@reduxjs/toolkit';
import {useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {personalizationStyle} from '../../styles/PersonalizationStyle';
import {appColors, fontSize, sizeBlock} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';
import * as Animatable from 'react-native-animatable';

type Props = {};
interface ImageData {
  id: string;
  name: string | null;
  size: number | null;
  uri: string;
  type: string;
}

const initialState: ImageData[] = [
  {
    id: nanoid(),
    name: 'blank_1',
    size: 0,
    uri: 'blank_1',
    type: 'application/image',
  },
  {
    id: nanoid(),
    name: 'blank_2',
    size: 0,
    uri: 'blank_2',
    type: 'application/image',
  },
];

const PersonalizeImage = (props: Props) => {
  const [imageData, setImageData] = useState<typeof initialState>(initialState);
  const [editing, setEditing] = useState<boolean>(false);
  const [imageEditID, setImageEditID] = useState<string>('');

  const selectImage = (type: 'pick' | 'edit', imageEditID?: string) => {
    DocumentPicker.pickSingle({
      type: 'image/*',
    }).then(response => {
      if (response !== null) {
        let {name, size, uri} = response;
        const nameParts = uri.split('.');
        const ext = nameParts[nameParts.length - 1];
        const imageToUpload = {
          id: nanoid(),
          name: name,
          size: size,
          uri: uri,
          type: 'application/' + ext,
        };

        if (type === 'pick') {
          if (imageData.length === 2 && imageData[0].name === 'blank_1') {
            setImageData(prevImages => [imageToUpload, ...prevImages.slice(1)]);
          } else {
            setImageData(prevImages => [imageToUpload, ...prevImages]);
          }
        }

        if (type === 'edit') {
          setImageData(prevImages => {
            return prevImages.map(image => {
              if (image.id === imageEditID) {
                return imageToUpload;
              } else {
                return image;
              }
            });
          });
        }
      }
    });
  };

  const handleImageEdit = (imageID: string) => {
    setImageEditID(imageID);
    setEditing(!editing);
  };

  const editImage = () => {
    selectImage('edit', imageEditID);
  };

  const removeImage = () => {
    const filteredImageData = imageData.filter(image => {
      return image.id !== imageEditID;
    });
    setImageData(filteredImageData);
  };

  return (
    <>
      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
          lineHeight: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.medium - 3}
        fontType="semiBold">
        Add your {imageData.length > 4 ? 'more' : 'first'} image{'\n'}on ID
      </CustomText>
      <CustomText
        customStyle={{
          marginTop: sizeBlock.getHeightSize(30),
        }}
        color={appColors.white}
        fontSize={fontSize.small - 3}
        fontType="regular">
        Adding an image improves your chances of been visible.
      </CustomText>

      <Animatable.View
        style={[
          personalizationStyle.editButtonContainer,
          {
            height: editing ? sizeBlock.getHeightSize(40) : null,
            opacity: editing ? 1 : 0,
          },
        ]}
        transition={['height', 'opacity']}>
        <Pressable
          style={personalizationStyle.editButton}
          onPress={() => {
            editImage();
          }}>
          <CustomText fontSize={fontSize.small - 2} fontType="medium">
            Edit
          </CustomText>
        </Pressable>
        <Pressable
          style={personalizationStyle.editButton}
          onPress={() => {
            removeImage();
          }}>
          <CustomText fontSize={fontSize.small - 2} fontType="medium">
            Remove
          </CustomText>
        </Pressable>
      </Animatable.View>

      <FlatList
        key={imageData.length}
        showsVerticalScrollIndicator={false}
        numColumns={imageData.length}
        style={personalizationStyle.imageWrapper}
        columnWrapperStyle={{
          gap: sizeBlock.getWidthSize(30),
          flexWrap: 'wrap',
          paddingBottom: sizeBlock.getHeightSize(35),
        }}
        data={imageData}
        keyExtractor={(item, index) => {
          return item.name || index.toString();
        }}
        renderItem={({item, index}) => {
          return (
            <Pressable
              key={index}
              style={personalizationStyle.imageContainer}
              onPress={() => {
                !item.size ? selectImage('pick') : null;
              }}>
              <PlusIcon
                name="plus"
                size={fontSize.small}
                color={appColors.black}
              />
              {item.size && item.size > 0 ? (
                <>
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    resizeMode="cover"
                    style={personalizationStyle.image}
                  />
                  <Pressable
                    style={personalizationStyle.editIcon}
                    onPress={() => {
                      item.size && item.size > 0
                        ? handleImageEdit(item.id)
                        : null;
                    }}>
                    <EditIcon
                      name="pencil"
                      size={fontSize.small - 2}
                      color={appColors.onGradientPrimary}
                    />
                  </Pressable>
                </>
              ) : null}
            </Pressable>
          );
        }}
      />
    </>
  );
};

export default PersonalizeImage;

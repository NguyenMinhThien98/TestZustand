import {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const useLoginFacade = () => {
  const navigaton = useNavigation();
  const [images, setImages] = useState([]);
  const [isVisivle, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remeber, setRemember] = useState('');
  const options = {
    maxHeight: 900,
    maxWidth: 900,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
    quality: 1,
  };

  const onShowModal = () => setIsVisible(true);

  const onTogleModal = () => setIsVisible(!isVisivle);

  const onChangEmail = useCallback(value => setEmail(value), [email]);
  const onChangePassword = useCallback(value => setPassword(value), [password]);

  const onLauchLibrary = () => {
    launchImageLibrary(
      options,
      ({assets, didCancel, errorCode, errorMessage}) => {
        console.log(assets);
        if (didCancel) {
          console.log('Cancel');
        } else if (errorCode) {
          console.log(errorMessage);
        } else {
          const source = {
            uri: assets[0].uri,
            type: assets[0].type,
            name: assets[0].name,
          };
          setImages([...images, source.uri]);
        }
      },
    );
  };

  const onLauchCamera = () => {
    launchCamera(options, ({assets, didCancel, errorCode, errorMessage}) => {
      console.log(assets);
      if (didCancel) {
        console.log('Cancel');
      } else if (errorCode) {
        console.log(errorMessage);
      } else {
        const source = {
          uri: assets[0].uri,
          type: assets[0].type,
          name: assets[0].name,
        };
        setImages([...images, source.uri]);
      }
    });
  };

  return {
    isVisivle,
    email,
    password,
    remeber,
    images,
    onShowModal,
    onTogleModal,
    onChangEmail,
    onChangePassword,
    onLauchLibrary,
    onLauchCamera,
  };
};

export default useLoginFacade;

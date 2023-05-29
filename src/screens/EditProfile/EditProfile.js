import {TouchableOpacity, TextInput} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import Header from '../../components/Header/Header';
import {THEME_COLORS} from '../../constant/Theme';
import styles from './style';
import HorizontalLine from '../../components/HorizontalLine/HorizontalLine';
import AppText from '../../components/AppText/AppText';
import AppView from '../../components/AppView/AppView';
import AppImage from '../../components/AppImage/AppImage';
import {useNavigation} from '@react-navigation/native';
import iconPath from '../../constant/iconPath';
import RoundImage from '../../components/RoundImage/RoundImage';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../utils/Permissions';
import {useRoute} from '@react-navigation/native';
import action from '../../store/action';
import {SIGNUP_API} from '../../config/Axios';

const EditProfile = () => {
  const [selectedImage, setselectedImage] = useState('');
  const [USERDATA, setUSERDATA] = useState('');
  const [state, setState] = useState({
    name: '',
    image: '',
    data: null,
  });

  const updateState = (field, value) => {
    setState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };
  // console.log(state);
  const navigation = useNavigation();
  const route = useRoute();
  const {params} = route;
  useEffect(() => {
    setUSERDATA(params.DATA);
    updateState('data', params.DATA);
  }, [USERDATA]);

  const pickImage = async () => {
    const verificationStatus = await androidCameraPermission();
    if (verificationStatus) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(res => {
        setselectedImage(res.path);
        updateState('image', res.path);
      });
    }
  };
  const leftHeaderView = () => {
    return (
      <AppView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AppImage source={iconPath.icBack} />
        </TouchableOpacity>
      </AppView>
    );
  };
  // console.log(state.data.NUMBER);

  const Done = async () => {
    const Login_Code = state.data.COUNTRYDATA.dialCode.slice(1);

    const POST_API_DATA = {
      name: state.name,
      phone: state.data.COUNTRYDATA.dialCode + state.data.NUMBER,
      selectedCountry: state.data.COUNTRYDATA,
    };
    const LOGIN_API_DATA = {
      phone: state.data.NUMBER,
    };
    if (
      !state.image == '' ||
      !state.image == null ||
      !state.image == undefined
    ) {
      POST_API_DATA.profilePicture = state.image;
    }
    try {
      const res = await action.signUp(POST_API_DATA, SIGNUP_API);
      const LoginReqData = {
        phone: `${Login_Code}${LOGIN_API_DATA.phone}`,
      };

      const loginres = await action.Login(LoginReqData);

      if (loginres.success) {
        navigation.navigate('OtpVerification', {
          DATA: loginres,
        });
      }
    } catch (error) {
      console.log('Error raised in api calling ' + ' ' + error);
    }
  };  
  return (
    <WrapperContainer
      flex={1}
      barColor={THEME_COLORS.white}
      containerStyle={styles.container}>
      <Header
        centerText={'Edit Your Profile'}
        rightText={'Done'}
        rightDiabled={state.name.length > 3 ? true : false}
        leftText={true}
        leftView={leftHeaderView}
        marginLeft={10}
        onRightPress={Done}
      />
      <HorizontalLine />
      <AppView
        paddingVertical={20}
        paddingHorizontal={20}
        alignItems={'center'}
        alignSelf={'center'}
        flexDirection={'row'}>
        <RoundImage onPress={pickImage} image={selectedImage} />
        <AppText width={'75%'} paddingHorizontal={20}>
          Enter your name and add an optional profile picture
        </AppText>
      </AppView>
      <HorizontalLine marginHorizontal={25} />
      <TextInput
        style={styles.input}
        placeholder="Your name (for notifications)"
        value={state.name}
        onChangeText={text => updateState('name', text)}
      />
      <HorizontalLine marginHorizontal={25} />
    </WrapperContainer>
  );
};

export default memo(EditProfile);

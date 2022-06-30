import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import GetContext from '../../context/Context';
import {setUser} from '../../store/reducer/userSlice';
import {male, female} from '../../assets/images';
import {Picker} from '@react-native-picker/picker';

import Styles from './style';
import {useDispatch} from 'react-redux';
const Context = GetContext();

const Login = () => {
  const dispatch = useDispatch();
  const {theme} = Context.UseData();

  const style = Styles(theme);

  const [fullName, setFullName] = useState('');

  const [openDropdown, setOpenDropdown] = useState(false);
  const [valueDropdown, setValueDropdown] = useState('LAKI-LAKI');
  const [itemsDropdown, setItemsDropdown] = useState([
    {
      label: 'Laki-Laki',
      value: 'LAKI-LAKI',
      icon: () => <Image source={male} />,
    },
    {
      label: 'Perempuan',
      value: 'PEREMPUAN',
      icon: () => <Image source={female} />,
    },
  ]);

  const onChangeTextInput = text => {
    setFullName(text);
  };

  const onPressButton = () => {
    dispatch(setUser({name: fullName, gender: valueDropdown}));
  };

  return (
    <Container
      containerStyle={style.container}
      backgroundColorContainer={theme.colors.white}>
      <View style={style.appTitleContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={style.appTitleLogo}
        />
        <Text
          style={style.appTitleText}
          color={theme.colors.text}
          fontSize={16}
          fontFamily={theme.fonts.bold}>
          JADWAL KEGIATANKU “BETERNAK AYAM”
        </Text>
      </View>
      <Text style={style.intructionTitleText} color={theme.colors.raisinBlack}>
        Isi nama lengkapmu dibawah ini, supaya dapat masuk ke dalam apps
      </Text>
      <TextInput
        title="Nama Lengkap"
        color={theme.colors.raisinBlack}
        textInputProps={{
          value: fullName,
          onChangeText: onChangeTextInput,
          testID: 'fullName-textInput',
          placeholder: 'Masukkan Nama Lengkap Kamu',
        }}
      />
      <Text style={style.dropdownTitleText} color={theme.colors.raisinBlack}>
        Jenis Kelamin
      </Text>
      <Picker
        selectedValue={valueDropdown}
        onValueChange={value => {
          setValueDropdown(value);
        }}>
        <Picker.Item label="Laki-Laki" value="LAKI-LAKI" />
        <Picker.Item label="Perempuan" value="PEREMPUAN" />
      </Picker>
      <Button
        onPress={onPressButton}
        text="MASUK"
        color={theme.colors.white}
        marginTop={40}
        backgroundColor={theme.colors.bitterSweet}
        fontFamily={theme.fonts.bold}
      />
    </Container>
  );
};

export default Login;

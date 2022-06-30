/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Container/Container';
import {female, male, laptop, bike} from '../../assets/images/index.js';
import Text from '../../components/Text/Text';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import GetContext from '../../context/Context';

import Styles from './style';
import Icon from '../../assets/icons';
import Modal from '../../components/Modal/Modal';
import ModalSuccess from '../../components/Modal/ModalSuccess';
import ModalError from '../../components/Modal/ModalError';
import {useSelector} from 'react-redux';
const Context = GetContext();

const Reward = () => {
  const {theme} = Context.UseData();
  const {fonts, colors} = theme;

  const {point} = useSelector(state => state);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccessOpen, setModalSuccessOpen] = useState(false);
  const [modalErrorOpen, setModalErrorOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const {gender, name} = useSelector(state => state);

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onOpenModal = type => {
    setModalOpen(true);
    setModalType(type);
  };

  const onCloseModalSuccess = () => {
    setModalSuccessOpen(false);
  };

  const onOpenModalsuccess = type => {
    if (type === 'laptop') {
      if (point < 1000) {
        setModalErrorOpen(true);
      } else {
        setModalSuccessOpen(true);
      }
    } else {
      if (point < 800) {
        setModalErrorOpen(true);
      } else {
        setModalSuccessOpen(true);
      }
    }
  };

  const onCloseModalError = () => {
    setModalErrorOpen(false);
  };

  const style = Styles(theme);
  return (
    <Container containerStyle={style.container}>
      <Modal
        open={modalOpen}
        onCloseModal={onCloseModal}
        type={modalType}
        openSuccess={onOpenModalsuccess}
      />
      <ModalSuccess
        open={modalSuccessOpen}
        onCloseModal={onCloseModalSuccess}
        type={modalType}
      />
      <ModalError open={modalErrorOpen} onCloseModal={onCloseModalError} />
      <View style={style.profileContainer}>
        <View>
          <Text
            fontSize={20}
            fontFamily={fonts.bold}
            color={colors.raisinBlack}>
            Hi {capitalizeFirstLetter(name)}
          </Text>
          <Text
            style={style.taskText}
            color={colors.bitterSweet}
            fontSize={14}
            fontFamily={fonts.semiBold}>
            Ada 20 kegiatan hari ini
          </Text>
        </View>
        <View style={style.iconUserContainer}>
          <Image source={gender === 'LAKI-LAKI' ? male : female} />
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
        <Icon.Star />
        <Text
          style={{marginLeft: 8}}
          fontFamily={fonts.semiBold}
          color={colors.raisinBlack}>
          {point} Point
        </Text>
      </View>
      <Text
        fontFamily={fonts.bold}
        color={colors.raisinBlack}
        style={{marginBottom: 8}}>
        Reward yang dapat dipilih
      </Text>
      <TouchableOpacity
        onPress={() => onOpenModal('laptop')}
        style={{
          backgroundColor: colors.white,
          borderRadius: 12,
          alignItems: 'center',
          marginVertical: 8,
          padding: 8,
        }}>
        <Text fontFamily={fonts.semiBold} color={colors.raisinBlack}>
          Bermain laptop selama 2 jam
        </Text>
        <Image source={laptop} style={{marginVertical: 12}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon.Star />
          <Text
            color={colors.raisinBlack}
            fontFamily={fonts.semiBold}
            style={{marginLeft: 8}}>
            1.000 Point yang digunakan
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onOpenModal('sepeda')}
        style={{
          backgroundColor: colors.white,
          borderRadius: 12,
          alignItems: 'center',
          marginVertical: 8,
          padding: 8,
        }}>
        <Text fontFamily={fonts.semiBold} color={colors.raisinBlack}>
          Bermain laptop selama 2 jam
        </Text>
        <Image source={bike} style={{marginVertical: 12}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon.Star />
          <Text
            color={colors.raisinBlack}
            fontFamily={fonts.semiBold}
            style={{marginLeft: 8}}>
            800 Point yang digunakan
          </Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Reward;

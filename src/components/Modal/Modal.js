/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal as NativeModal, TouchableOpacity, View} from 'react-native';
import GetContext from '../../context/Context';
import Text from '../Text/Text';

const Context = GetContext();

const Modal = ({open, onCloseModal, type, openSuccess}) => {
  const {theme} = Context.UseData();

  const cost = type === 'laptop' ? '1000' : '800';
  const rewardType =
    type === 'laptop'
      ? 'bermain laptop selama 2 jam'
      : 'bermain sepeda di hari minggu sore';

  const onAgree = () => {
    onCloseModal();
    openSuccess(type);
  };

  return (
    <View>
      <NativeModal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={onCloseModal}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onCloseModal}
          activeOpacity={1}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 24,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                backgroundColor: theme.colors.white,
                padding: 16,
              }}>
              <Text style={{textAlign: 'center'}}>
                Apakah kamu yakin ingin menukarkan {cost} point untuk{' '}
                {rewardType}?
              </Text>
              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  width: '40%',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={onAgree}
                  style={{
                    backgroundColor: theme.colors.lightSkyBlue,
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <Text color={'white'}>Ya</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onCloseModal}
                  style={{
                    backgroundColor: theme.colors.bitterSweet,
                    padding: 12,
                    borderRadius: 12,
                  }}>
                  <Text color={'white'}>Tidak</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};

export default Modal;

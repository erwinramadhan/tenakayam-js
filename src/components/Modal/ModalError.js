/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal as NativeModal, TouchableOpacity, View} from 'react-native';
import GetContext from '../../context/Context';
import Text from '../Text/Text';

const Context = GetContext();

const Modal = ({open, onCloseModal}) => {
  const {theme} = Context.UseData();

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
                Maaf point kamu tidak cukup, kumpulkan point dengan
                menyelesaikan tugas setiap harinya.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.lightSkyBlue,
                  padding: 12,
                  borderRadius: 12,
                  marginTop: 12,
                }}
                onPress={onCloseModal}>
                <Text color={'white'}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};

export default Modal;

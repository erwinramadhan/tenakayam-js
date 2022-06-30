import React from 'react';
import dayjs from 'dayjs';

import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import Styles from './style';
import GetContext from '../../context/Context';
import {Image, View} from 'react-native';
import {female, male} from '../../assets/images/index.js';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import Card from '../../components/Card/Card';
import {setDeailTask} from '../../store/reducer/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const Context = GetContext();

const Home = () => {
  const {theme} = Context.UseData();
  const style = Styles(theme);

  const {gender, name, taskList} = useSelector(state => state);

  const dataAfterNoon = taskList.find(
    el => el.date === dayjs().format('YYYY-MM-DD'),
  )?.itemsAfternoon;

  const dataMorning = taskList.find(
    el => el.date === dayjs().format('YYYY-MM-DD'),
  )?.itemsMorning;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = e => {
    navigation.navigate('detailTask');
    dispatch(setDeailTask(e));
  };

  return (
    <Container containerStyle={style.container} scrollView={true}>
      <View style={style.profileContainer}>
        <View>
          <Text
            fontSize={20}
            fontFamily={theme.fonts.bold}
            color={theme.colors.raisinBlack}>
            Hi {capitalizeFirstLetter(name)}
          </Text>
          <Text
            style={style.taskText}
            color={theme.colors.bitterSweet}
            fontSize={14}
            fontFamily={theme.fonts.semiBold}>
            Ada 20 kegiatan hari ini
          </Text>
        </View>
        <View style={style.iconUserContainer}>
          <Image source={gender === 'LAKI-LAKI' ? male : female} />
        </View>
      </View>
      <Text
        fontSize={14}
        color={theme.colors.raisinBlack}
        fontFamily={theme.fonts.bold}
        style={style.categoryText}
        marginTop={40}
        marginBottom={20}>
        Kategori
      </Text>
      <View style={style.categoryCardContainer}>
        <Card
          colors={theme.colors}
          fonts={theme.fonts}
          category="morning"
          type="category"
          onClick={onPress}
          taskData={dataMorning}
        />
        <Card
          colors={theme.colors}
          fonts={theme.fonts}
          category="afternoon"
          type="category"
          onClick={onPress}
          taskData={dataAfterNoon}
        />
      </View>
      <Text
        fontSize={14}
        color={theme.colors.raisinBlack}
        fontFamily={theme.fonts.bold}
        style={style.categoryText}
        marginTop={28}
        marginBottom={14}>
        Kegiatan yang berjalan
      </Text>
      <Card
        colors={theme.colors}
        fonts={theme.fonts}
        type="task"
        category="morning"
        taskData={dataMorning}
        onClick={onPress}
      />
      <Text
        fontSize={14}
        color={theme.colors.raisinBlack}
        fontFamily={theme.fonts.bold}
        style={style.categoryText}
        marginTop={28}
        marginBottom={14}>
        Kegiatan yang akan datang
      </Text>
      <Card
        colors={theme.colors}
        fonts={theme.fonts}
        type="task"
        category="afternoon"
        taskData={dataAfterNoon}
        onClick={onPress}
      />
    </Container>
  );
};

export default Home;

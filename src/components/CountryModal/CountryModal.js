import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Modal from 'react-native-modal';
import {THEME_COLORS} from '../../constant/Theme';
import AppView from '../AppView/AppView';
import Header from '../Header/Header';
import countries from '../../constant/Countries';
import AppText from '../AppText/AppText';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
const CountryModal = ({isVisible, setisVisibe, PickCountry}) => {
  const [countryData, setcountryData] = useState(countries);
  const handelCountryList = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => PickCountry(item)}>
          <AppText fontSize={'h5'} paddingVertical={10} paddingHorizontal={25}>
            {item.name}({item.dialCode})
          </AppText>
        </TouchableOpacity>
      );
    },
    [countryData],
  );

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={THEME_COLORS.white}
      style={{margin: 0}}>
      <SafeAreaView style={{flex: 1}}>
        <AppView backgroundColor={THEME_COLORS.white} flex={1}>
          <Header
            centerText={'Select Your Country'}
            rightText={'Done'}
            onRightPress={() => {
              setisVisibe(false);
            }}
          />
          <FlatList
            data={countryData}
            renderItem={handelCountryList}
            ItemSeparatorComponent={() => (
              <HorizontalLine marginHorizontal={25} />
            )}
          />
        </AppView>
      </SafeAreaView>
    </Modal>
  );
};

export default React.memo(CountryModal);

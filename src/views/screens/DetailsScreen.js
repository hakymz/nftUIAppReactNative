import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';

const DetailsScreen = ({navigation, route}) => {
  const data = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ImageBackground
        source={data.image}
        style={{
          position: 'absolute',
          width: '100%',
          height: 400,
          borderBottomRightRadius: 60,
          overflow: 'hidden',
        }}>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <Icon
            onPress={navigation.goBack}
            name="chevron-left"
            size={30}
            color={COLORS.white}
          />
          <Icon name="dots-vertical" size={30} color={COLORS.white} />
        </View>
      </ImageBackground>

      <View
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 10,
          top: 400,
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={data.creatorImage}
              style={{height: 50, width: 50, borderRadius: 50}}
            />
            <Text style={{marginLeft: 10, color: COLORS.black}}>
              {data.creator}
            </Text>
          </View>
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: COLORS.violet,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Icon name="heart-outline" size={18} color={COLORS.white} />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 2,
              }}>
              33
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 22,
            color: COLORS.black,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Description
        </Text>
        <Text style={{lineHeight: 30, color: COLORS.black}}>
          Dryptoqunk launched as a fixed set of 10,000 items in mid-2017 and
          became one of the inspirations for the ERC-721 standard. They have
          been featured in places like The New York Times, Christie's of London,
          Art| Basel Miami, and The PBS NewsHour.
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: COLORS.white,
          position: 'absolute',
          bottom: 0,
          padding: 20,
          paddingBottom: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/eth.png')}
            style={{height: 30, width: 30, borderRadius: 30}}
          />
          <Text
            style={{marginLeft: 5, color: COLORS.black, fontWeight: 'bold'}}>
            {data.price}
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: COLORS.violet,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 12}}>
            Buy Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
export default DetailsScreen;

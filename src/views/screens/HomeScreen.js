import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import COLORS from '../../const/colors';
import collections from '../../const/collections';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('window');

const Card = ({data, navigation}) => {
  return (
    <TouchableOpacity
      style={style.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', data)}>
      <Icon
        name="heart-outline"
        size={28}
        color={COLORS.white}
        style={{position: 'absolute', right: 10, top: 20, zIndex: 1}}
      />
      <Image
        source={data?.image}
        style={{height: '100%', width: '100%', borderRadius: 20}}
      />
      <View style={style.cardDetailsCon}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/eth.png')}
            style={{height: 25, width: 25, borderRadius: 25}}
          />
          <Text
            style={{
              marginLeft: 2,
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            {data.price}
          </Text>
        </View>
        <View style={style.cardBtn}>
          <Text style={{color: COLORS.white, fontSize: 10, fontWeight: 'bold'}}>
            Buy Now
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TrendingCard = ({data}) => {
  return (
    <View
      style={{
        height: 150,
        width: 180,
        backgroundColor: COLORS.white,
        marginLeft: 20,
        borderRadius: 10,
        shadowColor: COLORS.grey,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {height: 10},
        elevation: 10,
      }}>
      <Image
        source={data.image}
        style={{
          height: 80,
          width: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{height: 70, width: '100%', alignItems: 'center'}}>
        <Image
          source={data.creatorImage}
          style={{
            top: -20,
            height: 45,
            width: 45,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: COLORS.white,
          }}
        />
        <Text style={{fontWeight: 'bold', top: -20, color: COLORS.black}}>
          {data.creator}
        </Text>
      </View>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={style.header}>
        <View
          style={{
            height: 25,
            width: 70,
            backgroundColor: COLORS.violet,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Image
            source={require('../../assets/eth.png')}
            style={{height: 20, width: 20, borderRadius: 10}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: COLORS.white,
              marginLeft: 2,
              fontSize: 12,
            }}>
            22.6
          </Text>
        </View>

        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 40, width: 40, borderRadius: 25}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.title}>Top NFTS</Text>
        <FlatList
          snapToInterval={width * 0.55}
          decelerationRate="fast"
          contentContainerStyle={{paddingRight: 20, paddingBottom: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={collections}
          renderItem={({item}) => <Card data={item} navigation={navigation} />}
        />
        <Text style={style.title}>Trending collections</Text>
        <FlatList
          contentContainerStyle={{paddingRight: 20, paddingBottom: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={collections}
          renderItem={({item}) => <TrendingCard data={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.black,
  },
  card: {
    height: 300,
    width: width * 0.55,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: COLORS.white,
    borderWidth: 7,
    shadowColor: COLORS.grey,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
    elevation: 10,
  },
  cardDetailsCon: {
    height: 70,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default HomeScreen;

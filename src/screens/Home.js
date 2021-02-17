import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images, SIZES, dummyDestinations } from '../constants'

import OptionItem from '../components/OptionItem'

const Home = ({ navigation }) => {

  const [destinations, setDestinations] = useState(dummyDestinations)
  
  const renderDestinations = (item, index) => {
    let destinationStyle = {}
    if (index == 0) {
      destinationStyle = { marginLeft: SIZES.padding }
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle
        }}
        onPress={() => navigation.navigate('DestinationDetail')}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15
          }}
        />
        <Text
          style={{
            marginTop: SIZES.base / 2,
            ...FONTS.h4
          }}
        >
          { item.name }
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={styles.container}
    >
      {/* Banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding
        }}
      >
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15
          }}
        />
      </View>
      {/* Options */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base
          }}
        >
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label='Flight'
            onPress={() => console.log('Flight')}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#fddf90', '#fcda13']}
            label='Train'
            onPress={() => console.log('Train')}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#c973ad', '#da5df2']}
            label='Bus'
            onPress={() => console.log('Bus')}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label='Taxi'
            onPress={() => console.log('Taxi')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base
          }}
        >
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff9c5f']}
            label='Hotel'
            onPress={() => console.log('Hotel')}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#4ebefd']}
            label='Eats'
            onPress={() => console.log('Eats')}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be993', '#46caaf']}
            label='Adventure'
            onPress={() => console.log('Adventure')}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fc7b6c']}
            label='Event'
            onPress={() => console.log('Event')}
          />
        </View>
      </View>
      {/* Destination */}
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2
          }}
        >
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => renderDestinations(item, index)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.64,
    elevation: 5
  }
})

export default Home
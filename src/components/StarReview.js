import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const StarReview = ({ rate }) => {
  
  let starComponents = []
  let fullStar = Math.floor(rate)
  let noStar = Math.floor(5 - rate)
  let halfStar = 5 - fullStar - noStar

  // Full star
  for (let i = 0; i < fullStar; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // Half star
  for(let i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.halfStar}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // No star
  for(let i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {starComponents}
      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.gray,
          ...FONTS.body3
        }}
      >
        {rate}
      </Text>
    </View>
  )
}

export default StarReview
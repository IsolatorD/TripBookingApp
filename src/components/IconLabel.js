import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants'

const IconLabel = ({icon, label}) => {
  return (
    <View
      style={{
        alignItems: 'center'
      }}
    >
      <Image
        source={icon}
        resizeMode='cover'
        style={{
          width: 50,
          height: 50
        }}
      />
      <Text
        style={{
          marginTop: SIZES.padding,
          color: COLORS.gray,
          ...FONTS.h3
        }}
      >
        {label}
      </Text>
    </View>
  )
}

export default IconLabel
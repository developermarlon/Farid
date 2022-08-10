import { View, Text } from 'react-native'
import React from 'react'

const paginate = ({label,OrderProgress,OrderProgressItems,items,txtSteps}) => {
  return (
    <View style={OrderProgress}>
          <View
            style={[
            OrderProgressItems,
              {
                backgroundColor:
                  items.Status !== 'Confirmed' ||
                  items.Status !== 'Work Started' ||
                  items.Status !== 'Work End' ||
                  items.Status !== 'Completed'
                    ? '#FFCB00'
                    : 'white',
              },
            ]}>
            <Text style={txtSteps}>
                {label}
            </Text>
          </View>

 </View>
  )
}

export default paginate
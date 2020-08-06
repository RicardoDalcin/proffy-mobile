import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

function GiveClasses() {
  const { goBack } = useNavigation()

  const handleNavigateBack = () => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        resizeMode='contain'
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastras como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses

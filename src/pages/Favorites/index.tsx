import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites

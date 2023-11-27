import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Quran from './Quran';

const Drawer = createDrawerNavigator();


const Beranda = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Quran" component={Quran} />
        </Drawer.Navigator>
    )
}

export default Beranda

const styles = StyleSheet.create({})
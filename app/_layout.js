import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Foundation from '@expo/vector-icons/Foundation';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Página Inicial",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />
        }} />

      <Tabs.Screen 
      name="pageone" 
        options = {{ title: "Obrigatório",
          headerShown: false,
          tabBarIcon: ({ color }) => <Foundation name="alert" size={24} color={color} />
        }} />
      <Tabs.Screen 
      name="pagetwo" 
        options = {{ title: "Livre", 
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="free-breakfast" size={24} color={color} />
          
        }} />
      <Tabs.Screen 
      name="aboutme" 
        options={{ 
          title: "Sobre Mim", 
          headerShown: false, 
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />

        }} />
    </Tabs>
  )
}
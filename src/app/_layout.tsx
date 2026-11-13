import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563eb' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerTitle: 'Datos Personales',
          tabBarIcon: ({ color, size }: any) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          headerTitle: 'Formación Académica',
          tabBarIcon: ({ color, size }: any) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          headerTitle: 'Experiencia Laboral',
          tabBarIcon: ({ color, size }: any) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          headerTitle: 'Intereses y Hobbies',
          tabBarIcon: ({ color, size }: any) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TarjetaHobby from '../components/TarjetaHobby';
import { Ionicons } from '@expo/vector-icons';

export default function Hobbies() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerIcon}>
        <Ionicons name="heart" size={60} color="#e11d48" />
        <Text style={estilos.tituloPrincipal}>Pasatiempos e Intereses</Text>
      </View>

      <TarjetaHobby 
        titulo="Gaming Táctico y FPS"
        descripcionCorta="Arena Breakout Mobile y gestión de loadouts"
        icono={"gamepad-controller-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", "Me encanta jugar Arena Breakout Mobile, optimizando configuraciones tácticas y rendimiento móvil.")}
      />

      <TarjetaHobby 
        titulo="Running y Acondicionamiento"
        descripcionCorta="Rutinas de calentamiento y trote"
        icono={"fitness-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", "Práctico running y rutinas de acondicionamiento físico para mantener la disciplina y buena salud.")}
      />

      <TarjetaHobby 
        titulo="Música y Entretenimiento"
        descripcionCorta="Latin pop, bachata y batallas de rap"
        icono="musical-notes-outline"
        onPress={() => Alert.alert("Detalle de Hobby", "Disfruto escuchar música en Spotify (Sebastián Yatra, Romeo Santos) y batallas de rap friki.")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f8fafc' },
  contenido: { padding: 20 },
  headerIcon: { alignItems: 'center', marginBottom: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', marginTop: 8 }
});
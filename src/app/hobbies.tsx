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
        titulo="Gaming Táctico"
        descripcionCorta="Arena Breakout Mobile y codm"
        icono={"gamepad-controller-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", "Me encanta jugar Arena Breakout Mobile, codm y los juegos de estrategias y combate en general.")}
      />

      <TarjetaHobby 
        titulo="Amigos y Familia"
        descripcionCorta="pasar tiempo con mis amigos y familia"
        icono={"fitness-outline" as any}
        onPress={() => Alert.alert("Detalle de Hobby", " me gusta pasar tiempo con mis amiggos y familia")}
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
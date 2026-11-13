import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudios'; // <-- Corregido a singular
import { Ionicons } from '@expo/vector-icons';

export default function Estudios() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerIcon}>
        <Ionicons name="school" size={60} color="#2563eb" />
        <Text style={estilos.tituloPrincipal}>Mi Formación Académica</Text>
      </View>

      <TarjetaEstudio 
        titulo="Bachiller Académico"
        institucion="Institución Gerardo Paredes"
        anio="2025"
        enCurso={false}
      />

      <TarjetaEstudio 
        titulo="Técnico en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA"
        anio="2024 - dic 2025"
        enCurso={false}
      />

      <TarjetaEstudio 
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA (CGMLTI - Sede Calle 52)"
        anio="2026 - Presente"
        enCurso={true}
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
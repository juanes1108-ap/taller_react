import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaExperiencia from '../components/TarjetaExperiencia';
import { Ionicons } from '@expo/vector-icons';

export default function Experiencia() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.headerIcon}>
        <Ionicons name="briefcase" size={60} color="#2563eb" />
        <Text style={estilos.tituloPrincipal}>Trayectoria y Proyectos</Text>
      </View>

      <TarjetaExperiencia 
        cargo="Desarrollador Junior Full Stack"
        empresa="Proyecto ONUFAST"
        periodo="2026"
        descripcion="Desarrollo de plataforma web y móvil para micro-emprendedores con gestión de paquetes, rutas y control de base de datos."
      />

      <TarjetaExperiencia 
        cargo="Desarrollador de Software / React"
        empresa="Proyecto React Native"
        periodo="2026"
        descripcion="Creación de aplicaciones moviles con React Native, integrando funcionalidades."
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
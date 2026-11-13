import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Juan Esteban Ángulo Pérez</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtituloSeccion}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA del CGMLTI, apasionado por el desarrollo de software, bases de datos y aplicaciones móviles y web. Con habilidades en React Native, JavaScript, HTML5, Python, PostgreSQL y Git.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtituloSeccion}>Contacto y Redes</Text>
        
        <MiBoton 
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#e11d48"
          onPress={() => Alert.alert("Correo", "juan.angulo@misena.edu.co")}
        />
        
        <MiBoton 
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          onPress={() => Alert.alert("Teléfono", "Llamando al +57 312 345 6789...")}
        />

        <MiBoton 
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0284c7"
          onPress={() => Alert.alert("LinkedIn", "Abriendo perfil profesional...")}
        />

        <MiBoton 
          textoBoton="Repositorio Git"
          nombreIcono="logo-github"
          colorBoton="#334155"
          onPress={() => Alert.alert("GitHub", "https://github.com/juanes1108-ap/taller_react")}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f8fafc' },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: 'center', marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginTop: 8, textAlign: 'center' },
  profesion: { fontSize: 16, color: '#2563eb', fontWeight: '600', marginTop: 4 },
  seccion: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  subtituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: '#475569', lineHeight: 20 },
});
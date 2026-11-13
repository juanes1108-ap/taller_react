import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  titulo: string;
  descripcionCorta: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function TarjetaHobby({ titulo, descripcionCorta, icono, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icono} size={28} color="#2563eb" style={estilos.icono} />
      <View style={estilos.textoContainer}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.descripcion}>{descripcionCorta}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 1,
  },
  icono: {
    marginRight: 16,
  },
  textoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  descripcion: {
    fontSize: 13,
    color: '#64748b',
  },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({ cargo, empresa, periodo, descripcion }: Props) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>
      <Text style={estilos.empresa}>{empresa} | <Text style={estilos.periodo}>{periodo}</Text></Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    elevation: 1,
  },
  cargo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  empresa: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 6,
    fontWeight: '600',
  },
  periodo: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: 'normal',
  },
  descripcion: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
});
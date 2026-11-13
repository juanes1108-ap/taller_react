import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  titulo: string;
  institucion: string;
  anio: string;
  enCurso: boolean;
};

export default function TarjetaEstudio({ titulo, institucion, anio, enCurso }: Props) {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={estilos.cabecera}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={estilos.badgeContainer}>
            <Text style={estilos.badgeText}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    elevation: 2,
  },
  finalizado: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
  },
  enCurso: {
    backgroundColor: '#f3e8ff',
    borderColor: '#7c3aed',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  badgeContainer: {
    backgroundColor: '#7c3aed', // Fondo morado obligatorio (Reto)
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff', // Texto blanco obligatorio (Reto)
    fontWeight: 'bold',
    fontSize: 11,
  },
  subtitulo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  anio: {
    fontSize: 12,
    color: '#888',
  },
});
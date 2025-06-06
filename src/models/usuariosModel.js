const supabase = require('../config/supabaseClient');

const registrarUsuario = async (nombre, rol, materias) => {
  const { data, error } = await supabase
    .from('usuarios')
    .upsert(
      { nombre, rol, materias },
      { onConflict: 'nombre' }
    )
    .select();

  if (error) throw new Error(error.message);
  return data;
};

const obtenerUsuario = async (nombre, rol) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .ilike('nombre', nombre)
    .eq('rol', rol)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

module.exports = { registrarUsuario, obtenerUsuario };
document.getElementById('registroForm').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form.nombre.value.trim(),
      rol: form.rol.value,
      materias: form.materias.value.split(',').map(m => m.trim()).filter(Boolean)
    };
  
    try {
      const res = await fetch('/api/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      const mensaje = document.getElementById('mensajeRegistro');
      mensaje.style.color = res.ok ? 'green' : 'red';
      mensaje.textContent = res.ok ? result.mensaje : result.error;
    } catch (error) {
      console.error('Error:', error);
    }
  });
import React from 'react';

const Pages = () => {
  return (
    <>
      <h1>Dentro de la carpeta pages van las diferentes paginas de la app</h1>
      <h2>Estructura de carpetas:</h2>
      <p>Faltaria agregar la carpeta de:</p>
      <ul>
        <li>
          config, en esta carpeta ira toda la configuracion de alplicaciones externas como por
          ejemplo firebase
        </li>
        <li>
          constants, en esta carpeta iran todas las constantes como por ejemplo una url(ya que nunca
          cambia){' '}
        </li>
        <li>
          routes, carpeta para las rutas pero la configuraremos luego cuando toquemos el tema del
          ruteo con react router dom
        </li>
      </ul>
    </>
  );
};

export default Pages;

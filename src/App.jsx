import {Fragment, useState } from 'react'
import './App.css'
//import Formulario from './componets/Formulario'

function App() {
  

  return (
    <Fragment>
    <h1>Promedio de alumnos por disciplina</h1>
   
    <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>cantidad de Alumnos</th>
              <th>promedio de notas de alumnos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base de Datos</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desarrollo Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desarrollo Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
   </Fragment>
  )
}

export default App

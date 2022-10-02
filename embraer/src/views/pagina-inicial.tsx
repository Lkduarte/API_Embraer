import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react"
import Table from 'react-bootstrap/Table';
import PesquisarTabela from "./filtro";


class PaginaInicial extends Component{
    render(){
        return (
            <div className="App">

              <div>
                <h2>
                    Gerenciar informações
                </h2>
              </div>
              <PesquisarTabela/>
              <div>
              <Table bordered>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Fabricante</th>
                  <th>Motor</th>
                  <th>Peso Referencial</th>
                  <th>Quantidade de Reversores</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {PaginaInicial.filter(val=>{
                }
)}
                <tr>
                  <td>E-195</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>E-190</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>
              </div>
              <div>
                <button
                  className="rounded"
                  type="submit"
                  id="btn_calcular"
                  name="submitButton"
                >
                  <b>Registrar Aeronave</b>
                </button>
                <input hidden placeholder="register" type="text" id="registrarAeronave"/>
              </div>
              <script src="../compile/build/app.js"></script>
            </div>
          );
    }
  static filter(arg0: (val: any) => void): import("react").ReactNode {
    throw new Error("Method not implemented.");
  }
}
  
export default PaginaInicial;
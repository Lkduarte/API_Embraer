import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Calcular from "../controller/calculo";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";


function Calculo() {

  const calcular = new Calcular()

  const showError = (input: HTMLElement, message: string) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField!.classList.remove('success');
    formField!.classList.add('error');

    // show the error message
    const error = formField!.querySelector('small');
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove('error');
    formField!.classList.add('success');

    // hide the error message
    const error = formField!.querySelector('small');
    error!.textContent = '';
  }

  function manipularEnvio(evento: any) {
    evento.preventDefault()

    if (parseInt(Peso) < 20000 || parseInt(Peso) > 80000) {
      const idPeso = document.getElementById("peso-aeronave")
      return Swal.fire({
        icon: "error",
        title: "Invalid value for weight"
      })
    } else if (parseInt(Altitude) < 0 || parseInt(Altitude) > 10000) {
      return Swal.fire({
        icon: "error",
        title: "Invalid value for altitude"
      })
    } else if (parseInt(Temperatura) < -20 || parseInt(Temperatura) > 40) {
      return Swal.fire({
        icon: "error",
        title: "Invalid value for temperature"
      })
    } else if (parseInt(Vento) < -40 || parseInt(Vento) > 40) {
      return Swal.fire({
        icon: "error",
        title: "Invalid value for wind"
      })
    } else if (parseInt(Slope) < -45 || parseInt(Slope) > 45) {
      return Swal.fire({
        icon: "error",
        title: "Invalid value for slope"
      })
    } else if (parseInt(Rev) < 0 || parseInt(Rev) > 2) {
      return Swal.fire({
        icon: "error",
        title: "Invalid value for reversers"
      })
    } else {
      calcular.calcularPouso(
        parseInt(Peso),
        parseInt(Altitude),
        parseInt(Temperatura),
        parseInt(Vento),
        parseInt(Slope),
        parseInt(vap),
        parseInt(Rev),
        parseInt(unidade))
    }
  }

  function receberValorPeso(evento: any) {
    let entrada = evento.target.value;
    setPeso(entrada);
  }

  function receberValorAltitude(evento: any) {
    let entrada = evento.target.value;
    setAltitude(entrada)
  }

  function receberValorTemperatura(evento: any) {
    let entrada = evento.target.value;
    setTemperatura(entrada)
  }

  function receberValorVento(evento: any) {
    let entrada = evento.target.value;
    setVento(entrada)
  }

  function receberSlope(evento: any) {
    let entrada = evento.target.value;
    setSlope(entrada)
  }

  function receberRev(evento: any) {
    let entrada = evento.target.value;
    setRev(entrada)
  }

  function receberUnidade(evento: any) {
    let entrada = evento.target.value;
    setUnidade(entrada)
  }

  function receberResultado(evento: any) {
    let entrada = evento.target.value;
    setResultadoCalculo(entrada)
  }


const [Peso, setPeso] = useState("");
const [Altitude, setAltitude] = useState("");
const [Temperatura, setTemperatura] = useState("");
const [Vento, setVento] = useState("");
const [Slope, setSlope] = useState("")
const [vap, setVap] = useState("")
const [Rev, setRev] = useState("")
const [unidade, setUnidade] = useState("")
const [resultadoCalculo, setResultadoCalculo] = useState("")

// Axios.post("http://localhost:3002/calculo", {
//   aeronave: 'E190',
//   motor: 'EBR1300',
//   certificacao: 'ANAC',
//   flap: 'Flap x with ice accretion',
//   condicaoPista: 'dry',
//   tipoFrenagem: 'MAX MAN',
//   pesoPouso: Peso,
//   altitude: Altitude,
//   temperatura: Temperatura,
//   vento: Vento,
//   inclinacao: Slope,
//   overspeed: vap,
//   reversoresInoperantes: Rev,
//   dataCalculo: Date.now.toString(),
//   resultado_calculo: resultadoCalculo
// });

return (
  <div className="App">
    <div>
      <i>
        <img className="logoAviaoCalculo" src="loguinho.png" id="logoAviaozinho" alt="some text" />
      </i>
    </div>
    <form id="form_criar" onSubmit={manipularEnvio}>
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <h3 id="h3Calcular" className="card-title">Landing Calculation</h3>
          <div className="card-toolbar">
          </div>
        </div>

        <div className="card-body col-md-12">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                <h4 id="h3AirplaneConfig">Airplane Configurations</h4>
                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Airplane:</label>
                  <select className="form-control select" id="aeronave" title="aeronave">
                    <option value="" disabled selected>Select an Airplane</option>
                    <option value="E-190">E-190</option>
                    <option value="Legacy C780">Legacy C780</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Motor:</label>
                  <select className="form-control select" id="motor" title="motor">
                    <option value="" disabled selected>Select a motor</option>
                    <option>E-190 Motor</option>
                    <option>Legacy C780 Motor</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Certification:</label>
                  <select className="form-control select" id="certificacao" title="certificacao">
                    <option value="" disabled selected>Select a Certification</option>
                    <option>ANAC</option>
                    <option>FAA</option>
                    <option>EASA</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Flap:</label>
                  <select className="form-control select" id="flap" title="flap">
                    <option value="" disabled selected>Select a Flap</option>
                    <option>Flap X Without Ice Accretion</option>
                    <option>Flap X With Ice Accretion</option>
                    <option>Flap Y Without Ice Accretion </option>
                    <option>Flap Y With Ice Accretion </option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Runway Condition:</label>
                  <select className="form-control select" id="condicaoPista" title="condicaoPista">
                    <option value="" disabled selected>Select a Runway Condition</option>
                    <option>1 - Ice</option>
                    <option>2 - Standind Water, Slush</option>
                    <option>3 - Loose Snow</option>
                    <option>4 - Compact Snow</option>
                    <option>5 - Wet</option>
                    <option>6 - Dry</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Brake Configuration:</label>
                  <select
                    title="frenagem"
                    className="form-control select"
                    name="frenagem"
                    id="frenagem"
                  >
                    <option value="" disabled selected>
                      Select a Break Configuration:
                    </option>
                    <option value="0">LOW</option>
                    <option value="1">MEDIUM</option>
                    <option value="2">HIGH</option>
                    <option value="3">MAX MAN</option>
                  </select>
                  <small></small>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <h4 id="h3AirplaneConfig">Landing Configurations</h4>
                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Landing Weight (Kg):</label>
                  <input
                    id="peso-aeronave"
                    className="form-control"
                    name="peso"
                    type="tel"
                    placeholder="Enter Landing Weight:"
                    value={Peso}
                    onChange={receberValorPeso}
                  />
                  <small></small>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Aircraft Altitude (Ft):</label>
                  <input
                    id="altitude-aeronave"
                    className="form-control"
                    type="tel"
                    name="altitude"
                    placeholder="Enter Aircraft Altitude:"
                    value={Altitude}
                    onChange={receberValorAltitude}
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Temperature ISA (°C):</label>
                  <input
                    id="temperatura"
                    className="form-control"
                    name="temperatura"
                    type="tel"
                    placeholder="Enter Temperature below or above ISA:"
                    value={Temperatura}
                    onChange={receberValorTemperatura}
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Wind (Kt):</label>
                  <input
                    id="valorVento"
                    className="form-control"
                    type="tel"
                    name="valorVento"
                    placeholder="Enter Tailwind or Headwind"
                    value={Vento}
                    onChange={receberValorVento}
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Slope:</label>
                  <input
                    id="slope"
                    className="form-control"
                    name="slope"
                    type="tel"
                    placeholder="Enter Uphill or Downhill Slope:"
                    value={Slope}
                    onChange={receberSlope}
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Vap Overspeed (Km/h):</label>
                  <input
                    id="vap-aeronave"
                    className="form-control"
                    type="tel"
                    placeholder="Enter Overspeed:"
                    value={vap}
                    onChange={(e) => setVap(e.target.value)}
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Thrust Reverser:</label>
                  <select className="form-control select" id="rev-inoperantes" title="rev-inoperantes" onChange={receberRev}>
                    <option value="" disabled selected>Select a Reverser Option</option>
                    <option value="1">One Inoperative</option>
                    <option value="2">All Inoperative</option>
                    <option value="0">All Operative</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                  <label>Unit Measurement:</label>
                  <select title="unidade" className="form-control select" name="unidade" onChange={receberUnidade} id="unidade">
                    <option value="placeholder" disabled selected>Select an Unite Measurement</option>
                    <option value="0">International</option>
                    <option value="1">Imperial</option>
                  </select>
                  <small></small>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="card-footer w-100 float-right">

          <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000">
            <b>Return</b>
          </a>

          <button
            title="btn_calcular"
            className="rounded btn btn-primary ml-2 float-end"
            type="submit"
            id="btn_calcular"
            name="submitButton"
          ><b>Calculate</b>
          </button>
        </div>
      </div>
    </form>
    <div>
      <input hidden placeholder="result" type="text" id="resultadoConta" value={resultadoCalculo} onChange={receberResultado} />
    </div>
  </div>
);
}

export default Calculo;

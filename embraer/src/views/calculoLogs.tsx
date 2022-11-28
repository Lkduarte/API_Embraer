import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from "semantic-ui-react";

type Log = {
  id: number,
  aeronave_id: string,
  motor: string,
  certificacao: string,
  flap: string,
  condicaoPista: string,
  tipoFrenagem: number,
  pesoPouso: string,
  altitude: string,
  temperatura: string,
  vento: string,
  inclinacao: string,
  overspeed: string,
  reversoresInoperantes: string,
  dataCalculo: string,
  resultado_calculo: string,
  usuario: string
}

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [logs, setLogs] = useState<Log[]>([]);
  const [logFiltrado, setLogFiltrado] = useState<Log[]>([]);
  const [searchInput, setsearchInput] = useState("");
  const [resultadoFiltrado, setresultadoFiltrado] = useState<Log[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/getLogs')
      .then((response) => {
        const data = response.data;
        console.log("useEffect 1 Rodou");
        setLogs(data);
        console.log(data); // returns '[]'
      });
  }, []);

  const listaLogs = () => {
    const logs = axios
      .get('http://localhost:3002/getLogs')
      .then((response) => {
        const data = response.data;
        console.log("useEffect 1 Rodou");
        setLogs(data);
        console.log(data); // returns '[]'
      });
    return logs;
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const searchItems = (searchValue) => {
    setsearchInput(searchValue);
    if (searchInput !== "") {
      const logFiltrado = logs.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setLogs(logFiltrado);
    } else {
      listaLogs();
    }
  };

  return (
    <div>
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <h3 id="h3Calcular" className="card-title">Landing logs</h3>
          <div className="card-body col-md-12">
            <div>
              <Input
                icon="search"
                placeholder="Search"
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                User
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Airplane
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Landing Date
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Result
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        {logs.map((resultadoFiltrado) => (
          <Accordion expanded={expanded === `${resultadoFiltrado.id}`} onChange={handleChange(`${resultadoFiltrado.id}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '28%', flexShrink: 0, color: 'text.secondary' }}>
                {resultadoFiltrado.usuario}
              </Typography>
              <Typography sx={{ width: '38%', color: 'text.secondary' }}>
                {resultadoFiltrado.aeronave_id}
              </Typography>
              <Typography sx={{ width: '32%', color: 'text.secondary' }}>
                {resultadoFiltrado.dataCalculo}
              </Typography>
              <Typography sx={{ width: '27%', color: 'text.secondary' }}>
                {resultadoFiltrado.resultado_calculo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Details:
              <Typography>
                <form id="form_criar">
                  <div className="card-body col-md-12">
                    <div className="row">
                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Landing Weight (Kg):</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.pesoPouso}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Aircraft Altitude (Ft):</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.altitude}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Temperature ISA (°C):</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.temperatura}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Wind (Kt):</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.vento}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Slope:</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.inclinacao}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                        <label>Vap Overspeed (Kt):</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.overspeed}
                        </Typography>
                      </div>

                      <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                        <label>Thrust Reverser:</label>
                        <Typography sx={{ width: '28%', flexShrink: 0 }} display="inline">
                          {" " + resultadoFiltrado.reversoresInoperantes}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </form>
              </Typography>


            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

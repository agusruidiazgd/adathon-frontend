import React,{useState, useEffect} from 'react';
import './Pages.scss';
import Table from '../Componentes/Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Componentes/Button/Button';
import {getData, postData} from '../Services/services';

const CargaGastos = () => {

    const [costos, setCostos] = useState([]);
    const [nombreCosto, setNombreCosto] = useState("");
    const [fecha, setFecha] = useState("2020-12-01");
    const [monto, setMonto] = useState(0);
    const [esHogar, setHogar] = useState(1);

    const tituloTablaCosto = [
        "Fuente costo",
        "Concepto",
        "Fecha",
        "Monto"
    ]

    const titulosCostosFijos = [
        "Monotributo",
        "Viaticos",
        "Telefono",
        "Publicidad",
        "Alquiler",
        "Servicios",
        "Costo canal de venta online"
    ]

    useEffect(() => {
        const promise = getData('costoFijo');
        promise.then(data => { 
            setCostos(data);
        });
    }, []);


    const addCosto = () =>{
        const newCosto = {
            "usuarioId": 1,
            "fecha": fecha,
            "nombre": nombreCosto,
            "monto": monto,
            "esHogar": esHogar
        }
                
        if(newCosto.nombre === "" || newCosto.monto === "") {
            return alert("Error: Ingresar un costo y monto valido por favor")
        }else{
            postData('costoFijo', newCosto)
            .then(res => {
                const newList = [...costos];
                newList.push(newCosto);
                setCostos(newList);
            }).catch(err => alert("ERROR! post producto"));
            setNombreCosto(""); 
            setFecha("2020-12"); 
            setMonto(0);
            setHogar(1);
        }
    }

    const changeNombre = (event) => {
        setNombreCosto(event.target.options[event.target.selectedIndex].text);
    }
    const changeMonto = (event) => setMonto(event.target.value); 
    const changeFecha = (event) => setFecha(event.target.value); 
    const changeHogar = (event) => {
        setHogar(Number(event.target.value))
    }

    console.log(costos);
    return(
        <section className="cga-producto-container">
            <div className="cga-producto-content1">
                <FontAwesomeIcon icon={faChevronDown} className='faChevron' / >
                <h2 className="cga-producto-h2">Fuente del Costo:</h2>
                <label for="Name" className='cga-producto-label'>Negocio
                    <input 
                        type="radio" 
                        id="negocio" 
                        name="fuente-costo"
                        className='content3-input'
                        value={0}
                        onClick={changeHogar}
                        checked={!esHogar}
                    ></input>
                </label>
                <label for="Name" className='cga-producto-label'>Hogar
                    <input 
                        type="radio" 
                        id="hogar" 
                        name="fuente-costo"
                        className='content3-input'
                        value={1}
                        onClick={changeHogar}
                        checked={esHogar}
                    ></input>
                </label>
            </div>
            <div className="cga-producto-content1">
                <h2 className="cga-producto-h2">Cargar costo fijo</h2>
            </div>

            <div className='cga-producto-content2'>

                <label for="Name" className='cga-producto-label'>Concepto
                <select id="lista-productos" className='content2-input' onChange={changeNombre}>
                    <option value="Concepto" enabled selected>Elegir Costo</option>
                    {
                        titulosCostosFijos.map(prod =>{
                            return(
                                <option value={prod}>{prod}</option>
                            )
                        })
                    }
                </select>
                </label>
            </div>

            <div className='cga-producto-content3'>
                <label for="Name" className='cga-producto-label'>Fecha
                    <input 
                        type="date" 
                        id="content3-input" 
                        className='select-h3' 
                        defaultValue={fecha}
                        value={fecha}
                        onChange={changeFecha}
                    ></input>
                </label>

                <label for="Name" className='cga-producto-label'>Monto
                <input 
                    type="number" 
                    id="content3-input" 
                    placeholder="$" 
                    className='content3-input'
                    value={monto}
                    onChange={changeMonto}
                ></input>
                </label>

            </div>
            

            <div className='cga-producto-content-button'>
                <Button text='Cargar' tamaño='chico' color='violeta' onClick={addCosto} />
            </div>

            <div className="cga-producto-content-lista">
                <h2 className="lista-h2">Lista de Productos</h2>
                <FontAwesomeIcon icon={faPencilAlt} className='faPencil' / >
                <FontAwesomeIcon icon={faTrash} className='faPencil' / >
            </div>

            <div className="cga-producto-table">
                <Table costos={costos} titulos={tituloTablaCosto}/> 
            </div>

        </section>
    )
}

export default CargaGastos;

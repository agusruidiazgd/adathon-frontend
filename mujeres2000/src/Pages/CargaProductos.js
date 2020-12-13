import React,{useState, useEffect} from 'react';
import './Pages.scss';
import Table from '../Componentes/Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Componentes/Button/Button';
import {getData, postData} from '../Services/services';


const CargaProductos = () => {

    const [productos, setProductos] = useState([]);
    const [nombreProducto, setNombreProducto] = useState("");
    const [nombrePrecio, setPrecio] = useState(0);
    const [costoVariable, setCostoVariable] = useState(0);

    const tituloTabla = [
        "Producto",
        "Concepto",
        "Precio",
        "Costo"
    ]
    useEffect(() => {
        const promise = getData('productos');
        promise.then(data => { 
            setProductos(data);
            
        });
    }, []);

    const addProducto = () =>{
        const newProducto = {   
            "nombre": nombreProducto,
            "precio": Number(Number(nombrePrecio).toFixed(2)),
            "costoVariable": Number(Number(costoVariable).toFixed(2))
        };

        if(newProducto.nombre === "" || newProducto.precio === "") {
            return alert("Error: Ingresar nombre y precio por favor")
        }else{
            postData('productos', newProducto)
            .then(res => {
                const newList = [...productos];
                newList.push(newProducto);
                setProductos(newList);
            }).catch(err => alert("ERROR! post producto"));
            setNombreProducto(""); 
            setPrecio(0); 
            setCostoVariable(0);
        }
    }

    const changeNombre = (event) => setNombreProducto(event.target.value); 
    const changePrecio = (event) => setPrecio(event.target.value); 
    const changeCosto = (event) => setCostoVariable(event.target.value); 

    console.log(productos);
    return(
        <section className="cga-producto-container">
            <div className="cga-producto-content1">
                <FontAwesomeIcon icon={faChevronDown} className='faChevron' / >
                <h2 className="cga-producto-h2">Cargar Producto</h2>
            </div>

            <div className='cga-producto-content2'>
                <label for="Name" className='cga-producto-label'>Concepto
                    <input 
                        type="text" 
                        id="content2-input" 
                        className='content2-input'
                        value={nombreProducto}
                        onChange={changeNombre}
                        ></input>
                </label>
            </div>

            <div className='cga-producto-content3'>
                <label for="Name" className='cga-producto-label'>Precio
                    <input 
                        type="number" 
                        id="content3-input" 
                        className='content3-input' 
                        placeholder="$"
                        value={nombrePrecio}
                        onChange={changePrecio}
                    ></input>
                </label>
                <label for="Name" className='cga-producto-label'>Costo
                    <input 
                        type="number" 
                        id="content3-input" 
                        placeholder="$" 
                        className='content3-input'
                        value={costoVariable}
                        onChange={changeCosto}
                    ></input>
                </label>
            </div>

            <div className='cga-producto-content-button'>
                <Button text='Cargar Producto' tamaño='chico' color='naranja' onClick={addProducto}/>
            </div>

            <div className="cga-producto-content-lista">
                <h2 className="lista-h2">Lista de Productos</h2>
                <FontAwesomeIcon icon={faPencilAlt} className='faPencil' / >
                <FontAwesomeIcon icon={faTrash} className='faPencil' / >
            </div>

            <div className="cga-producto-table">

                <Table productos={productos} titulos={tituloTabla}/> 

            </div>

        </section>
    )
}

export default CargaProductos;

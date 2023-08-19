const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarProductoPage = ()=>{

    let { id } = useParams();
    const [producto, setProducto] = useState({})
    

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/productos/'+id
        }).done((response)=>setProducto(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/productos/'+id,
            entity: producto,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Producto</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br/>
                <input type="text" id="nombre" name="nombre" value={producto.nombre} onChange={(e)=>setProducto({...producto, nombre: e.target.value})} /> <br/>
                <label>Precio</label> <br/>
                <input type="number" id="precio" name="precio" value={producto.precio} onChange={(e)=>setProducto({...producto, precio: e.target.value})}  /> <br/>
        
                <input type="submit" value="Editar Producto" /> <br/>
                <Link to="/">Volver</Link>
            </form>

        </>
    )
}

module.exports = EditarProductoPage
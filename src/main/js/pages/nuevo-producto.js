const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');

const NuevoProductoPage = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {nombre: nombre, precio: precio},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={eNombre=>setNombre(eNombre.target.value)} /> <br />
            <label>Precio</label> <br />
            <input type="number" id='precio' name='precio' onChange={ePrecio=>setPrecio(ePrecio.target.value)} /> <br />
            <input type="submit" value="Nuevo Producto" /> <br />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoProductoPage;
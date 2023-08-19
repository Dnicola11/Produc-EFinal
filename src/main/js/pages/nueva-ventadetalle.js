const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevaVentaDetallePage = () => {

    let { id } = useParams();

    const [ventas, setVentas] = useState([])
    const [productos, setProductos] = useState([])

    const [idVenta, setIdVenta] = useState('')
    const [idProducto, setIdProducto] = useState('')
    const [cantidad, setCantidad] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventadetalles',
            entity: {
                venta: 'http://localhost:8080/api/ventas/'+idVenta,
                producto: 'http://localhost:8080/api/productos/'+idProducto,
                cantidad: cantidad},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas'
        }).done(response=>{
            setVentas(response.entity._embedded.ventas)
        })
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            setProductos(response.entity._embedded.productos)
        })

    },[])

    return (
        <>
            <h1>Nueva Venta Detalle</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='venta'>Venta </label>
                <select name="venta" id="venta" onChange={(e)=>{setIdVenta(e.target.value)}}>
                    {ventas.map(venta => {	
                        const value = venta._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{venta.total}]</option>
                        )
                    })}
                </select><br />
                
                <label>Producto </label>
                <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}}>
                    {productos.map(producto => {	
                        const value = producto._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({producto.nombre})</option>
                        )
                    })}
                </select><br />
                <label>Cantidad</label>
                <input type="number" id='cantidad' name='cantidad' onChange={e=>setCantidad(e.target.value)} /> <br />

                <input type="submit" value="Nueva VentaDetalle" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaVentaDetallePage;
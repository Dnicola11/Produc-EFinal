const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect } = require('react');
const client = require('../client');

const VerVentaPage = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [ventadetalles, setVentaDetalles] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventas/' + id
        }).done(response=>setVenta(response.entity))
        client({
            method: 'GET',
            path: '/api/ventadetalles/' + id + '/informacion'
        }).done(response => setVentaDetalles(response.entity))
    }, [])

    return (
        <>
            <h1>Ver Venta</h1>
            <hr />

            <table border="1">
            <tbody>
                <tr>
                    <th>Total</th>
                    <td>{venta.total}</td>
                </tr>
            </tbody>
            </table>
            <hr />

            <h2>Informacion</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Venta</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>

                    {ventadetalles.map(ventadetalle=>{
                        return(
                            <tr key={ventadetalle.ID}>
                                <td>{ventadetalle.PRODUCTO}</td>
                                <td>{ventadetalle.VENTA}</td>
                                <td>{ventadetalle.CANTIDAD}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={'/ver-venta/${id}/nueva-ventadetalle'}>Nueva VentaDetalle</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVentaPage;
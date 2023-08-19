const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');


const HomePage = require('./pages/home');
const VerProductoPage = require('./pages/ver-producto');
const NuevoProductoPage = require('./pages/nuevo-producto');
const NuevaVentaPage = require('./pages/nueva-venta');
const VerVentaPage = require('./pages/ver-venta');
const NuevaVentaDetallePage = require('./pages/nueva-ventadetalle');
const EditarProductoPage = require('./pages/editar-producto');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-producto/:id', element: <VerProductoPage /> },
	{ path: '/nuevo-producto', element: <NuevoProductoPage /> },
	{ path: '/nueva-venta', element: <NuevaVentaPage /> },
	{ path: '/ver-venta/:id', element: <VerVentaPage /> },
	{ path: '/ver-venta/:id/nueva-ventadetalle', element: <NuevaVentaDetallePage /> },
	{ path: '/nueva-ventadetalle', element: <NuevaVentaDetallePage /> },
	{ path: '/editar-producto/:id', element: <EditarProductoPage /> },
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
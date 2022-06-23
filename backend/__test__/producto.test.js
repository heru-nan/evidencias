const servicios = require('../server/bodega/producto');
const prodServicios = new servicios.productoServicios();


describe('este es mi caso de prueba', ()=> {
    test('servicio getProductos', async () => {
        const cantProductos = await prodServicios.getProductos();
        expect(cantProductos).toBe(10);
    });

    test('servicio getProductosPorCategoria perecibles', async () => {
        const cantProductos = await prodServicios.getProductosPorCategoria('1');
        expect(cantProductos).toBe(2);
    })

    test('servicio getAlertaLimite', async () => {
        const alertas = await prodServicios.getAlertaLimite();
        expect(alertas).toStrictEqual([{"id":"1", "alerta": "10"}, {"id":"4", "alerta":"30"}]);
    })
})
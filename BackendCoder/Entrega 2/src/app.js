import express from 'express';

const PORT = 8080;

const app = express();

const productsManager = new ProductManager()

app.get('/bienvenida', async (req,res)=>{

    const products = await productsManager.getProducts()
    res.send({products})

    res.send(`<h1 style="color:blue;">Bienvenido a mi servidor!</h1>`)

})

app.get('/usuario', (req,res)=>{
    
    res.json({
        nombre:"Miguel",
        apellido:"Perez",
        edad:30,
        correo:"correoDeMiguel@correo.com"
    })

})

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})
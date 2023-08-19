const http = require("http");
const HOST = "localhost";
const PORT = 3000;

const coches=[
    {marca:"ford",anio:2020},
    {marca:"fiat",anio:2023},
    {marca:"chevrolet",anio:2000},
]
const server = http.createServer((request, response) => {
    //console.log(request.url);
    //console.log(request.method);
    if (request.url === "/ejemplo/texto") {
        response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
        response.end("Hola Mundo. Esto es programación backendk");
    }else if (request.url === "/ejemplo/html") {
        response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        response.end("<h1>Hola Mundo.</h1><p> Esto es programación backendk</p>")
    }else if (request.url === "/ejemplo/json") {
        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify(coches, null, "\t"));
    } else {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Recurso no encontrado");
    }
}
);
server.on("request",(request)=>{
     console.log(request.url);
});
server.listen(PORT, HOST, () => console.log(`El servidor se esta ejecutando en el puerto 3000 en el http://${HOST}:${PORT}`));
//finalizado
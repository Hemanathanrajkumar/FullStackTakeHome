import http from 'http';
import app from './app';
let server: any;
let port: number = 3001;

server = http.createServer({}, app).listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})
import http from 'http';

const products = [
  { name: 'Notebook', price: 3500 },
  { name: 'Smartphone', price: 2500 },
  { name: 'Monitor', price: 800 },
  { name: 'Teclado', price: 120 },
  { name: 'Mouse', price: 80 }
];

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Not found' }));
});

export default app;

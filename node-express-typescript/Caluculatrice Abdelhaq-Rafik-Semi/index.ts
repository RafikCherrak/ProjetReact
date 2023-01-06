import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import HandleErrors from './midleware/HandleErrors';
dotenv.config();

const app: Express = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/page.html'));
});

app.use(HandleErrors());


app.post("/", function (req, res) {
  var num1: number = Number(req.body.n1);
  var num2: number = Number(req.body.n2);
  var result: number;
  if (req.body.op == "+") {
    result = num1 + num2;
    res.send("The result " + result);
  }
  if (req.body.op == "-") {
    result = num1 - num2;
    res.send("The result " + result);
  }
  if (req.body.op == "*") {
    result = num1 * num2;
    res.send("The result " + result);
  }

  if (req.body.op == "/") {
    result = num1 / num2;
    res.send("The result " + result);
  }
  if (req.body.op == "%") {
    result = num1 % num2;
    res.send("The result " + result);
  }
  // if (req.body.op != "*" || req.body.op != "/" || req.body.op != "+" || req.body.op != "-") {
  //   res.send(" THERE IS NO OP AS " + req.body.op);
  // }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



import express from 'express';


// note the type definitions here and returns void
const logger = (req: express.Request, res: express.Response, next: Function):
  void => {
  let url = req.url;
  console.log(`${url} was visited`);
  next();
}

export default logger;
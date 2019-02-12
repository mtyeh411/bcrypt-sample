import bcrypt from 'bcryptjs';
import { Router } from 'express';

export default () => {
  let router = Router();

  router.get('/', (req, res) => {
    const value = req.query.value;

    if(value) {
      const salt = bcrypt.genSaltSync(10);
      let encrypted_value = bcrypt.hashSync(value, salt);
      res.json({ value, encrypted_value });
    } else {
      let error = 'Please provide a value to encrypt';
      res.json({ error });
    }
  })

  return router;
}

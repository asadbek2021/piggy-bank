import { Router } from 'express';
import Currency from 'currency-formatter';
const router = Router();

router.get('/', (req,res)=>{
    const currencies = Currency.currencies;
    res.send(currencies);
});

export default router;

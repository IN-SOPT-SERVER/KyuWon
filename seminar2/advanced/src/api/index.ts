import express, { Router } from "express";
import APIrouter from '../router/index';
const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use('/', APIrouter) // APIrouter 를 통해 router/index.ts 로 이동

module.exports = router; 
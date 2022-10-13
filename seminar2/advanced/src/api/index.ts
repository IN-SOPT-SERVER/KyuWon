import express, { Router } from "express";
import APIrouter from '../router/index';
const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

//! 여기에서의 get은 endpoint로 잡히지 않습니다.
// APIrouter를 타고 get에서 endpoint로 잡히네요?
router.get("/", (req, res) => {
    return res.status(200).send("api 진입 성공. 얘는 endpoint로 잡히지 않네요")
})

//* 1. router.get
// endpoint를 잡아주며 members의 경우 routing 사용하지 않았습니다. 바로 api/members.ts로 이동합니다.
router.get("/members", require('./members'));

//* 2. router.use
// endpoint로 잡히지 않고 라우팅을 해줍니다. router 폴더의 index.ts로 이동합니다.
router.use('/', APIrouter)

module.exports = router; 
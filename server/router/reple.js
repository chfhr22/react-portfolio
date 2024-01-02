const express = require("express");
const router = express.Router();

const { Counter } = require("../model/Counter.js");
const { Reple } = require("../model/Reple.js");

router.post("/write", (req, res) => {
    let temp = {
        author: req.body.author,
        password: req.body.password,
        content: req.body.content,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.repleNum = counter.repleNum; 

            const RepleWrite = new Reple(temp);
            RepleWrite
                .save()
                .then(() => {
                    Counter.updateOne({ name: "counter" }, { $inc: { repleNum: 1 } }).then(() => {
                        res.status(200).json({ success: true });
                    })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

router.post("/getReple", (req, res) => {
    Reple.find()
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, repleList: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

router.post("/modify", (req, res) => {
    let temp = {
        content: req.body.content,
        repleId: req.body.repleId
    }
    Reple.updateOne({ repleNum: Number(req.body.repleNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

router.post("/delete", (req, res) => {
    Reple.deleteOne({ _id: req.body.repleId })
      .exec()
      .then((reple) => {
        if (reple.password === req.body.password) {
            res.status(200).json({ success: true });
        } else {
            return res.status(400).json({ success: false, message: "비밀번호가 일치하지 않습니다." });
        }}
    )});

module.exports = router;
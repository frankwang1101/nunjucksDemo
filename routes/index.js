var express = require('express');
var router = express.Router();
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const path = require('path')
const fs = require('fs')

/* GET home page. */
router.post('/receive', function (req, res, next) {
    try{
        let data = req.body.params;
        let json = JSON.parse(data);
        let read = gulp.src(['templates/combine.html'])
            .pipe($.nunjucks.compile(json))
            .pipe(gulp.dest('dist'))
            .pipe($.size());
        //pipe 和 express 或者 fs 的writestream 结合？
        read.on("finish", function () {
            console.log('finish')
            res.json({ success: true });
        });
    }catch(e){
        // console.log(e)
    }
});

router.get('/download', function (req, res, next) {
    try {
        let fileName = req.query.filename;
        let currFile = path.join(__dirname, '../dist/combine.html');
        let fReadStream;
        fs.exists(currFile, function (exist) {
            if (exist) {
                res.set({
                    "Content-type": "application/octet-stream",
                    "Content-Disposition": "attachment;filename=" + encodeURI(fileName)
                });
                fReadStream = fs.createReadStream(currFile);
                fReadStream.on("data", (chunk) => res.write(chunk, "binary"));
                fReadStream.on("end", function () {
                    res.end();
                });
            } else {
                res.set("Content-type", "text/html");
                res.send("file not exist!");
                res.end();
            }
        })
    } catch (e) {
        console.log(e)
    }

});


module.exports = router;

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()



gulp.task('html', () => {
    const data = {
        "data": [
            {
                "key": "Name",
                "value": "名称",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 0,
                "rule": "[{max:100, required: true}]"
            },
            {
                "key": "Email_Sender",
                "value": "发送人标题",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 1,
                "rule": "[{max:255, required: true}]"
            },
            {
                "key": "Email_Name",
                "value": "Email地址",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 2,
                "rule": "[{max:100, required: true, type: 'email'}]"
            },
            {
                "key": "Email_Pwd",
                "value": "Email密码",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 3,
                "rule": ""
            },
            {
                "key": "Pwd_Key",
                "value": "加密盐值",
                "type": "input",
                "show": false,
                "isAdd": false,
                "seq": 4,
                "rule": ""
            },
            {
                "key": "Smtp_Server",
                "value": "邮件服务器",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 5,
                "rule": ""
            },
            {
                "key": "Smtp_Port",
                "value": "端口",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 6,
                "rule": "[{max:100, required: true}]"
            },
            {
                "key": "Remark",
                "value": "备注",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 7,
                "rule": "[{max:4000, required: true}]"
            },
            {
                "key": "Insert_UserId",
                "value": "创建用户",
                "type": "input",
                "show": false,
                "isAdd": false,
                "seq": 8,
                "rule": ""
            },
            {
                "key": "Insert_Time",
                "value": "创建时间",
                "type": "input",
                "show": false,
                "isAdd": false,
                "seq": 9,
                "rule": ""
            },
            {
                "key": "Update_UserId",
                "value": "最后更新用户",
                "type": "input",
                "show": false,
                "isAdd": false,
                "seq": 10,
                "rule": ""
            },
            {
                "key": "Update_Time",
                "value": "最后更新时间",
                "type": "input",
                "show": false,
                "isAdd": false,
                "seq": 11,
                "rule": ""
            }],
        "addData": [
            {
                "key": "Name",
                "value": "名称",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 0,
                "rule": "[{max:100, required: true}]"
            },
            {
                "key": "Email_Sender",
                "value": "发送人标题",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 1,
                "rule": "[{max:255, required: true}]"
            },
            {
                "key": "Email_Name",
                "value": "Email地址",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 2,
                "rule": "[{max:100, required: true, type: 'email'}]"
            },
            {
                "key": "Email_Pwd",
                "value": "Email密码",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 3,
                "rule": ""
            },
            {
                "key": "Smtp_Server",
                "value": "邮件服务器",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 5,
                "rule": ""
            },
            {
                "key": "Smtp_Port",
                "value": "端口",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 6,
                "rule": "[{max:100, required: true}]"
            },
            {
                "key": "Remark",
                "value": "备注",
                "type": "input",
                "show": false,
                "isAdd": true,
                "seq": 7,
                "rule": "[{max:4000, required: true}]"
            }],
        checked: true,
        isPage: true,
        chooseIdx: '[1,2,3]',
        col: true
    };
     let k = gulp.src(['templates/combine.html'])
        .pipe($.nunjucks.compile(data))
        .pipe(gulp.dest('dist'))
        .pipe($.size())
        k.on('finish', function(e){
            console.log('finish')
        })
    return k;
})
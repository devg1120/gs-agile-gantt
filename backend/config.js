const config = {
    cors: {
        //origin: 'http://localhost:3000', //アクセス許可するオリジン
        origin: 'http://127.0.0.1:3000', //アクセス許可するオリジン
        credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
        optionsSuccessStatus: 200 //レスポンスstatusを200に設定
    }    
}
module.exports = config

<script>
var API = (process.env.NODE_ENV === 'production') ? 'http://localhost:8080' : '/api'
var HOST = 'http://localhost:8080'
var ROOMS = [] // 該使用者的聊天室名單
var MEMBERS = [] // 所有使用者名單
var ONLINE = []
var RECIPIENT = '' // 私聊接收者
var CHATROOM = 'test'
var USER = '123'
var PRIVATION = 'false'
var CONN

//取得聊天室ＩＤ	
var url = new URL(location.href)
// CHATROOM = location.pathname.replace("/chat/", "")
CHATROOM = 'main'

//取得使用者ＩＤ
USER = url.searchParams.get('user')

//取得私訊與否
PRIVATION = url.searchParams.get('private')

export default {
  API,
  HOST,
  ROOMS,
  MEMBERS,
  ONLINE,
  RECIPIENT,
  CHATROOM,
  USER,
  PRIVATION,
  CONN
}
</script>

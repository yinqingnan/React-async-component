import Mock from 'mockjs'
const userSet = [
  { username: '754417575@qq.com', password: '123456' }
]
// 用mock模拟一个'/userlogin/login'的post请求，请求参数从req.body得到
Mock.mock('/userLogin/login', 'post', (res: any) => {
  // 解析请求体，前端传的可能是JSON字符串
  const body = JSON.parse(res.body)
  const username = body.username
  const password = body.password
  // 遍历模拟数据，检查该用户是否存在，并比对密码
  for (const user of userSet) {
    if (user.username === username) {
      if (user.password !== password) {
        return '密码错误'
      } else {
        return '登录成功'
      }
    }
  }
  // 用户不存在
  return '用户不存在'
})
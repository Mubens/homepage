import './css/style.less'

const p: Promise<string> = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle('ok')
  }, 1000)
})

p.then((res) => {
  console.log(res)
}).catch((err) => {
  console.error(err)
})

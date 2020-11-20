; ((document) => {
  //获取元素 
  let inputBar = document.querySelector('#search-bar') //搜索框
  let searchList = document.querySelector(".search-list")
  let dlApp = document.querySelector('#dl-app') //下载APP
  let scanToDl = document.querySelector(".scan-todl")


  // 显示下载APP 二维码
  dlApp.addEventListener('mouseover', (e) => {
    scanToDl.style.display = 'block'
  })
  dlApp.addEventListener('mouseleave', () => {
    scanToDl.style.display = 'none'
  })
  scanToDl.addEventListener('mouseover', () => {
    scanToDl.style.display = 'block'
  })
  scanToDl.addEventListener('mouseleave', () => {
    scanToDl.style.display = 'none'
  })
  inputBar.addEventListener('click', (e) => {
    if (e.target.value.trim() === '') {
      searchList.style.display = 'block'
    }
  })
  // inputBar.addEventListener('change', (e) => {
  //   while (e.target.value === '') {
  //     searchList.style.display = 'none'
  //   }
  // })
  inputBar.addEventListener('blur', () => {
    searchList.style.display = 'none'
  })
})(document);
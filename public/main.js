// getPAGE.onclick = () =>{
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET','/page2.json')
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status >=200 && xhr.status < 300){
//                 //console.log(xhr.response)
//                 const array = JSON.parse(xhr.response)
//                 array.forEach(item=>{
//                     const li = document.createElement('li')
//                     li.textContent = item.id
//                     ul.appendChild(li)
//                 })
//             }
//         }
//     }
//     xhr.send()
// }


let n = 1
getPAGE.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET',`/page${n+1}.json`)
    // n += 1 自己想的办法每次点击 就请求page2 page3依次递增  不要使用这个代码！
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status >=200 && xhr.status < 300){
                //console.log(xhr.response)
                const array = JSON.parse(xhr.response)
                const li = array.map(item=>`<li>${item.id}</li>`).join('')
                ul.innerHTML += li
               n += 1 //写在第二个if语句里是因为 当2个if语句满足条件才执行n+=1  
            }
        }
    }
    xhr.send()
}




getJSON.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/5.json')
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
           if(xhr.status>=200 && xhr.status<300){
              console.log(xhr.response)  //打印的是字符串 字符串里面是对象形式 形如 '{"name":"frank"}'
              const object = JSON.parse(xhr.response)//将字符串转为json的数据类型 此时是转为json的对象数据类型
              console.log(object)
              window.myName.textContent = object.name //将对象中name的属性值 赋值给 id=maName的元素
           }
           else{ alert('加载/5.json失败 请输入正确的url') }
        }             //我当时加else{}都加错位置了，应该加在if(){}的中括号后面
    }
    xhr.send()   //这一步我老是忘记 切记要写
}


getXML.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/4.xml')
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
           if(xhr.status>=200 && xhr.status<300){
             // console.log(xhr.response)  打印出 4.xml文件里的内容
             // console.log(xhr.responseXML)  打印出 一个对象！！！也就是将4.xml文件里的内容变成对象了
            const dom = xhr.responseXML   //创建变量dom 赋值 一个对象
            const text = dom.querySelectorAll('warning')[0].textContent
            console.log(text.trim())   //trim()的作用是 去掉首尾的空格、换行
            p.innerHTML = text.trim()  
           }
           else{ alert('加载/4.xml失败 请输入正确的url') }
        }
    }
    xhr.send()   //这一步我老是忘记 切记要写
}



getHTML.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/3.html')
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
           if(xhr.status>=200 && xhr.status<300){
              //console.log(xhr.response)
              //console.log(typeof xhr.response)
            const div = document.createElement('div')
            div.innerHTML = xhr.response
            document.body.appendChild(div)  
           }
           else{ alert('加载/3.html失败 请输入正确的url') }
        }             //我当时加else{}都加错位置了，应该加在if(){}中括号后面
    }
    xhr.send()   //这一步我老是忘记 切记要写
}



getJS.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/2.js')
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
           if(xhr.status>=200 && xhr.status<300){
             // console.log(xhr.response)
            const script = document.createElement('script')
            script.innerHTML = xhr.response
            document.body.appendChild(script)  //为什么引入body  业界共识 平时script标签确实是引入到body中
           }
           else{ alert('加载/2.js失败 请输入正确的url') }
        }
    }
    xhr.send()   //这一步我老是忘记 切记要写
}



getCSS.onclick = () => {   //点击事件 只要点击了id=getCSS的button 就执行箭头函数,目的是看css效果
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/style.css')
    xhr.onreadystatechange = () => {  //我会忘记写箭头，on...change是个事件 触发就执行箭头函数
        if(xhr.readyState === 4){ //readystate是浏览器这边的状态码
            if(xhr.status>=200 && xhr.status<300){ //status是服务器那边的状态码
                 console.log(xhr.response)   // 会打印出 h1 {color:red;} 
                const style = document.createElement('style')
                style.innerHTML = xhr.response
                document.head.appendChild(style)
            }
            else{ alert('加载/style.css失败 请输入正确的url') }
        }
    }
    xhr.send()
}
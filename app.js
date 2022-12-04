const btn = document.querySelectorAll('.btn')
const icon = document.querySelectorAll('i')
const bars = document.querySelectorAll('.bars')
const nav = document.querySelectorAll('#nav')



btn.forEach(ele =>{
    // console.log(ele)
    ele.addEventListener('mouseover',()=>{
        ele.style.backgroundColor="darkgray"
    })


    
})


btn.forEach(ele =>{
    // console.log(ele)
    ele.addEventListener('mouseout',()=>{
        ele.style.backgroundColor="transparent"
    })


    
})



bars.addEventListener('click',()=>{
    console.log('hi')
})

// icon.forEach(ele =>{
//     console.log(ele)
//     ele.addEventListener('mouseover',()=>{
//         ele.style.backgroundColor="darkgray"
//     })


    
// })


// icon.forEach(ele =>{
//     console.log(ele)
//     ele.addEventListener('mouseout',()=>{
//         ele.style.backgroundColor="transparent"
//     })


    
// })
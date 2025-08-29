function getElement(id){
    const idElement = document.getElementById(id);
    return;
}

const addData = []

document.getElementById('call-btn-1').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
    if(coinNumber <= 0 ){
    alert('Your balance is finished')
    return;
    }
    document.getElementById('coin-number').innerText = total
    const title1 =document.getElementById('title-1').innerText 
    const number1 =document.getElementById('number-1').innerText
    const twoTotal = title1 + ' ' + number1 + '...';

    if(total === total){
        alert(twoTotal)
    }


    const data = {
        name:'National Emergency Number',
        number:999,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
    <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';


})
})



document.getElementById('call-btn-2').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
    if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title2 =document.getElementById('title-2').innerText 
    const number2 =document.getElementById('number-2').innerText
    const twoTotal = title2 + ' ' + number2 + '...';
    
    if(total === total){
        alert(twoTotal)
    }
         const data = {
        name:'Police Helpline Number',
        number:999,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p>
    </div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';

})
})


document.getElementById('call-btn-3').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
     if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-3').innerText 
    const number3 =document.getElementById('number-3').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
   
    if(total === total){
        alert(twoTotal)
    }
      const data = {
        name:'Fire Service Number',
        number:999,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
  
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})

document.getElementById('call-btn-4').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
     if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-4').innerText 
    const number3 =document.getElementById('number-4').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
   
    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Ambulance Service',
        number:'1994-999999',
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})

document.getElementById('call-btn-5').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
     if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-5').innerText 
    const number3 =document.getElementById('number-5').innerText
    const twoTotal = title3 + ' ' + number3 + '...';

    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Women & Child Helpline',
        number:109,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';

})
})

document.getElementById('call-btn-6').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
    if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-6').innerText 
    const number3 =document.getElementById('number-6').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
    
    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Anti-Corruption Helpline',
        number:106,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})

document.getElementById('call-btn-7').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
     if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-7').innerText 
    const number3 =document.getElementById('number-7').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
   
    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Electricity Helpline',
        number:16216,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})

document.getElementById('call-btn-8').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
    if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-8').innerText 
    const number3 =document.getElementById('number-8').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
    
    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Brac Helpline',
        number:16445,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div>
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})

document.getElementById('call-btn-9').addEventListener('click',function(){
    const coinNumber = document.getElementById('coin-number').innerText
    const total = coinNumber - 20
     if(coinNumber <= 0 ){
        alert('Your balance is finished')
        return;
    }
    document.getElementById('coin-number').innerText = total
    const title3 =document.getElementById('title-9').innerText 
    const number3 =document.getElementById('number-9').innerText
    const twoTotal = title3 + ' ' + number3 + '...';
   
    if(total === total){
        alert(twoTotal)
    }
     const data = {
        name:'Bangladesh Railway Helpline ',
        number:163,
        date: new Date().toLocaleTimeString()
    }
    addData.push(data);
    console.log(addData)
    const addContainer = document.getElementById('call-btn-history')

    
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="rounded-lg bg-[#fafafa] my-2 p-2">
        <h1 id="title-1" class="  text-xl font-bold">${data.name}</h1>
        <p class="ml-80">${data.date}</p>
        <p id="number-1" class="text-2xl font-bold  ">${data.number}</p></div
        
            
    `

    addContainer.appendChild(div)

    addContainer.appendChild(div)
    document.getElementById('clear-btn-history').addEventListener('click',function(){
      
    div.innerHTML='';
})
})




// copy buttons
const copybtns = document.querySelectorAll('.copy-btn');
const copyCounter = document.getElementById('count-copy-number');

for (const copybtn of copybtns){
    copybtn.addEventListener('click', function(){
        const number = copybtn.getAttribute('data-number');
        let count = Number(copyCounter.innerText) + 1;
        copyCounter.innerText = count;

        navigator.clipboard.writeText(number).then(() => {
            alert('The number has been copied:' + number);

        })
        .catch(errors =>{
            console.error('Failed to copy:', errors);

        })
    })
}





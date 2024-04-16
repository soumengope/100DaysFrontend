const getData = document.querySelector('.hr')

setInterval(()=>{
    const dt = new Date;
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    let tc = '';

    if(hr > 12){
        tc = 'PM'
        hr = hr - 12;
        if(hr.toString().length < 2){
            hr = `0${hr}`
        }
    }else{
        tc = 'AM'
    }
    if(min.toString().length < 2){
        min = `0${min}`
    }
    if(sec.toString().length < 2){
        sec = `0${sec}`
    }
    getData.innerText = `${hr} : ${min} : ${sec} ${tc}`
},1000)


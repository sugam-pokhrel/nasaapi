
document.querySelector('button').addEventListener('click',come); //this code is listening on button for any click



function come(){
 let info=   document.querySelector('input').value
 console.log(info);   
    fetch(`https://api.nasa.gov/planetary/apod?api_key=WR3Ow1dlwaQUri3JTHmyHbyUUtGh13avME2Cgwf6&date=${info}`) //all these are extracted from their api
    .then(res=>res.json())
    .then(data=>{console.log(data)
        document.querySelector('h2').innerText=data.title;
        document.querySelector('p').innerText=data.explanation;
       

        if(data.media_type=='image'){
            document.querySelector('img').src=data.hdurl;

        } 
        else if(data.media_type=='video'){
            document.querySelector('iframe').src=data.url;
        }

    })
    .catch(err=>console.log(err));

}


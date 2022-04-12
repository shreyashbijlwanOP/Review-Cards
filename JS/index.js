const img = document.querySelector('img');
const job = document.querySelector('.job');
const author  = document.getElementById('#author')
console.log(author)
// const imageArray = ['./photo/person-1.jpeg','./photo/2.jpg','./photo/3.jpg','./photo/4.jpg','./photo/5.jpg'];
let index = 0;

const personDetails = [
    {
        firstName :'neha',
        job : 'Web Dev',
        photo: './photo/person-1.jpeg',
    },
    
    {
        firstName : 'Raju',
        job : 'Panwadi',
        photo: './photo/2.jpg',
    },

    {
        firstName : 'Shivam',
        job : 'Pscopath',
        photo: './photo/3.jpg',
    },

    {
        firstName : 'Kirti',
        job : 'IPS',
        photo: './photo/4.jpg',
    },
    {
        firstName : 'Ridhi',
        job : 'Senior Soft. Engg',
        photo: './photo/5.jpg',
    },
]

//  setting Buttons 

const nxtButton = document.querySelector('.nxt-btn');

const preButton = document.querySelector('.pre-btn');

const supriseButton = document.querySelector('.suprise-button');

let path = personDetails[index].photo;


nxtButton.addEventListener('click',()=>{
    
    if (index==5)
    {
        index = 0;
        let value = personDetails[index].photo;
        img.setAttribute('src',value);
        job.textContent = personDetails[index].job;
        author.textContent = personDetails[index].firstName;
       index++;
    
    }
    else if (index<=4)
    {
        let value = personDetails[index].photo;
        img.setAttribute('src',value);
        job.textContent = personDetails[index].job;
        author.textContent = personDetails[index].firstName;
       index++;

    }
  

})

preButton.addEventListener('click',()=>{
  
    if (index<0)
    {
        index = 4;
        let value = personDetails[index].photo;
        img.setAttribute('src',value);
        job.textContent = personDetails[index].job;
        author.textContent = personDetails[index].firstName;
      
    
    }
    else if (index<=5)
    {
        let value = personDetails[index].photo;
        img.setAttribute('src',value);
        job.textContent = personDetails[index].job;
        author.textContent = personDetails[index].firstName;
       index--;
       console.log(index);
    }


})

supriseButton.addEventListener('click',()=>{

    let ranIdx = Math.floor(Math.random()*5);
    
    let value = personDetails[ranIdx].photo;
        img.setAttribute('src',value);
        job.textContent = personDetails[ranIdx].job;
        author.textContent = personDetails[ranIdx].firstName;

})

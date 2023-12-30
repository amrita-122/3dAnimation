        const card = document.querySelector('.card');
        const container = document.querySelector('.container');
        const title = document.querySelector('.info')
        const sneaker = document.querySelector('.sneaker img')
        const description = document.querySelector('.description')
        const purchase = document.querySelector('.purchase')

        
        
        
        //moving the animation
        container.addEventListener('mousemove', (e)=>{
            let xaxis = (window.innerWidth/2 - e.pageX)/12;  
            let yaxis = (window.innerHeight/2 - e.pageY)/12;
            card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;   
            card.style.transition ='none';
            description.style.transform =`translateZ(60px)` ;
            title.style.transform ="translateZ(70px)";
            sneaker.style.transform ="translateZ(70px)";
            description.style.transition ='transform 0.3s ease'
            title.style.transition ='transform 0.3s ease';
            sneaker.style.transition ='transform 0.3s ease';
        

        });
        container.addEventListener('mouseleave',(e)=>{
            card.style.transform =`rotateY(0deg) rotateX(0deg)`;
            card.style.transition ='all 0.5s ease';
            title.style.transform ="translateZ(0px)";
            sneaker.style.transform ="translateZ(0px)";
            description.style.transform ="translateZ(0px)";

        });
       
        container.addEventListener('mouseenter',(e)=>{
            description.style.transition ='transform 0.3s ease'
            title.style.transition ='transform 0.3s ease';
            sneaker.style.transition ='transform 0.3s ease';        });
    

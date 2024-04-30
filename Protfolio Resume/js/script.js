/*========================================= typin animation start=================================================*/
var typed = new Typed('.typing', {
  strings: ["Full Stack Developer", "Web Designer", "Digital Markting"],
  typeSpeed: 50, 
  backSpeed: 30, 
  loop: true 
})
/*========================================= typin animation End=================================================*/




/*========================================= aside js start =================================================*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() 
        {
          removeBackSection();
           for(let j=0; j<totalNavList; j++)
           {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
              addBackSection(j);
            }
               navList[j].querySelector("a").classList.remove("active");
           }
           this.classList.add("active")
           showSection(this);
           if(window.innerWidth < 1200)
           {
            asideSectionTogglerBtn();
           }
       })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalNavList; i++)
        {
            allSection[i].classList.remove("back-section");  
        }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
     function showSection(element)
     {
        for(let i=0; i<totalNavList; i++)
        {
            allSection[i].classList.remove("active");  
        }
        const target = element.getAttribute("href").split("#")[1]; 
        document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++)
        {
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1]; 
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
            navList[i].querySelector("a").classList.add("active");
          }
        }
      }
     document.querySelector(".hire-me").addEventListener("click", function()
     {
      const sectionIndex = this.getAttribute("data-section-index");
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
     })
     const navTogglerBtn = document.querySelector(".nav-toggler"),
     aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click", () => 
     {
       asideSectionTogglerBtn();
     })
     function asideSectionTogglerBtn()
     {
       aside.classList.toggle("open");
       navTogglerBtn.classList.toggle("open");
       for(let i=0; i<totalSection; i++)
       {
         allSection[i].classList.toggle("open");
       }
     }
     /*========================================= aside js End =================================================*/





     /*========================================= gmail start =================================================*/
     function send(){
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;
    
      var body = "<b>NAME:</b> " + name + "<br> <b>EMAIL:</b> " + email + " <br> <b>SUBJECT:</b>" + subject +"<br> <b>MESSAGE:</b>" + message;
      console.log(body);
    
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kavimanikandan09@gmail.com",
        Password : "764556DADEC1D13CAEA7C63C67DF55D000D4",
        To : 'kavimanikandan09@gmail.com',
        From : "kavimanikandan09@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
    }
    /*========================================= gmail End =================================================*/
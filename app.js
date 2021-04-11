const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav  = document.querySelector(".List");
	const navLinks = document.querySelectorAll(".List li");
	//const navLinksActive = document.querySelectorAll(".nav-active li");


	burger.addEventListener("click", ()=>{
		nav.classList.toggle("nav-active");


		//Animation
		navLinks.forEach((link,index)=>{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s` 
		});

		burger.classList.toggle("toggle");
	})
    console.log("IM HERE!")

}

navSlide();
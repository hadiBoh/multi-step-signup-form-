const firstNextBtn = document.querySelector(".first-next-btn"),
secondNextBtn = document.querySelector(".second-next-btn"),
seconPrevtBtn = document.querySelector(".second-prev-btn"),
thirdNextBtn = document.querySelector(".third-next-btn"),
thirdPrevBtn = document.querySelector(".third-prev-btn"),
lastPrevBtn = document.querySelector(".last-prev-btn"),
submitBtn = document.querySelector(".submit-btn"),
forms = document.querySelector(".forms"),
navName = document.querySelector(".nav-name"),
navContact = document.querySelector(".nav-contact"),
navBirth = document.querySelector(".nav-birth"),
navSubmit = document.querySelector(".nav-submit"),
message = document.querySelector(".message")

firstNextBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(-100%)"
	navName.classList.add("completed")
	navName.childNodes[1].innerHTML= `<i class= "fa fa-check"></i>`
})
secondNextBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(-200%)"
	navContact.classList.add("completed")
	navContact.childNodes[1].innerHTML= `<i class= "fa fa-check"></i>`
})
seconPrevtBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(0%)"
	navName.classList.remove("completed")
	navName.childNodes[1].innerHTML= "1"
})
thirdNextBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(-300%)"
	navBirth.classList.add("completed")
	navBirth.childNodes[1].innerHTML= `<i class= "fa fa-check"></i>`
})
thirdPrevBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(-100%)"
	navContact.classList.remove("completed")
	navContact.childNodes[1].innerHTML= "2"
})
lastPrevBtn.addEventListener("click",()=>{
	forms.style.transform = "translateX(-200%)"
	navBirth.classList.remove("completed")
	navBirth.childNodes[1].innerHTML= "3"
})
submitBtn.addEventListener("click",()=>{
	navSubmit.classList.add("completed")
	navSubmit.childNodes[1].innerHTML= `<i class= "fa fa-check"></i>`
	message.classList.add("show")
	setTimeout(()=>{
		location.reload()
	},2000)
})


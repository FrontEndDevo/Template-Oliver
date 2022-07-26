let scrollBtn = document.querySelector(".scroll-to-top");

window.onscroll = () => {
    this.scrollY >= 1000 ? scrollBtn.classList.add("appear") : scrollBtn.classList.remove("appear");
}

scrollBtn.addEventListener("click", _ => window.scrollTo({top:0}))
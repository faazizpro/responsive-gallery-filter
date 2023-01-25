//Gallery Item Filter

const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector('.portfolio-gallery').children;
// console.log(filterButtons);

for(let i = 0; i<filterButtons.length; i++){
    
    filterButtons[i].addEventListener("click", function(){
    // console.log(filterButtons[i]);

        for(let j = 0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove('active');
        }
        this.classList.add("active");
        const target = this.getAttribute('data-target');
        // console.log(target);
        for(let k= 0; k < items.length; k++){
            // console.log(items[k]);
            items[k].style.display = "none"
            if(target === "camping"){
                items[k].style.display = 'block';
            }
            if(target === items[k].getAttribute('data-id')){
                items[k].style.display = 'block';
            }
        }
    })
}
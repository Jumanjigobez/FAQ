
//The View answer functionality
var que_head = document.querySelectorAll(".head_part");

const handleView = (y) =>{

    for(let i=0; i<=4; i++){
        let elem = que_head[i],
            btn_arrow = elem.querySelector(".btn_arrow"),
            ans_text = elem.parentNode.querySelector(".text_part");

        if(elem == y){//Check if clicked element equals to current index loop
            elem.classList.toggle("active");
            btn_arrow.classList.toggle("active");
            ans_text.classList.toggle("active");
            
        }else{
            elem.classList.remove("active");
            btn_arrow.classList.remove("active");
            ans_text.classList.remove("active");
        
        }
    }

}

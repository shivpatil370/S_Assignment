

let check=[]
let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let rating=document.querySelector("#rating").value;
    // console.log(name,rating)
      let obj={
        name:name,
        rating:rating
      }
    //   console.log(obj)

     if(check.length==0){ 
    axios.post("https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos",obj)
    .then((res)=>{
        // console.log(res.data)

        axios.get("https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos")
        .then((res)=>{
            // console.log(res.data)
            MyFun(res.data);
            let star1=document.querySelector("#star1");
            let star2=document.querySelector("#star2");
            let star3=document.querySelector("#star3");
            let star4=document.querySelector("#star4");
            let star5=document.querySelector("#star5");
    
            let count1=0;
            let count2=0;
            let count3=0;
            let count4=0;
            let count5=0;
            res.data.forEach((ele)=>{
                // console.log(ele.rating)
                if(ele.rating==1){
                    count1++;
                }
                if(ele.rating==2){
                    count2++;
                }
                if(ele.rating==3){
                    count3++;
                }
                if(ele.rating==4){
                    count4++;
                }
                if(ele.rating==5){
                    count5++;
                }
                star1.textContent=count1;
                star2.textContent=count2;
                star3.textContent=count3;
                star4.textContent=count4;
                star5.textContent=count5;

                document.querySelector("#name").value="";
                document.querySelector("#rating").value=1;
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .then((err)=>{
        console.log(err)
    })

}
else{
    // console.log(check[0])
    axios.get(`https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos/${check[0]}`)
    .then((res)=>{
        let editdata=(res.data);

        let name1=document.querySelector("#name").value;
        let rating1=document.querySelector("#rating").value;
        axios.put(`https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos/${check[0]}`,{
            name:name1,
            rating:rating1
        })
        .then((res)=>{
            // console.log(res)

            axios.get("https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos")
            .then((res)=>{
                // console.log(res.data)
                MyFun(res.data);
                let star1=document.querySelector("#star1");
                let star2=document.querySelector("#star2");
                let star3=document.querySelector("#star3");
                let star4=document.querySelector("#star4");
                let star5=document.querySelector("#star5");
        
                let count1=0;
                let count2=0;
                let count3=0;
                let count4=0;
                let count5=0;
                res.data.forEach((ele)=>{
                    // console.log(ele.rating)
                    if(ele.rating==1){
                        count1++;
                    }
                    if(ele.rating==2){
                        count2++;
                    }
                    if(ele.rating==3){
                        count3++;
                    }
                    if(ele.rating==4){
                        count4++;
                    }
                    if(ele.rating==5){
                        count5++;
                    }
                    star1.textContent=count1;
                    star2.textContent=count2;
                    star3.textContent=count3;
                    star4.textContent=count4;
                    star5.textContent=count5;

                    document.querySelector("#name").value="";
                    document.querySelector("#rating").value="";
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })

    })
    .catch((err)=>{
        console.log(err)
    })
}

    
})

// ....................................................
window.addEventListener("DOMContentLoaded",(e)=>{
    axios.get("https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos")
    .then((res)=>{
        // console.log(res.data)
        MyFun(res.data);
        let star1=document.querySelector("#star1");
        let star2=document.querySelector("#star2");
        let star3=document.querySelector("#star3");
        let star4=document.querySelector("#star4");
        let star5=document.querySelector("#star5");

        let count1=0;
        let count2=0;
        let count3=0;
        let count4=0;
        let count5=0;
        res.data.forEach((ele)=>{
            // console.log(ele.rating)
            if(ele.rating==1){
                count1++;
            }
            if(ele.rating==2){
                count2++;
            }
            if(ele.rating==3){
                count3++;
            }
            if(ele.rating==4){
                count4++;
            }
            if(ele.rating==5){
                count5++;
            }
            star1.textContent=count1;
            star2.textContent=count2;
            star3.textContent=count3;
            star4.textContent=count4;
            star5.textContent=count5;
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})
// ..........................................................


let ul=document.querySelector("ul");
function MyFun(data){
    // console.log(data)
    ul.innerHTML=""

    data?.forEach((ele)=>{
        // console.log(ele)
        let li=document.createElement("li");
        let elemtdata=`<span> ${ele.name}</span> <span><b>${ele.rating}</b></span> <button class="deletebtn" id=${ele._id}>DELETE</button> <button class="editbtn" id=${ele._id}>Edit</button>`;
        li.innerHTML=elemtdata;
        ul.append(li)
    })
};


ul.addEventListener("click",(e)=>{
    let currentdel=e.target.classList.contains("deletebtn")
    let parentelement=e.target.parentElement;

    let x1=parentelement.firstElementChild;
    let x2=x1.nextElementSibling;
    let x3=x2.nextElementSibling;
    let getid=x3.getAttribute("id")
    // console.log(currentdel)
    // console.log(getid)

    // DELETE BUTTON
    if(currentdel){
        axios.delete(`https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos/${getid}`)
        .then((res)=>{
            // console.log(res)
            axios.get("https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos")
            .then((res)=>{
                // console.log(res.data)
                MyFun(res.data);
                let star1=document.querySelector("#star1");
                let star2=document.querySelector("#star2");
                let star3=document.querySelector("#star3");
                let star4=document.querySelector("#star4");
                let star5=document.querySelector("#star5");
        
                let count1=0;
                let count2=0;
                let count3=0;
                let count4=0;
                let count5=0;
                res.data.forEach((ele)=>{
                    // console.log(ele.rating)
                    if(ele.rating==1){
                        count1++;
                    }
                    if(ele.rating==2){
                        count2++;
                    }
                    if(ele.rating==3){
                        count3++;
                    }
                    if(ele.rating==4){
                        count4++;
                    }
                    if(ele.rating==5){
                        count5++;
                    }
                    star1.textContent=count1;
                    star2.textContent=count2;
                    star3.textContent=count3;
                    star4.textContent=count4;
                    star5.textContent=count5;
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // EDIT FUNCTIONALITY
    let currentEdit=e.target.classList.contains("editbtn");
    let x4=x3.nextElementSibling;
    // console.log(x4)
    if(currentEdit){
        // console.log(getid)
        axios.get(`https://crudcrud.com/api/cae3a942dd244531b05857e2b3cce1e2/todos/${getid}`)
        .then((res)=>{
            let deta=res.data;
            // console.log(deta._id)
            check.push(deta._id);
            document.querySelector("#name").value=deta.name;
            document.querySelector("#rating").value=deta.rating;

            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
})
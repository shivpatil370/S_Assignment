

let tr1=document.querySelector("#tr1");
// let tr2=document.querySelector("#tr2");

let th=document.createElement("th");
let td=document.createElement("td");
let table=document.querySelector("table");

let form=document.querySelector("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let candyname=document.querySelector("#candyname").value;
    let description=document.querySelector("#description").value;
    let price=document.querySelector("#price").value;
    let quantity=document.querySelector("#quantity").value;

          let obj={
            candyname:candyname,
            description:description,
            price:price,
            quantity:quantity
          };

        //   console.log(obj);
        axios.post("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas",obj)
        .then((res)=>{
          // console.log(res.data);
            axios.get("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas")
            .then((res)=>{
              // console.log(res);
              MyFun(res.data)
            })
            .catch((err)=>{
              console.log(err);
            })
        })
        .then((err)=>{
          console.log(err);
        })
        

          document.querySelector("#candyname").value="";
          document.querySelector("#description").value="";
          document.querySelector("#price").value="";
          document.querySelector("#quantity").value="";
})

window.addEventListener("DOMContentLoaded",async (e)=>{
     let res=await axios.get("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas");
     let data=res.data;
    //  console.log(data)
    MyFun(data);
    UpdateData(data);
})



function MyFun(data){
  let t=document.querySelector("table");
  t.innerHTML=""
  // console.log(data)
  // console.log(table.target.pa)
  
  data?.forEach((res)=>{
    // console.log(res._id)
    
    let tr2=document.createElement("tr");
    tr2.innerHTML=""
      tr2.className="alltr"
      let td1=document.createElement("td");
      td1.textContent=res.candyname;
      td1.style.border="1px solid black"
      let td2=document.createElement("td");
      td2.textContent=res.description;
      td2.style.border="1px solid black"
      let td3=document.createElement("td");
      td3.textContent=res.price;
      td3.style.border="1px solid black";

      let td4=document.createElement("td");
      td4.textContent=res.quantity;
      td4.style.border="1px solid black";
      td4.className=`${res._id}`;
      td4.setAttribute("id",`${res._id}`)

      let btn1=document.createElement("button");
      btn1.textContent="BuyOne";
      btn1.className="buyone";
      btn1.id=`${res._id}`;
      let btn2=document.createElement("button");
      btn2.textContent="BuyTwo";
      btn2.className="buytwo";
      // btn2.id=`${res._id}`;
      let btn3=document.createElement("button");
      btn3.textContent="BuyThree";
      btn3.className="buythree";
      // btn3.id=`${res._id}`;
      
      tr2.append(td1,td2,td3,td4,btn1,btn2,btn3);
      table.append(tr2);
      td1.style.border="1px solid black";

      // UpdateData(res.price)
    })
    
}

// let button1=document.querySelector(".buyone");

function UpdateData(data){
      
}

table.addEventListener("click",(e)=>{
  let currentelement1=e.target.classList.contains("buyone");
  let parentelement=(e.target.parentElement);
  // let getid=parentelement.getAttribute("id");
  let x1=parentelement.firstChild;
  let x2=x1.nextElementSibling;
  let x3=x2.nextElementSibling;
  let x4=x3.nextElementSibling;
  let quantitys=Number(x4.textContent);

  let getid=x4.getAttribute("id");
  // console.log(quantitys)

  
  if(currentelement1){
      axios.get(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`)
      .then((res)=>{
          
          // console.log(res.data.quantity);
          if(res.data.quantity>0){
          axios.put(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`,{
            candyname:res.data.candyname,
            description:res.data.description,
            price:res.data.price,
            quantity:`${quantitys-1}`})
          .then((res)=>{
          //  console.log(res);
          axios.get("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas")
          .then((res)=>{
            // console.log(res);
            MyFun(res.data)
          })
          .catch((err)=>{
            console.log(err);
          })
          })
          .catch((err)=>{
           console.log(err);
          })
        }
        else{
          alert("Sorry,quantity is out of stock!")
        }
      })
      .then((err)=>{
        console.log(err)
      })
      
      // console.log(quantitys)
    }

    let currentelement2=e.target.classList.contains("buytwo");
    if(currentelement2){

      axios.get(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`)
      .then((res)=>{
          
          // console.log(res.data.quantity);
          if(res.data.quantity>1){
          axios.put(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`,{
            candyname:res.data.candyname,
            description:res.data.description,
            price:res.data.price,
            quantity:`${quantitys-2}`})
          .then((res)=>{
          //  console.log(res);
          axios.get("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas")
            .then((res)=>{
              // console.log(res);
              MyFun(res.data)
            })
            .catch((err)=>{
              console.log(err);
            })
          })
          .catch((err)=>{
           console.log(err);
          })
        }
        else{
          alert("Sorry,quantity is out of stock!")
        }
      })
      .then((err)=>{
        console.log(err)
      })

      // console.log(quantitys)
    }

    let currentelement3=e.target.classList.contains("buythree");
    if(currentelement3){

      axios.get(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`)
      .then((res)=>{
          
          // console.log(res.data.quantity);
          if(res.data.quantity>2){
          axios.put(`https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas/${getid}`,{
            candyname:res.data.candyname,
            description:res.data.description,
            price:res.data.price,
            quantity:`${quantitys-3}`})
          .then((res)=>{
          //  console.log(res);
          axios.get("https://crudcrud.com/api/074cb9cbf969427689b77bbeec57b0cc/detas")
            .then((res)=>{
              // console.log(res);
              MyFun(res.data)
            })
            .catch((err)=>{
              console.log(err);
            })
          })
          .catch((err)=>{
           console.log(err);
          })
        }
        else{
          alert("Sorry,quantity is out of stock!")
        }
      })
      .then((err)=>{
        console.log(err)
      })

      // console.log(quantitys)
    }
})

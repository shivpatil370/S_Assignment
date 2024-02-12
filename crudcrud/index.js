

let editableid=[];
let totaldata=[];
let flag=false;

window.addEventListener("DOMContentLoaded",async ()=>{
    try{
     const response=await axios.get("https://crudcrud.com/api/ec6a9489baaf48719578681f67433c86/todo");
            // console.log(response.data)
           const data=response.data;
           MyFun(data);
           data.forEach((ele)=>{

            totaldata.push(ele);
        })
        //    deletebtn(data);
       
        // console.log(totaldata[0][1]._id)
       }
        catch (err) {
            console.log(err);
        }

       
})


function handleFormSubmit(event) {
   event.preventDefault();

   let username=document.querySelector("#username").value;
   let email=document.querySelector("#email").value;
   let phone=document.querySelector("#phone").value;
   
   let obj={
      username:username,
      email:email,
      phone:phone
   };
//    console.log(obj);
     
let flag=false;
for(let i=0; i<totaldata.length; i++){
    console.log(totaldata[i]._id,editableid[0])
    if(totaldata[i]._id==editableid[0]){
        flag=true;
    }
    
}
// console.log(flag);
      if(flag==true){
           axios.put(`https://crudcrud.com/api/ec6a9489baaf48719578681f67433c86/todo/${editableid[0]}`,obj)
           .then((res)=>{
            // MyFun(res);
            
            editableid[0]=""
           })
           .catch((err)=>{
            console.log(err)
           })
        }

      else{

          axios.post("https://crudcrud.com/api/ec6a9489baaf48719578681f67433c86/todo",obj)
          .then((res)=>{
              // console.log(res.data)
              MyFun(res);
              res.data.forEach((ele)=>{
        
                  totaldata.push(ele);
              })
          })
          .catch((err)=>{
              console.log(err);
          });

    
  };
  
  
    document.querySelector("#username").value="";
    document.querySelector("#email").value="";
    document.querySelector("#phone").value="";

   
    
};





function MyFun(data){
    let ul=document.querySelector("ul");
    ul.innerHTML=""
    let listItems=""
    // console.log(data)
    
    data?.forEach((ele)=>{
        // console.log(ele)
        listItems=listItems+`<li class=${ele?._id}>${ele?.username}-${ele?.email}-${ele?.phone}<button class="delete" type="Delete">Delete</button> <button class="edit">Edit</button><li>`;
        
    });
    
    
    ul.innerHTML=listItems;
    
}  


let ul=document.querySelector("ul");
ul.addEventListener("click",async (e)=>{
    // ..........................DELETE FUNCTIONALITY.....................
    let currentele=(e.target.classList.contains("delete"));
    if(currentele){
        let parantElement=e.target.parentElement;
        // console.log(parantElement);
        let deleteId=(parantElement.getAttribute("class"));
        axios.delete(`https://crudcrud.com/api/ec6a9489baaf48719578681f67433c86/todo/${deleteId}`);
    }

    // ......................EDIT FUNCTIONALITY............................
    let editele=(e.target.classList.contains("edit"));
    // console.log(editele)
         if(editele){
            let parentele=e.target.parentElement;
            // console.log(parentele);
            let editid=parentele.getAttribute("class");
            // console.log(editid)
            editableid[0]=(editid);
            let x=document.getElementsByClassName(`${editid}`);
            
            let text=(x[0].firstChild);
             let arr=(text.data.split("-"));
            //  console.log(arr)
            document.querySelector("#username").value=arr[0];
            document.querySelector("#email").value=arr[1];
            document.querySelector("#phone").value=arr[2];
           
            // console.log(flag)
         }
});




const promise1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          fetch("https://dummyjson.com/posts").then((res)=>{
           res.json().then((data)=>resolve(data));
          })
        },1000)
    })
}

const promise2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          fetch("https://dummyjson.com/products").then((res)=>{
           res.json().then((data)=>resolve(data));
          })
        },1000)
    })
}
const promise3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          fetch("https://dummyjson.com/todos").then((res)=>{
           res.json().then((data)=>resolve(data));
          })
        },1000)
    })
}
let table1text=document.getElementById("table1");
let table2text=document.getElementById("table2");
let table3text=document.getElementById("table3");
async function startpromise(){
  table1text.innerHTML="";
  table2text.innerHTML="";
  table3text.innerHTML="";
  try{
    let data1=await promise1()
    data1["posts"].forEach(element => {
      table1text.innerHTML+=`
              <div class="item1">
              <tr class="tr"><td class="id">Id is ${element.id}</td></tr>
              <tr class="tr"><td class="title">title is ${element.title}</td></tr>
              <tr class="tr"><td class="body">Body is ${element.body}</td></tr>
              <tr class="tr"><td  class="userid">UserId is ${element.userId}</td></tr>
              <tr class="tr"><td class="tags">tags are ${element.tags}</td></tr>
              <tr class="tr"><td class="reaction">reaction are ${element.reactions}</td></tr>
              </div>
      `
      
    });
   
    
    let data2=await promise2();
   data2["products"].forEach((element)=>{
    
    table2text.innerHTML+=`
    <div class="item1">
    <tr class="tr"><td id="${element.id}"  class="Thumbnail"><img src="${element.thumbnail}" id="img-${element.id}"  ></td></tr>
    <tr class="tr"><td class="id">Id is ${element.id}</td></tr>
    <tr class="tr"><td class="title">title is ${element.title}</td></tr>
    <tr class="tr"><td class="description">Discription is ${element.description}</td></tr>
    <tr class="tr"><td  class="price">price is ${element.price}</td></tr>
    <tr class="tr"><td class="discount">discount is  ${element.discountPercentage}</td></tr>
    <tr class="tr"><td class="rating">Rating are ${element.rating}</td></tr>
    <tr class="tr"><td class="stock">Stock are ${element.stock}</td></tr>
    <tr class="tr"><td class="brand">Brand are ${element.brand}</td></tr>
    <tr class="tr"><td class="category">Category are ${element.category}</td></tr>
  
    </div>
`

   })

   


  data2["products"].forEach((element) => {
    let id = element.id;
    let images = element["images"];
    let imgElement = document.getElementById(`img-${element.id}`);

    imgElement.addEventListener("mouseenter", () => {
        // Create a tooltip element
        let tooltip = document.createElement('div');
        tooltip.innerHTML = `<p>Click on image for more images</p>`;
        tooltip.classList.add('tooltip');

        tooltip.style.top = `${imgElement.offsetTop}px`;  // Set tooltip top position same as image top position
        tooltip.style.left = `${imgElement.offsetLeft}px`;
        

        // Append the tooltip to the document body
        document.body.appendChild(tooltip);
    });

    imgElement.addEventListener('mouseleave', () => {
        // Remove the tooltip when mouse leaves the image
        let tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });

    imgElement.addEventListener('click', () => showMore(id, images));
});

   
   
   
    let data3=await promise3();
   data3["todos"].forEach((element)=>{
    table3text.innerHTML+=`
    <div class="item3">
    <tr class="tr"><td class="id">Id is ${element.id}</td></tr>
    <tr class="tr"><td class="todo">title is ${element.todo}</td></tr>
    <tr class="tr"><td class="completed">Completed ${element.completed}</td></tr>
    <tr class="tr"><td  class="userid">UserId is ${element.userId}</td></tr>
    
    </div>
`
    

   })
  }catch(e){
         console.log("error",e);
  }
}
function showMore(id, photos){
  
  console.log("we enter in showmore ")
 
  let prev=document.getElementById(id);
  let div = document.createElement('div');;
  
  photos.forEach((element)=>{
    div.innerHTML+=`<img src="${element}">`
  })
  prev.appendChild(div);
}

    

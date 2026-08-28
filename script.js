const api_key="Ok9VmCQvb0J4iNcb5g6yOy9GSNMbUZTR";

const searchBox= document.querySelector("#search-box");

const btn= document.querySelector("#submit-btn");
const loader= document.querySelector(".loader");
const wrapper= document.querySelector(".wrapper");

btn.addEventListener("click",async()=>{
    const userValue=searchBox.value;
loader.style.display="block";

 const response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${userValue}`);
  const data=await response.json();

  //todo new way
  await new Promise(resolve => {
    setTimeout(resolve, 2000)});
   loader.style.display = "none";

    console.log(data);

   
});
// setTimeout(async() => {
//     loader.style.display="none";
//      const response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${userValue}`);
//     const data=await response.json();
//     console.log(data);
  
// }, 2000);


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

    //todo to display gifd

    const display=data.data.map((gifs)=>{
        const image=document.createElement("img");
      image.src = gifs.images.fixed_height.url;
      const container=document.createElement("div");
       const title=document.createElement("p");
       title.textContent=gifs.title;

        container.append(image);
        container.append(title);
        wrapper.append(container);
        container.classList.add(
             "border-2",
  "border-white",
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "w-72",
  "h-96",
  "mx-auto",
  

            
            );
    });
   

   
});



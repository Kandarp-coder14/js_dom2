function main(){
  let count = 0;
  let increment = document.querySelector(".increment");
  let decrement = document.querySelector(".decrement");
  let reset = document.querySelector(".reset");
  let finalData = document.querySelector(".data");
  function finalView(dataa){
   return finalData.innerHTML =`<h1>${dataa}<h1>`;
  }
  increment.addEventListener("click", () =>
  {
   count = count+1;
   finalView(count);
  })
  decrement.addEventListener("click", () => 
  {
      count = count-1;
      finalView(count);
  })
  reset.addEventListener("click" , () => 
  {
      count = 0;
      finalView(count);
  })
  }
  main();
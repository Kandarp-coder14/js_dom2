document.querySelector('input').addEventListener('keyup',function (){
    if(event.keyCode === 13){
        var btn = document.createElement('button');
        var ul = document.createElement('ul');
     var li = document.createElement('li');
     var p = document.createElement('p');
     btn.innerText = 'delete the input';
     p.innerText = event.target.value;
     li.appendChild(p);
     li.appendChild(btn);
     ul.append(li);
     document.body.append(ul);
     btn.addEventListener('click',function(event){
         event.target.parentElement.remove()
     })

     // li.innerText = event.target.value;
//       document.body.append(ul);
//       ul.append(li);
//       ul.appendChild(li)
    }
})
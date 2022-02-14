const inputVal = document.querySelector('.inputVal');
const addTaskBtn = document.querySelector('.btn');



addTaskBtn.addEventListener('click', function () {
   if (inputVal.value.trim() !=0) {
      let localItems = JSON.parse (localStorage.getItem('localItem'))
      if(localItems === null) {
         taskList =[];
      }else {
         taskList = localItems;
      }
      taskList.push(inputVal.value)
      localStorage.setItem('localItem',JSON.stringify(taskList));
   }
   showItem();

})


function showItem() {
   let localItems = JSON.parse (localStorage.getItem('localItem'));
   if(localItems === null) {
      taskList =[]
   } else {
      taskList =localItems;
   }

   let html ='';
   let itemShow = document.querySelector('.todoLists');
   taskList.forEach((data, index) => {
      
      html +=`
      <div class="todoListItem" onclick="deletItem(${index})">${data}</div>
      `
   });
   itemShow.innerHTML = html;
}
showItem();

function deletItem(index) {
   let localItems = JSON.parse (localStorage.getItem('localItem'));
   taskList.splice(index, 1);
   localStorage.setItem('localItem',JSON.stringify(taskList));
   showItem();
}
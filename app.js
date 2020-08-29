// sideNav

const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

// search Input

function myFunction(e) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchUser");
  filter = input.value.toUpperCase();
  ul = document.getElementById("output");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
      } else {
        li[i].style.display = "none";

      }

  }


}



document.addEventListener("DOMContentLoaded",function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      //console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `
        <li class="col-sm-3 col-lg-3 col-md-3 eachBox" id="button2">
        <div>
          <img src= '${post.photo}'class = "img-responsive" width = "100%">
          <div class="container content">
            <h5 class="m-0"><b>${post.title}</b></h5> 
            <p>${post.body}</p> 
          </div>
        </li>

</div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
});






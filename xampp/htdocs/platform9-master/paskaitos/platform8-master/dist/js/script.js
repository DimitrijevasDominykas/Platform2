$.getJSON('http://localhost:3000/platform9-master/paskaitos/platform8-master/dist/blog.php',function(data){
    console.log(data);
  data.blog.forEach((item, i)=>{
    const html=`<div>
<h2>${data.blog[i].title}</h2>
<img src=${data.blog[i].img} alt="">
</div>`;
    list.insertAdjacentHTML('afterend', html)
  })
});

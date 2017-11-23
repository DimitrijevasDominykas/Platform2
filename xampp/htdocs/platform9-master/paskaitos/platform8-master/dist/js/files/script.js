$.getJSON('http://localhost:3000/platform9-master/paskaitos/platform8-master/dist/news.json',function(data){
    console.log(data);
  data.news.forEach((item, i)=>{
    const html=`<div>
<h2>${data.news[i].title}</h2>
<img src=${data.news[i].img} alt="">
</div>`;
    list.insertAdjacentHTML('afterend', html)
  })
});


// function changebg(){
//     document.body.style.backgroundColor = 'red';
// }
// function chnage_text(){
//     const show =document.getElementById('shoes');
//     show.innerText = 'Run Man Run!!'
// }
// function chnage_text1(){
//     const show =document.getElementById('shoes');
//     show.innerText = 'If a dog chews shoes whose shoes does he choose?'
// }

document.getElementById('Buy').addEventListener('click',function(){
    const show =document.getElementById('shoes');
    show.innerText = 'Run Man Run!!'
})
document.getElementById('Buy').addEventListener('click',function(){
    const make_red = document.getElementById('Buy');
    make_red.style.backgroundColor = 'red';
    make_red.style.color = 'white'
})
// for the from

document.getElementById('Buy1').addEventListener('click',function(){
    const input_filed_1 = document.getElementById('searching1');
    const input_1 = input_filed_1.value;
    const p = document.getElementById('lbl1');
    p.innerText = input_1;
    // input-2
    const input_filed_2 = document.getElementById('searching2');
    const input_2 = input_filed_2.value;
    const q = document.getElementById('lbl2');
    q.innerText = input_2;
    // input-3
    const input_filed_3 = document.getElementById('searching3');
    const input_3 = input_filed_3.value;
    const r = document.getElementById('lbl3');
    r.innerText = input_3;
    // input-4
    const input_filed_4 = document.getElementById('searching4');
    const input_4 = input_filed_4.value;
    const s = document.getElementById('lbl4');
    s.innerText = input_4;
    // now removing all values
    input_filed_1.value ='';
    input_filed_2.value ='';
    input_filed_3.value ='';
    input_filed_4.value ='';

})
// To add the blog

document.getElementById('blog-btn').addEventListener('click',function(){
    const Blog = document.getElementById('add_blog');
    const new_Blog = Blog.value;

    const Blog_adder = document.getElementById('blog-area');
    const x = document.createElement('p');
    x.innerText = new_Blog;
    Blog_adder.appendChild(x);
    x.style.textAlign = 'start';
    x.style.width = 'auto';

    Blog.value ='';
})
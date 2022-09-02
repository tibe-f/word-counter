const txt=document.getElementById('txtcontent');
const charcount=document.getElementById("ccount");
const wordcount=document.getElementById("wcount");


txt.oninput=()=>{
    let chars=txt.value;
   charcount.textContent=chars.replace(/\s/g, '').length;

   let words=txt.value.split(/\s+/).filter((n)=> n != '');
   wordcount.textContent=words.length;

};



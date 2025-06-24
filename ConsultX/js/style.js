function updateFileLabel(){
  const label=document.getElementById('filelabel');
  const input=document.getElementById('idproof');

  if(input.files.length>0){
    label.textContent=input.files[0].name;
    label.parentElement.style.color = "#ffffff";
  }
  else{
    label.textContent="Id Proof";
    label.parentElement.style.color="rgba(255,255,255,0.6)";
  }
}
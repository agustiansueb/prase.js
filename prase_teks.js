function code_check(){
var focuscheck=document.getElementById('tarea');if(focuscheck.value.indexOf('Pastekan Disini Kode yang Akan Anda Pasang pada Postingan Blog')>0)focuscheck.value='';}
function code_clear(){
var wtarea=document.getElementById('tarea');wtarea.value='';}
function code_convert(){
var ctarea=document.getElementById('tarea');var toConvert=ctarea.value;
var toConvert=toConvert.replace(/aku/g,"saya");
var toConvert=toConvert.replace(/Aku/g,"Saya");
var toConvert=toConvert.replace(/saya/g,"aku");
var toConvert=toConvert.replace(/Saya/g,"Aku");
//var toConvert=toConvert.replace(/abadi/g,"kekal");var toConvert=toConvert.replace(/Abadi/g,"Kekal";var toConvert=toConvert.replace(/abad/g,"periode");var toConvert=toConvert.replace(/Abad/g,"Periode");var toConvert=toConvert.replace(/acuh/g,"peduli");var toConvert=toConvert.replace(/Acuh/g,"Peduli");var toConvert=toConvert.replace(/abjad/g,"tulisan");var toConvert=toConvert.replace(/Abjad/g,"Tulisan");var toConvert=toConvert.replace(/aborsi/g,"pengguguran");var toConvert=toConvert.replace(/Aborsi/g,"Pengguguran");var toConvert=toConvert.replace(/abrasi/g,"pengikisan");var toConvert=toConvert.replace(/Abrasi/g,"Pengikisan");var toConvert=toConvert.replace(/absen/g,"bolos");var toConvert=toConvert.replace(/Absen/g,"Bolos");var toConvert=toConvert.replace(/absolut/g,"sepenuh nya");var toConvert=toConvert.replace(/Absolut/g,"Sepenuhnya");var toConvert=toConvert.replace(/adab/g,"tata susila");var toConvert=toConvert.replace(/Adab/g,"Etika");var toConvert=toConvert.replace(/azab/g,"hukuman");var toConvert=toConvert.replace(/Azab/g,"Hukuman");var toConvert=toConvert.replace(/apabila/g,"bilamana");var toConvert=toConvert.replace(/Apabila/g,"Bilamana");
ctarea.value=toConvert;ctarea.focus();ctarea.select();};






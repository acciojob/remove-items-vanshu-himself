//your JS code here. If required.
// const selectedval=document.getElementById("colorSelect");


// function remove(){
// selectedval.remove(selectedval.value)}


const colorSelect=document.getElementById("colorSelect");
const removeBtn=document.querySelector('input[type="button"]');

removeBtn.addEventListener("click",function()
{
	const selectedOpt=colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedOpt);
});


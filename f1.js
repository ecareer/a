function vL(ele)
{
    location.href="https://udyogainfo.blogspot.com/search/label/"+ele.innerHTML;
}
function vH(l)
{
    location.href=l;
}
const ls=document.getElementById("ls");
const rs=document.getElementById("rs");
const o=document.getElementById("o");

function ss(sb)
{
    sb.style.display="block";
    o.style.display="block";
}
function cs()
{
    ls.style.display="none";
    rs.style.display="none";
    o.style.display="none";
}
function killCopy(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}

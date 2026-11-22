const shopPhone = "252615500395";
const products = [
 {name:"",category:"Barafuun",description:"Barafuun udgoon ah. Nala soo xiriir si aad u ogaato faahfaahinta.",image:"images/barafuun.jpeg"},
 {name:"",category:"Barafuun",description:"Doorasho kale oo barafuun ah.",image:"images/barafuun1.jpeg"},
 {name:"",category:"Barafuun",description:"Barafuun kale oo dukaanka yaal.",image:"images/barafuun4.jpeg"},
 {name:"",category:"Kareemmo",description:"Alaabta daryeelka maqaarka.",image:"images/kareem1.jpeg"},
 {name:"",category:"Kareemmo",description:"Doorasho kale oo kareem ah.",image:"images/kareem2.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar1.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar2.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar3.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar4.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar5.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar6.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar7.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar8.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar9.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar10.jpeg"},
 {name:"",category:"Dharka",description:"Dhar laga heli karo Rayan Cosmetics.",image:"images/dhar11.jpeg"},
 {name:"",category:"Caraf",description:"Alaabta carfinta iyo daryeelka.",image:"images/caraf1.jpeg"},
 {name:"",category:"Caraf",description:"Alaabta carfinta iyo daryeelka.",image:"images/caraf2.jpeg"},
 {name:"",category:"Caraf",description:"Alaabta carfinta iyo daryeelka.",image:"images/caraf3.jpeg"},
 {name:"",category:"Caraf",description:"Alaab caraf leh.",image:"images/dov1.jpeg"},
 {name:"",category:"Caraf",description:"Alaabta nadaafadda iyo daryeelka.",image:"images/sabuun1.jpeg"},
 {name:"",category:"Caraf",description:"Alaabta daryeelka timaha.",image:"images/shamboo1.jpeg"},
 {name:"",category:"Caraf",description:"Alaab caraf leh.",image:"images/spray.jpeg"}
];
const list=document.getElementById("product-list");
const search=document.getElementById("search");
const filters=[...document.querySelectorAll(".filter")];
const categoryLinks=[...document.querySelectorAll("[data-category-link]")];
const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("navigation");
let selected="Dhammaan";

function renderProducts(){
 const term=(search?.value||"").trim().toLocaleLowerCase();
 const shown=products.filter(p=>(selected==="Dhammaan"||p.category===selected)&&[p.name,p.category,p.description].some(v=>v.toLocaleLowerCase().includes(term)));
 list.replaceChildren();
 if(!shown.length){const empty=document.createElement("p");empty.className="empty-message";empty.textContent="Alaabtan lama helin. Fadlan mar kale raadi.";list.append(empty);return;}
 shown.forEach(p=>{
  const card=document.createElement("article");card.className="product-card";
  const img=document.createElement("img");img.src=p.image;img.alt=p.name;img.loading="lazy";
  const info=document.createElement("div");info.className="product-info";
  const cat=document.createElement("span");cat.className="product-category";cat.textContent=p.category;
  const title=document.createElement("h3");title.textContent=p.name;
  const desc=document.createElement("p");desc.textContent=p.description;
  const price=document.createElement("div");price.className="product-price";price.textContent="Qiimaha naga weydii";
  const order=document.createElement("a");order.className="order-btn";order.target="_blank";order.rel="noopener noreferrer";
  order.href=`https://wa.me/${shopPhone}?text=${encodeURIComponent(`Salaan Rayan Cosmetics! Waxaan rabaa ${p.name} (${p.category}). Fadlan ii sheeg qiimaha iyo helitaankeeda. Mahadsanidiin.`)}`;
  order.textContent="WhatsApp ku dalbo";
  info.append(cat,title,desc,price,order);card.append(img,info);list.append(card);
 });
}
function chooseCategory(category){
 selected=category;
 filters.forEach(b=>b.classList.toggle("active",b.dataset.filter===category));
 renderProducts();
}
filters.forEach(b=>b.addEventListener("click",()=>chooseCategory(b.dataset.filter)));
categoryLinks.forEach(b=>b.addEventListener("click",()=>{chooseCategory(b.dataset.categoryLink);document.getElementById("products").scrollIntoView({behavior:"smooth"});}));
search?.addEventListener("input",renderProducts);
function closeMenu(){nav?.classList.remove("active");toggle?.setAttribute("aria-expanded","false");toggle.textContent="☰";}
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("active");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
window.addEventListener("resize",()=>{if(window.innerWidth>900)closeMenu();});
renderProducts();

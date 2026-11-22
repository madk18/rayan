const shopPhone = "252615500395";
const products = [
 {name:"Barafuun qurux badan",category:"Barafuun",description:"Barafuun udgoon oo qurux badan.",image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=700&auto=format&fit=crop"},
 {name:"Kareemka wajiga",category:"Kareemmo",description:"Alaabta daryeelka maqaarka.",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop"},
 {name:"Dhar qurux badan",category:"Dharka",description:"Dhar qurux badan oo casri ah.",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop"},
 {name:"Waxyaabaha carfinta",category:"Caraf",description:"Alaab caraf iyo udgoon leh.",image:"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=700&auto=format&fit=crop"},
 {name:"Barafuun kale",category:"Barafuun",description:"Doorasho kale oo udgoon.",image:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=700&auto=format&fit=crop"},
 {name:"Kareemka jirka",category:"Kareemmo",description:"Alaabta daryeelka jirka.",image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700&auto=format&fit=crop"},
 {name:"Dhar casri ah",category:"Dharka",description:"Dhar maalinle ah oo qurux badan.",image:"https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&auto=format&fit=crop"},
 {name:"Alaab udgoon",category:"Caraf",description:"Waxyaabo kale oo caraf leh.",image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&auto=format&fit=crop"}
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

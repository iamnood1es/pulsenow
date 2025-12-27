/* =========================
   news.js - News Data & Functions
========================= */

// Generate random past date within last 14 days
function randomDate(){ 
  const now = new Date();
  const past = new Date(now - Math.random()*14*24*60*60*1000);
  return past.toLocaleString();
}

// Array of news items
let newsItems = [
  {title:"China tech boom outpaces economy",desc:"Realistic tech/economy news",cat:"World",img:"https://images.unsplash.com/photo-1605902711622-cfb43c4430df"},
  {title:"Rare oarfish appears off Tasmania coast",desc:"Strange sea creature spotted",cat:"Science",img:"https://images.unsplash.com/photo-1581092334916-3b6e21f58fc4"},
  {title:"AI writes song that goes viral",desc:"Tech creates musical hit",cat:"Tech",img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},
  {title:"Library book returned after 84 years",desc:"Unusual news from local library",cat:"Weird",img:"https://images.unsplash.com/photo-1512820790803-83ca734da794"},
  {title:"Smart fridge locks itself after midnight",desc:"Tech appliance strange behavior",cat:"Tech",img:"https://images.unsplash.com/photo-1588776814546-ef9e12b6e5ef"},
  {title:"City installs AI traffic lights that judge drivers",desc:"Strange AI traffic system",cat:"World",img:"https://images.unsplash.com/photo-1504215680853-026ed2a45def"},
  {title:"Entire family wakes speaking backwards",desc:"Weird phenomenon reported",cat:"Weird",img:"https://images.unsplash.com/photo-1598136490163-79cbe9f5d097"},
  {title:"New electronic ink allows shape shifting",desc:"Future tech innovation",cat:"Science",img:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},
  {title:"Squirrel knocks out power to 10,000 homes",desc:"Unusual event",cat:"Weird",img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6"},
  {title:"Modern pirate cruises waters after crypto loss",desc:"Weird economy news",cat:"Weird",img:"https://images.unsplash.com/photo-1603249716482-91c1d903f75b"},
  // Add more news as needed
];

// Assign random past date to each news item
newsItems.forEach(n => n.date = randomDate());

// Display news function
function displayNews(filter="All"){
  const container = document.getElementById("news");
  if(!container) return;
  container.innerHTML = "";
  newsItems.filter(n => filter=="All" || n.cat==filter)
           .forEach(n => {
    const el = document.createElement("div");
    el.className = "article";
    el.innerHTML = `
      <img src="${n.img}" alt="">
      <div class="body">
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <div class="meta">${n.cat} • ${n.date}</div>
      </div>
    `;
    container.appendChild(el);
  });
}

// Category filter
function selectCat(category){
  document.querySelectorAll(".nav button").forEach(b => b.classList.remove("active"));
  if(event) event.target.classList.add("active");
  displayNews(category);
}

// Load more function (duplicates current news with new random dates)
function loadMore(){
  newsItems.push(...newsItems.map(n => ({...n, date: randomDate()})));
  displayNews();
}

// Search filter
function filterNews(query){
  document.querySelectorAll('.article').forEach(n => {
    n.style.display = n.innerText.toLowerCase().includes(query.toLowerCase()) ? 'block' : 'none';
  });
}

// Initial display
document.addEventListener("DOMContentLoaded", () => {
  displayNews();
});

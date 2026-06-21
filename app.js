/**
 * Electric Castle 2026 Festival Planner — Application Logic
 * © 2026 Calea Connect (caleaconnect.eu) — All rights reserved
 * Schedule data © Electric Castle / Untold Group
 */
const GENRE_MAP = {
  "Indie / Rock":     {cls:"g-indierock",  label:"Indie/Rock"},
  "Alt. Rock":        {cls:"g-altrock",    label:"Alt. Rock"},
  "Post-Punk":        {cls:"g-postpunk",   label:"Post-Punk"},
  "Hard Rock / Metal":{cls:"g-metal",      label:"Hard Rock"},
  "Punk / Metal":     {cls:"g-metal2",     label:"Punk/Metal"},
  "Hip-Hop / Rap":    {cls:"g-hiphop",     label:"Hip-Hop"},
  "House":            {cls:"g-house",      label:"House"},
  "Techno":           {cls:"g-techno",     label:"Techno"},
  "Drum & Bass":      {cls:"g-dnb",        label:"D&B"},
  "Dubstep":          {cls:"g-dubstep",    label:"Dubstep"},
  "Pop":              {cls:"g-pop",        label:"Pop"},
  "Pop / Alt":        {cls:"g-popalt",     label:"Pop/Alt"},
  "Dub / Reggae":     {cls:"g-dub",        label:"Dub/Reggae"},
  "World / Global":   {cls:"g-world",      label:"World"},
  "Disco / Soul":     {cls:"g-disco",      label:"Disco/Soul"},
  "Melodic Techno":   {cls:"g-melodic",    label:"Melodic Techno"},
  "Afro House":       {cls:"g-afro",       label:"Afro House"},
  "Psychedelic":      {cls:"g-psychedelic",label:"Psychedelic"},
  "Prog / Trip-Hop":  {cls:"g-prog",       label:"Prog/Trip-Hop"},
  "Latin / Cumbia":   {cls:"g-latin",      label:"Latin"},
  "Electro / Funk":   {cls:"g-electro",    label:"Electro/Funk"},
  "Organic / Minimal":{cls:"g-organic",    label:"Organic"},
  "Amapiano":         {cls:"g-amapiano",   label:"Amapiano"},
  "Electronic":       {cls:"g-electronic", label:"Electronic"},
  "Folk / Indie Pop": {cls:"g-folk",       label:"Folk/Indie"},
  "Singer-Songwriter":{cls:"g-singer",     label:"Singer-Swrt."},
  "Ska / Reggae Rock":{cls:"g-ska",        label:"Ska/Reggae"},
  "Funk / Soul":      {cls:"g-funk",       label:"Funk/Soul"},
};

// (day, stage, artist, start, end, genre)
const SCHEDULE = [
  ["Jul 15","CAMPING","DJ ETHYLEN","19:00","22:00","Electronic"],
  ["Jul 15","CAMPING","PARTIBOI69","22:00","23:30","Electronic"],
  ["Jul 15","CAMPING","WILKINSON","23:30","01:00","Drum & Bass"],

  ["Jul 16","MAIN","E-AN-NA","15:20","16:20","Pop"],
  ["Jul 16","MAIN","HVNDS","16:50","17:50","Hip-Hop / Rap"],
  ["Jul 16","MAIN","THE MONO JACKS","18:30","19:30","Indie / Rock"],
  ["Jul 16","MAIN","BALU BRIGADA","20:10","21:10","Indie / Rock"],
  ["Jul 16","MAIN","SLEAFORD MODS","21:50","22:50","Post-Punk"],
  ["Jul 16","MAIN","DUB PISTOLS","23:25","00:25","Ska / Reggae Rock"],
  ["Jul 16","MAIN","KNEECAP","00:45","01:45","Hip-Hop / Rap"],
  ["Jul 16","MAIN","SULLIVAN KING","01:50","03:05","Dubstep"],
  ["Jul 16","HANGAR","Audio State","15:00","16:30","Electronic"],
  ["Jul 16","HANGAR","Raoul","16:30","18:00","Pop / Alt"],
  ["Jul 16","HANGAR","ASHPOT","18:00","19:30","Electronic"],
  ["Jul 16","HANGAR","Utip","19:30","21:00","Electronic"],
  ["Jul 16","HANGAR","MIU","21:00","22:20","Electronic"],
  ["Jul 16","HANGAR","KASABLANCA","22:30","23:50","Melodic Techno"],
  ["Jul 16","HANGAR","SG LEWIS","00:00","02:00","Disco / Soul"],
  ["Jul 16","HANGAR","SOLARDO","02:00","04:00","House"],
  ["Jul 16","HANGAR","MATHEI","04:00","06:00","Electronic"],
  ["Jul 16","BOOHA","Dansen","16:00","18:00","Electronic"],
  ["Jul 16","BOOHA","Elless","18:00","20:00","Electronic"],
  ["Jul 16","BOOHA","Marwan Dua","20:00","22:00","Electronic"],
  ["Jul 16","BOOHA","KITTY AMOR","22:00","00:00","Dub / Reggae"],
  ["Jul 16","BOOHA","Rosey Gold","00:00","02:00","Electronic"],
  ["Jul 16","BOOHA","INDO WAREHOUSE","02:00","04:00","Techno"],
  ["Jul 16","BOOHA","MR. GOODALF","04:00","06:00","Techno"],
  ["Jul 16","HIDEOUT","Socol","14:00","15:30","Electronic"],
  ["Jul 16","HIDEOUT","Pixar Stelar","15:30","17:00","Electronic"],
  ["Jul 16","HIDEOUT","alee who","17:00","18:30","Electronic"],
  ["Jul 16","HIDEOUT","BBLOVE","18:30","20:00","Electronic"],
  ["Jul 16","HIDEOUT","Heaven Can Wait","20:00","21:30","Electronic"],
  ["Jul 16","HIDEOUT","GEORGEVLT","21:30","23:30","House"],
  ["Jul 16","HIDEOUT","Beatheice","23:30","01:00","Techno"],
  ["Jul 16","HIDEOUT","DJ MĂ-TA","01:00","02:30","Electronic"],
  ["Jul 16","HIDEOUT","Paul VLJ","02:30","04:00","Techno"],
  ["Jul 16","PING PONG","FUNKORPORATION","18:40","19:40","Funk / Soul"],
  ["Jul 16","PING PONG","ROMANTIC JURGEN","20:25","21:25","Electronic"],
  ["Jul 16","PING PONG","MAX BABY","22:10","23:10","Electronic"],
  ["Jul 16","PING PONG","KO SHIN MOON","23:40","00:40","World / Global"],
  ["Jul 16","BACKYARD","IRINA MELE","14:00","16:00","Electronic"],
  ["Jul 16","BACKYARD","D'JHU","16:00","18:00","Electronic"],
  ["Jul 16","BACKYARD","K-LU","18:00","20:00","Electronic"],
  ["Jul 16","BACKYARD","MAFALDA","20:00","23:00","Electronic"],
  ["Jul 16","BACKYARD","CONGO NATTY ft. BLACKOUT JA","23:00","01:00","Dub / Reggae"],
  ["Jul 16","BACKYARD","DUBASE","03:00","05:00","Techno"],

  ["Jul 17","MAIN","BOSQUITO","18:00","19:00","Ska / Reggae Rock"],
  ["Jul 17","MAIN","IRINA RIMES","19:30","20:30","Pop"],
  ["Jul 17","MAIN","TEDDY SWIMS","21:10","22:10","Pop"],
  ["Jul 17","MAIN","TWENTY ONE PILOTS","22:55","00:30","Pop / Alt"],
  ["Jul 17","MAIN","MOCHAKK","01:00","02:30","House"],
  ["Jul 17","HANGAR","TANIA TURTUREANU","15:00","16:00","Pop"],
  ["Jul 17","HANGAR","IMPLANT PENTRU REFUZ","16:40","17:40","Punk / Metal"],
  ["Jul 17","HANGAR","Ivan & The Parazol","18:20","19:20","Indie / Rock"],
  ["Jul 17","HANGAR","PACIFICA","20:05","21:05","Indie / Rock"],
  ["Jul 17","HANGAR","HOUSE OF PROTECTION","21:50","22:50","Amapiano"],
  ["Jul 17","HANGAR","SKREAM & BENGA","00:10","01:40","Dubstep"],
  ["Jul 17","HANGAR","Level Up","01:45","02:45","Electronic"],
  ["Jul 17","HANGAR","SUBTRONICS","02:45","04:00","Dubstep"],
  ["Jul 17","BOOHA","Truthday x Cristiana Dicianu","15:00","16:00","Electronic"],
  ["Jul 17","BOOHA","Subliminal","16:00","17:30","Techno"],
  ["Jul 17","BOOHA","DWLS","17:30","19:00","Techno"],
  ["Jul 17","BOOHA","NASTIA","19:00","21:00","Techno"],
  ["Jul 17","BOOHA","LOy","21:00","22:30","Techno"],
  ["Jul 17","BOOHA","Akos","22:30","00:00","Techno"],
  ["Jul 17","BOOHA","ANNA","00:00","02:00","Techno"],
  ["Jul 17","BOOHA","KÖLSCH","02:00","04:00","Melodic Techno"],
  ["Jul 17","BOOHA","Layla Benitez","04:00","06:00","Techno"],
  ["Jul 17","BOOHA","Los Bastoneros","06:00","08:00","Electronic"],
  ["Jul 17","HIDEOUT","Efi","15:30","17:30","Electronic"],
  ["Jul 17","HIDEOUT","ANA KALiSEE","17:30","19:30","Electronic"],
  ["Jul 17","HIDEOUT","Corvin & Buniku","19:30","21:30","Electronic"],
  ["Jul 17","HIDEOUT","LAGARTIJEANDO","21:30","23:00","Latin / Cumbia"],
  ["Jul 17","HIDEOUT","SORAYA","23:00","00:30","Electronic"],
  ["Jul 17","HIDEOUT","SKYLA TYLAA","00:30","02:00","Amapiano"],
  ["Jul 17","HIDEOUT","THEMBA","02:00","04:00","Afro House"],
  ["Jul 17","HIDEOUT","Sainte Vie","04:00","06:00","Electronic"],
  ["Jul 17","HIDEOUT","Sixtee Seconds","06:00","07:30","Electronic"],
  ["Jul 17","PING PONG","Radio Stefunk","14:00","17:00","Electronic"],
  ["Jul 17","PING PONG","Diana Sar","17:00","18:30","Electronic"],
  ["Jul 17","PING PONG","zda","18:30","20:00","Electronic"],
  ["Jul 17","PING PONG","MANDU","20:00","21:00","Electronic"],
  ["Jul 17","PING PONG","Christian Thomson","21:00","22:00","Electronic"],
  ["Jul 17","PING PONG","Betty Bunny","22:00","23:30","Electronic"],
  ["Jul 17","PING PONG","NYSS","23:30","01:00","Electronic"],
  ["Jul 17","PING PONG","ROSA PISTOLA","01:00","03:00","Electronic"],
  ["Jul 17","PING PONG","Enășescu","03:00","04:30","Electronic"],
  ["Jul 17","BACKYARD","ANA COMAN","16:30","17:30","Singer-Songwriter"],
  ["Jul 17","BACKYARD","ARMAND POPA","18:00","19:00","Pop / Alt"],
  ["Jul 17","BACKYARD","DEBDEPAN","19:45","20:45","Electronic"],
  ["Jul 17","BACKYARD","KOIKOI","21:30","22:30","Electronic"],
  ["Jul 17","BACKYARD","GANS","23:10","00:10","Electronic"],
  ["Jul 17","CAMPING","SUGAR","16:00","18:00","Electronic"],
  ["Jul 17","CAMPING","DJ Keyser","18:00","21:00","Electronic"],
  ["Jul 17","CAMPING","GIA FU","21:00","23:00","Electronic"],
  ["Jul 17","CAMPING","QUANTIC (DJ set)","23:00","01:00","World / Global"],
  ["Jul 17","CAMPING","MIND ENTERPRISES","01:00","02:30","Disco / Soul"],
  ["Jul 17","CAMPING","ACID PAULI","02:30","04:30","Psychedelic"],
  ["Jul 17","CAMPING","DODO","04:30","06:30","Electronic"],

  ["Jul 18","MAIN","TARAPHONICS","18:00","19:00","Pop / Alt"],
  ["Jul 18","MAIN","THE MOTANS","19:40","20:40","Pop"],
  ["Jul 18","MAIN","LP","21:20","22:20","Pop"],
  ["Jul 18","MAIN","NOTHING BUT THIEVES","23:00","00:00","Indie / Rock"],
  ["Jul 18","MAIN","CHASE & STATUS","00:40","02:10","Drum & Bass"],
  ["Jul 18","HANGAR","UNDERWAVES","14:00","14:45","Hard Rock / Metal"],
  ["Jul 18","HANGAR","BYRON","15:20","16:20","Indie / Rock"],
  ["Jul 18","HANGAR","LUNA AMARĂ","17:00","18:00","Hard Rock / Metal"],
  ["Jul 18","HANGAR","KID KAPICHI","18:40","19:40","Indie / Rock"],
  ["Jul 18","HANGAR","MAVERICK SABRE","20:20","21:20","Pop"],
  ["Jul 18","HANGAR","ARCHIVE","22:00","23:10","Prog / Trip-Hop"],
  ["Jul 18","HANGAR","YUNG LEAN & BLADEE","23:50","00:50","Hip-Hop / Rap"],
  ["Jul 18","HANGAR","AARON HIBELL","01:10","02:10","Electronic"],
  ["Jul 18","HANGAR","JAX JONES","02:20","03:50","House"],
  ["Jul 18","BOOHA","Zo","14:30","16:30","Electronic"],
  ["Jul 18","BOOHA","BLOCKSBERG & MEMPHYS","16:30","17:30","Electronic"],
  ["Jul 18","BOOHA","Pola & Bryson","17:30","19:00","Drum & Bass"],
  ["Jul 18","BOOHA","DJ MARKY","19:00","21:00","Drum & Bass"],
  ["Jul 18","BOOHA","Jay Bliss","21:00","22:30","Electronic"],
  ["Jul 18","BOOHA","Mihai Popoviciu","22:30","00:30","Techno"],
  ["Jul 18","BOOHA","Denis Sulta","00:30","02:00","House"],
  ["Jul 18","BOOHA","DEEP DISH","02:00","05:00","House"],
  ["Jul 18","BOOHA","PRIKU","05:00","08:00","Techno"],
  ["Jul 18","HIDEOUT","Bajzat","14:30","16:30","Electronic"],
  ["Jul 18","HIDEOUT","Audaks","16:30","18:30","Electronic"],
  ["Jul 18","HIDEOUT","AFTERMATH","18:30","20:30","Electronic"],
  ["Jul 18","HIDEOUT","Bross","20:30","22:30","Electronic"],
  ["Jul 18","HIDEOUT","SWIMMING PAUL","22:30","00:00","Electronic"],
  ["Jul 18","HIDEOUT","SATORI","00:00","02:00","Organic / Minimal"],
  ["Jul 18","HIDEOUT","KILIMANJARO","02:00","04:00","Electronic"],
  ["Jul 18","HIDEOUT","Ozlemelk","04:00","06:00","Electronic"],
  ["Jul 18","PING PONG","Andreea Tupeu","14:00","15:30","Electronic"],
  ["Jul 18","PING PONG","Popblock","15:30","17:00","Electronic"],
  ["Jul 18","PING PONG","Electric Brother","17:00","18:30","Electronic"],
  ["Jul 18","PING PONG","DJ Vasile","18:30","19:30","Electronic"],
  ["Jul 18","PING PONG","Tudoran (CA$$A LOCO)","19:30","20:30","Electronic"],
  ["Jul 18","PING PONG","DJ Undoo","20:30","22:00","Electronic"],
  ["Jul 18","PING PONG","Boys and Tears","22:00","23:30","Electronic"],
  ["Jul 18","PING PONG","DJ Magda","23:30","01:30","Techno"],
  ["Jul 18","PING PONG","Frost Children (DJ Set)","01:40","02:40","Electronic"],
  ["Jul 18","PING PONG","ON THE BLOCK","02:40","04:10","Hip-Hop / Rap"],
  ["Jul 18","BACKYARD","NIDAL","17:30","18:20","Electronic"],
  ["Jul 18","BACKYARD","NUANȚE","19:00","20:00","Alt. Rock"],
  ["Jul 18","BACKYARD","HONEYGLAZE","20:30","21:30","Indie / Rock"],
  ["Jul 18","BACKYARD","SUNNAN","22:15","23:15","Indie / Rock"],
  ["Jul 18","BACKYARD","LA SÉCURITÉ","00:05","01:05","Post-Punk"],
  ["Jul 18","CAMPING","TRINKOVA","14:00","16:00","Electronic"],
  ["Jul 18","CAMPING","ANDREI PUIU","16:00","18:00","Electronic"],
  ["Jul 18","CAMPING","INFRAGANDHI","18:00","20:00","Electronic"],
  ["Jul 18","CAMPING","DJ SAUCE","20:00","22:00","Electronic"],
  ["Jul 18","CAMPING","EGYPTIAN LOVER","22:00","00:00","Electro / Funk"],
  ["Jul 18","CAMPING","SOULEANCE","00:00","02:00","Disco / Soul"],
  ["Jul 18","CAMPING","ECLAIR FIFI","02:00","04:00","House"],
  ["Jul 18","CAMPING","MITSUBITCHI b2b MINI ZUCCHINI","04:00","06:00","Electronic"],

  ["Jul 19","MAIN","OM LA LUNĂ","17:00","18:00","Alt. Rock"],
  ["Jul 19","MAIN","VIȚA DE VIE","18:40","19:40","Alt. Rock"],
  ["Jul 19","MAIN","WET LEG","20:15","21:15","Post-Punk"],
  ["Jul 19","MAIN","THE CURE","22:00","00:00","Post-Punk"],
  ["Jul 19","HANGAR","ORA DE PUNK","14:00","15:20","Punk / Metal"],
  ["Jul 19","HANGAR","CELELALTE CUVINTE","15:55","16:55","Post-Punk"],
  ["Jul 19","HANGAR","ROBIN AND THE BACKSTABBERS","17:30","18:30","Folk / Indie Pop"],
  ["Jul 19","HANGAR","YĨN YĨN","19:10","20:10","Psychedelic"],
  ["Jul 19","HANGAR","DOGSTAR","20:50","21:50","Indie / Rock"],
  ["Jul 19","HANGAR","TRINiX","00:35","01:50","Electronic"],
  ["Jul 19","BOOHA","GIULEE","14:00","15:30","Electronic"],
  ["Jul 19","BOOHA","Vygo","15:30","17:30","Electronic"],
  ["Jul 19","BOOHA","Atmann b2b Boda","17:30","19:00","Electronic"],
  ["Jul 19","BOOHA","Jess Iszatt","19:00","21:00","Techno"],
  ["Jul 19","BOOHA","MECHATOK","21:00","22:30","Electronic"],
  ["Jul 19","BOOHA","ELIZA ROSE","22:30","00:30","House"],
  ["Jul 19","BOOHA","GERD JANSON","00:30","02:30","House"],
  ["Jul 19","BOOHA","Missile","02:30","04:30","Techno"],
  ["Jul 19","HIDEOUT","Cemi","17:00","19:00","Electronic"],
  ["Jul 19","HIDEOUT","Oktopus","19:00","21:00","Electronic"],
  ["Jul 19","HIDEOUT","Volt","21:00","23:00","Electronic"],
  ["Jul 19","HIDEOUT","BARON","23:00","01:00","Electronic"],
  ["Jul 19","HIDEOUT","DEER JADE","01:00","03:00","Electronic"],
  ["Jul 19","HIDEOUT","Gabriel M b2b Tonia","03:00","05:00","Electronic"],
  ["Jul 19","PING PONG","OLAF","14:00","15:30","Electronic"],
  ["Jul 19","PING PONG","Muri","15:30","17:00","Electronic"],
  ["Jul 19","PING PONG","Tripster","17:00","18:30","Electronic"],
  ["Jul 19","PING PONG","Baba","18:30","20:00","Electronic"],
  ["Jul 19","PING PONG","ARTÉMIS","20:00","21:30","Electronic"],
  ["Jul 19","PING PONG","DENY","21:30","23:00","Electronic"],
  ["Jul 19","PING PONG","Mihu (Hanging Around)","00:00","01:00","Electronic"],
  ["Jul 19","PING PONG","New Disorder","01:00","03:00","Electronic"],
  ["Jul 19","BACKYARD","ANAIS VACARIU","15:00","16:00","Singer-Songwriter"],
  ["Jul 19","BACKYARD","MIAU.WAV","16:30","17:30","Electronic"],
  ["Jul 19","BACKYARD","Oddisee & Good Compny","18:00","19:00","Hip-Hop / Rap"],
  ["Jul 19","BACKYARD","JUST MUSTARD","19:30","20:30","Post-Punk"],
  ["Jul 19","CAMPING","STF","15:00","17:00","Electronic"],
  ["Jul 19","CAMPING","RAPALA","17:00","19:00","Electronic"],
  ["Jul 19","CAMPING","CALIBRO 45","19:00","20:30","Electronic"],
  ["Jul 19","CAMPING","BULLY","20:30","22:30","Electronic"],
  ["Jul 19","CAMPING","ACID ARAB (DJ set)","22:30","00:30","World / Global"],
  ["Jul 19","CAMPING","Gojnea76","00:30","02:30","Electronic"],
  ["Jul 19","CAMPING","Ogazón b2b Ryan Elliott","02:30","05:30","Electronic"],
];

const DAYS = ["Jul 15","Jul 16","Jul 17","Jul 18","Jul 19"];
const DAY_LABELS = {
  "Jul 15":"Wed 15 Jul – Opening",
  "Jul 16":"Thu 16 Jul",
  "Jul 17":"Fri 17 Jul",
  "Jul 18":"Sat 18 Jul",
  "Jul 19":"Sun 19 Jul",
};
const STAGE_ORDER = ["MAIN","HANGAR","BOOHA","HIDEOUT","PING PONG","BACKYARD","CAMPING"];
const STAGE_FULL = {
  "MAIN":"Main Stage","HANGAR":"Hangar Stage","BOOHA":"Booha Stage",
  "HIDEOUT":"Hideout Stage","PING PONG":"Ping Pong","BACKYARD":"Backyard","CAMPING":"Camping Stage"
};

let picks = new Set();
let activeDay = "all";
let activeGenres = new Set();
let searchQ = "";
let viewMode = "list"; // "list" | "timetable"

function timeToMin(t){
  const [h,m]=t.split(":").map(Number);
  return (h<9?h+24:h)*60+m;
}

function init(){
  buildTabs(); buildGenreFilters(); render(); renderPicks();
}

function buildTabs(){
  const el=document.getElementById("dayTabs");
  el.innerHTML=`<button class="tab active" onclick="setDay('all',this)">All days</button>`
    +DAYS.map(d=>`<button class="tab" onclick="setDay('${d}',this)">${DAY_LABELS[d]}</button>`).join("");
}

function buildGenreFilters(){
  const genres=[...new Set(SCHEDULE.map(a=>a[5]))].sort();
  const el=document.getElementById("genreFilters");
  el.innerHTML='<span class="filter-label">Genre:</span>'
    +genres.map(g=>{
      const info=GENRE_MAP[g]||{cls:"g-electronic",label:g};
      return `<span class="chip ${info.cls}" data-genre="${g}" onclick="toggleGenre('${g}',this)"><span class="dot"></span>${info.label}</span>`;
    }).join("");
}

function setDay(day,el){
  activeDay=day;
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
  render();
}
function setView(v){
  viewMode=v;
  document.getElementById("btnList").classList.toggle("active",v==="list");
  document.getElementById("btnTT").classList.toggle("active",v==="timetable");
  render();
}
function toggleGenre(genre,el){
  activeGenres.has(genre)?activeGenres.delete(genre):activeGenres.add(genre);
  el.classList.toggle("active",activeGenres.has(genre));
  filterAll();
}
function filterAll(){
  searchQ=document.getElementById("searchInput").value.toLowerCase();
  if(viewMode==="list"){
    document.querySelectorAll(".act-card").forEach(card=>{
      const ok=(!searchQ||card.dataset.name.includes(searchQ))
              &&(activeGenres.size===0||activeGenres.has(card.dataset.genre))
              &&(activeDay==="all"||card.dataset.day===activeDay);
      card.classList.toggle("hidden",!ok);
    });
    document.querySelectorAll(".day-section").forEach(sec=>{
      sec.style.display=[...sec.querySelectorAll(".act-card")].some(c=>!c.classList.contains("hidden"))?"":"none";
    });
  } else {
    document.querySelectorAll(".tt-cell").forEach(cell=>{
      const ok=(!searchQ||cell.dataset.name.includes(searchQ))
              &&(activeGenres.size===0||activeGenres.has(cell.dataset.genre));
      cell.classList.toggle("hidden-tt",!ok);
    });
  }
}

function render(){
  if(viewMode==="list") renderList();
  else renderTimetable();
  setTimeout(filterAll,0);
}

function actClass(genre){
  return (GENRE_MAP[genre]||{cls:"g-electronic"}).cls;
}

// ── LIST VIEW ───────────────────────────────────────────────────────────────
function renderList(){
  const panel=document.getElementById("schedulePanel");
  const days=activeDay==="all"?DAYS:[activeDay];
  panel.innerHTML=days.map(day=>{
    const acts=SCHEDULE.filter(a=>a[0]===day);
    if(!acts.length) return "";
    return `<div class="day-section">
      <div class="day-header"><span>⚡</span>${DAY_LABELS[day]}</div>
      <div class="acts-grid">${acts.map(actCard).join("")}</div>
    </div>`;
  }).join("");
}
function actCard(a){
  const [day,stage,artist,start,end,genre]=a;
  const info=GENRE_MAP[genre]||{cls:"g-electronic",label:genre};
  const id=`${day}|${stage}|${artist}`;
  const picked=picks.has(id);
  return `<div class="act-card ${info.cls}${picked?" picked":""}" data-id="${id}" data-name="${artist.toLowerCase()}" data-genre="${genre}" data-day="${day}" onclick="togglePick('${id}')">
    <button class="pick-btn" aria-label="Pick">${picked?"✓":""}</button>
    <div class="act-info">
      <div class="act-name">${artist}</div>
      <div class="act-meta">
        <span class="act-time">${start}–${end}</span>
        <span class="act-stage">${STAGE_FULL[stage]||stage}</span>
        <span class="act-genre">${info.label}</span>
      </div>
    </div>
  </div>`;
}

// ── TIMETABLE VIEW ──────────────────────────────────────────────────────────
function renderTimetable(){
  const panel=document.getElementById("schedulePanel");
  const days=activeDay==="all"?DAYS:[activeDay];
  panel.innerHTML=days.map(day=>{
    const acts=SCHEDULE.filter(a=>a[0]===day);
    if(!acts.length) return "";
    const stages=STAGE_ORDER.filter(s=>acts.some(a=>a[1]===s));
    const times=acts.flatMap(a=>[timeToMin(a[3]),timeToMin(a[4])]);
    const tMin=Math.floor(Math.min(...times)/30)*30;
    const tMax=Math.ceil(Math.max(...times)/30)*30;
    const slots=[];
    for(let m=tMin;m<tMax;m+=30) slots.push(m);

    // Build cell map: stage -> array of {act, startSlot, spanSlots}
    const cellMap={};
    stages.forEach(s=>{
      cellMap[s]={};
      const stageActs=acts.filter(a=>a[1]===s);
      stageActs.forEach(a=>{
        const sMin=timeToMin(a[3]);
        const slotIdx=slots.findIndex(t=>t<=sMin && sMin<t+30);
        if(slotIdx>=0) cellMap[s][slotIdx]={act:a,span:Math.max(1,Math.round((timeToMin(a[4])-sMin)/30))};
      });
    });

    const stageHeaders=stages.map(s=>`<th>${STAGE_FULL[s]||s}</th>`).join("");
    const rows=slots.map((slotMin,si)=>{
      const h=Math.floor(slotMin/60)%24;
      const m=slotMin%60;
      const label=m===0?`${String(h).padStart(2,"0")}:00`:`${String(h).padStart(2,"0")}:30`;
      const isHour=m===0;
      const cells=stages.map(s=>{
        if(cellMap[s][si]){
          const {act,span}=cellMap[s][si];
          const [d,stage,artist,start,end,genre]=act;
          const id=`${d}|${stage}|${artist}`;
          const info=GENRE_MAP[genre]||{cls:"g-electronic",label:genre};
          const picked=picks.has(id);
          return `<td rowspan="${span}"><div class="tt-cell ${info.cls}${picked?" picked":""}" data-id="${id}" data-name="${artist.toLowerCase()}" data-genre="${genre}" onclick="togglePick('${id}')">
            <div class="tt-name">${artist}</div>
            <div class="tt-time">${start}–${end}</div>
            <div class="tt-genre">${info.label}</div>
          </div></td>`;
        }
        // check if this slot is covered by a rowspan above
        for(let prev=0;prev<si;prev++){
          if(cellMap[s][prev]){
            const {span}=cellMap[s][prev];
            if(prev+span>si) return ""; // covered
          }
        }
        return `<td class="tt-empty"></td>`;
      }).join("");
      return `<tr><td class="time-cell${isHour?" hour-row":""}">${label}</td>${cells}</tr>`;
    }).join("");

    return `<div class="day-section">
      <div class="day-header"><span>⚡</span>${DAY_LABELS[day]}</div>
      <div class="timetable-wrap">
        <table class="timetable">
          <thead><tr><th class="time-col">Time</th>${stageHeaders}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
  }).join("");
}

// ── PICKS ───────────────────────────────────────────────────────────────────
function togglePick(id){
  picks.has(id)?picks.delete(id):picks.add(id);
  // update list view card
  const card=document.querySelector(`.act-card[data-id="${id}"]`);
  if(card){card.classList.toggle("picked",picks.has(id));card.querySelector(".pick-btn").textContent=picks.has(id)?"✓":"";}
  // update timetable cell
  const cell=document.querySelector(`.tt-cell[data-id="${id}"]`);
  if(cell) cell.classList.toggle("picked",picks.has(id));
  renderPicks();
}

function detectConflicts(pa){
  const c=new Set();
  for(let i=0;i<pa.length;i++) for(let j=i+1;j<pa.length;j++){
    const a=pa[i],b=pa[j];
    if(a[0]!==b[0]) continue;
    const aS=timeToMin(a[3]),aE=timeToMin(a[4]),bS=timeToMin(b[3]),bE=timeToMin(b[4]);
    if(aS<bE&&bS<aE){c.add(`${a[0]}|${a[1]}|${a[2]}`);c.add(`${b[0]}|${b[1]}|${b[2]}`);}
  }
  return c;
}

function renderPicks(){
  document.getElementById("picksCount").textContent=picks.size;
  const content=document.getElementById("picksContent");
  if(!picks.size){
    content.innerHTML=`<div class="picks-empty"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg><p style="font-size:12px;">Click any act<br>to add it here</p></div>`;
    return;
  }
  const pa=SCHEDULE.filter(a=>picks.has(`${a[0]}|${a[1]}|${a[2]}`));
  pa.sort((a,b)=>DAYS.indexOf(a[0])-DAYS.indexOf(b[0])||timeToMin(a[3])-timeToMin(b[3]));
  const cf=detectConflicts(pa);
  const byDay={};
  pa.forEach(a=>{(byDay[a[0]]=byDay[a[0]]||[]).push(a);});
  content.innerHTML=Object.entries(byDay).map(([day,acts])=>{
    return `<div style="margin-bottom:12px;"><div class="pick-day-label">${DAY_LABELS[day]}</div>`
      +acts.map(a=>{
        const id=`${a[0]}|${a[1]}|${a[2]}`;
        const info=GENRE_MAP[a[5]]||{cls:"g-electronic"};
        const hasC=cf.has(id);
        return `<div class="pick-item ${info.cls}" onclick="togglePick('${id}')">
          <div class="pick-item-info">
            <div class="pick-item-name">${a[2]}</div>
            <div class="pick-item-meta">${a[3]}–${a[4]} · ${STAGE_FULL[a[1]]||a[1]}${hasC?' <span class="conflict">⚠ overlap</span>':''}</div>
          </div>
          <button class="pick-item-remove" title="Remove">✕</button>
        </div>`;
      }).join("")+"</div>";
  }).join("");
}

function clearPicks(){
  if(!confirm(`Clear all ${picks.size} picks?`)) return;
  picks.clear();
  document.querySelectorAll(".act-card.picked,.tt-cell.picked").forEach(c=>{
    c.classList.remove("picked");
    const btn=c.querySelector(".pick-btn");
    if(btn) btn.textContent="";
  });
  renderPicks();
}



// ── TXT EXPORT (renamed) ────────────────────────────────────────────────────
function exportTxt(){
  if(!picks.size){alert("No picks selected.");return;}
  const pa=SCHEDULE.filter(a=>picks.has(`${a[0]}|${a[1]}|${a[2]}`));
  pa.sort((a,b)=>DAYS.indexOf(a[0])-DAYS.indexOf(b[0])||timeToMin(a[3])-timeToMin(b[3]));
  const cf=detectConflicts(pa);
  const byDay={};pa.forEach(a=>{(byDay[a[0]]=byDay[a[0]]||[]).push(a);});
  let txt="⚡ ELECTRIC CASTLE 2026 – MY SCHEDULE\n";
  txt+="Planner by Calea Connect · caleaconnect.eu\n";
  txt+="Generated on "+new Date().toLocaleDateString("en-GB")+"\n"+"=".repeat(50)+"\n\n";
  Object.entries(byDay).forEach(([day,acts])=>{
    txt+=`📅 ${DAY_LABELS[day].toUpperCase()}\n${"-".repeat(40)}\n`;
    acts.forEach(a=>{
      const id=`${a[0]}|${a[1]}|${a[2]}`;
      txt+=`  ${a[3]}–${a[4]}  ${a[2].padEnd(32)} ${(STAGE_FULL[a[1]]||a[1]).padEnd(16)} ${a[5]}${cf.has(id)?" ⚠ OVERLAP":""}\n`;
    });
    txt+="\n";
  });
  if(cf.size) txt+="⚠ OVERLAPS DETECTED – check acts marked with ⚠\n";
  txt+="\nPlanner by Calea Connect · caleaconnect.eu\nSchedule data © Electric Castle / Untold Group\n";
  const blob=new Blob([txt],{type:"text/plain"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download="EC2026_CaleaConnect_schedule.txt";a.click();URL.revokeObjectURL(url);
}

// ── ICS EXPORT ───────────────────────────────────────────────────────────────
function exportICS(){
  if(!picks.size){alert("No picks selected.");return;}
  const pa=SCHEDULE.filter(a=>picks.has(`${a[0]}|${a[1]}|${a[2]}`));
  const DAY_DATES={"Jul 15":"20260715","Jul 16":"20260716","Jul 17":"20260717","Jul 18":"20260718","Jul 19":"20260719","Jul 20":"20260720"};

  function toICSTime(dayKey,timeStr){
    // times after midnight belong to the next calendar day
    const [h,m]=timeStr.split(":").map(Number);
    let dateStr=DAY_DATES[dayKey];
    if(h<9){
      // next calendar day
      const d=new Date(parseInt(dateStr.slice(0,4)),parseInt(dateStr.slice(4,6))-1,parseInt(dateStr.slice(6,8)));
      d.setDate(d.getDate()+1);
      dateStr=d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0");
    }
    return `${dateStr}T${String(h).padStart(2,"0")}${String(m).padStart(2,"0")}00`;
  }

  function esc(s){return s.replace(/[\n,;]/g," ");}

  let ics="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Calea Connect//EC2026 Planner//EN\r\nCALSCALE:GREGORIAN\r\nX-WR-CALNAME:Electric Castle 2026 – Calea Connect Planner\r\nX-WR-TIMEZONE:Europe/Bucharest\r\n";

  pa.forEach(a=>{
    const [day,stage,artist,start,end,genre]=a;
    const uid=`ec2026-${day.replace(" ","")}-${artist.replace(/[^a-z0-9]/gi,"")}-${start.replace(":","")
}@ec2026`;
    const dtStart=toICSTime(day,start);
    const dtEnd=toICSTime(day,end);
    ics+=`BEGIN:VEVENT\r\nUID:${uid}\r\nDTSTART;TZID=Europe/Bucharest:${dtStart}\r\nDTEND;TZID=Europe/Bucharest:${dtEnd}\r\nSUMMARY:${esc(artist)}\r\nLOCATION:${esc(STAGE_FULL[stage]||stage)} – Bánffy Castle, Bonțida\r\nDESCRIPTION:Genre: ${esc(genre)} · Planner by Calea Connect (caleaconnect.eu)\r\nEND:VEVENT\r\n`;
  });

  ics+="END:VCALENDAR";
  const blob=new Blob([ics],{type:"text/calendar;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;a.download="EC2026_CaleaConnect_schedule.ics";a.click();URL.revokeObjectURL(url);
}

// ── PDF PRINT ────────────────────────────────────────────────────────────────
function exportPDF(){
  if(!picks.size){alert("No picks selected.");return;}
  const pa=SCHEDULE.filter(a=>picks.has(`${a[0]}|${a[1]}|${a[2]}`));
  pa.sort((a,b)=>DAYS.indexOf(a[0])-DAYS.indexOf(b[0])||timeToMin(a[3])-timeToMin(b[3]));
  const cf=detectConflicts(pa);
  const byDay={};pa.forEach(a=>{(byDay[a[0]]=byDay[a[0]]||[]).push(a);});

  const GENRE_COLORS={
    "Indie / Rock":"#4ade80","Alt. Rock":"#86efac","Post-Punk":"#f472b6",
    "Hip-Hop / Rap":"#fb923c","House":"#60a5fa","Techno":"#a78bfa",
    "Drum & Bass":"#34d399","Dubstep":"#f87171","Pop":"#fbbf24","Pop / Alt":"#f0abfc",
    "Dub / Reggae":"#6ee7b7","World / Global":"#e879f9","Disco / Soul":"#f9a8d4",
    "Melodic Techno":"#93c5fd","Afro House":"#fcd34d","Psychedelic":"#c4b5fd",
    "Prog / Trip-Hop":"#5eead4","Latin / Cumbia":"#fdba74","Electro / Funk":"#67e8f9",
    "Organic / Minimal":"#bbf7d0","Punk / Metal":"#ff6b6b","Hard Rock / Metal":"#fca5a5",
    "Amapiano":"#fde68a","Electronic":"#818cf8","Folk / Indie Pop":"#d9f99d",
    "Singer-Songwriter":"#e2e8f0","Ska / Reggae Rock":"#a3e635","Funk / Soul":"#ff9f43",
  };

  let rows="";
  Object.entries(byDay).forEach(([day,acts])=>{
    rows+=`<tr><td colspan="5" class="day-head">⚡ ${DAY_LABELS[day].toUpperCase()}</td></tr>`;
    acts.forEach(a=>{
      const id=`${a[0]}|${a[1]}|${a[2]}`;
      const col=GENRE_COLORS[a[5]]||"#818cf8";
      const ov=cf.has(id)?'<span class="ov">⚠ overlap</span>':"";
      rows+=`<tr>
        <td class="time">${a[3]}–${a[4]}</td>
        <td class="artist">${a[2]}</td>
        <td class="stage">${STAGE_FULL[a[1]]||a[1]}</td>
        <td class="genre"><span class="gbadge" style="background:${col}22;color:${col};border:1px solid ${col}55">${a[5]}</span></td>
        <td>${ov}</td>
      </tr>`;
    });
  });

  const w=window.open("","_blank","width=800,height=900");
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
<title>EC2026 – My Schedule · Calea Connect</title>
<style>
  body{font-family:'Inter',Arial,sans-serif;font-size:12px;color:#111;padding:32px;max-width:800px;margin:0 auto;}
  h1{font-size:20px;font-weight:800;margin-bottom:4px;}
  p.sub{color:#666;font-size:11px;margin-bottom:24px;}
  table{width:100%;border-collapse:collapse;}
  td,th{padding:6px 10px;text-align:left;border-bottom:1px solid #eee;vertical-align:middle;}
  th{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#888;border-bottom:2px solid #ddd;}
  tr:hover td{background:#fafafa;}
  .day-head{background:#111;color:#e8c840;font-weight:700;font-size:11px;letter-spacing:1px;padding:8px 10px;}
  .time{font-variant-numeric:tabular-nums;font-weight:600;white-space:nowrap;color:#333;}
  .artist{font-weight:700;}
  .stage{color:#555;font-size:11px;}
  .gbadge{padding:2px 7px;border-radius:99px;font-size:10px;font-weight:600;}
  .ov{font-size:10px;font-weight:700;color:#dc2626;background:#fee2e2;padding:2px 6px;border-radius:4px;}
  @media print{body{padding:16px;} @page{margin:16mm;}}
</style></head><body>
<h1>⚡ Electric Castle 2026 – My Schedule</h1>
<p class="sub">Planner by Calea Connect · caleaconnect.eu</p>
<p class="sub">16–19 July · Bánffy Castle, Bonțida · Generated ${new Date().toLocaleDateString("en-GB")}</p>
<table>
  <thead><tr><th>Time</th><th>Artist</th><th>Stage</th><th>Genre</th><th></th></tr></thead>
  <tbody>${rows}</tbody>
</table>
<p style="margin-top:18px;color:#666;font-size:10px;line-height:1.6;">Planner by Calea Connect · caleaconnect.eu<br>Schedule data © Electric Castle / Untold Group</p>
</body></html>`);
  w.document.close();
  setTimeout(()=>w.print(),400);
}

// ── URL SHARING ──────────────────────────────────────────────────────────────
function encodePicks(){
  // Each pick is "day|stage|artist" — encode index into SCHEDULE array
  const indices=[];
  SCHEDULE.forEach((a,i)=>{
    if(picks.has(`${a[0]}|${a[1]}|${a[2]}`)) indices.push(i);
  });
  return btoa(indices.join(","));
}

function decodePicks(encoded){
  try{
    const indices=atob(encoded).split(",").map(Number).filter(n=>!isNaN(n)&&n>=0&&n<SCHEDULE.length);
    indices.forEach(i=>{
      const a=SCHEDULE[i];
      picks.add(`${a[0]}|${a[1]}|${a[2]}`);
    });
  }catch(e){console.warn("Could not decode picks from URL");}
}

function getShareURL(){
  const encoded=encodePicks();
  const base=location.href.split("?")[0].split("#")[0];
  return `${base}?picks=${encoded}`;
}

function sharePicks(){
  if(!picks.size){alert("No picks to share yet — add some acts first!");return;}
  const menu=document.getElementById("shareMenu");
  if(menu) menu.classList.toggle("open");
}

function shareViaWhatsApp(){
  if(!picks.size){alert("No picks to share yet!");return;}
  const url=getShareURL();
  const pa=SCHEDULE.filter(a=>picks.has(`${a[0]}|${a[1]}|${a[2]}`));
  pa.sort((a,b)=>DAYS.indexOf(a[0])-DAYS.indexOf(b[0])||timeToMin(a[3])-timeToMin(b[3]));
  const lines=pa.map(a=>`${a[3]} ${a[2]} (${STAGE_FULL[a[1]]||a[1]})`);
  const preview=lines.slice(0,5).join("\n")+(lines.length>5?`\n...and ${lines.length-5} more`:"");
  const msg=`⚡ My Electric Castle 2026 picks via Calea Connect:\n${preview}\n\nSee full schedule: ${url}\n\nPlanner by Calea Connect · caleaconnect.eu`;
  const waUrl="https://wa.me/?text="+encodeURIComponent(msg);
  window.open(waUrl,"_blank","noopener,noreferrer");
  closeShareMenu();
}

function shareViaCopyLink(){
  if(!picks.size){alert("No picks to share yet!");return;}
  const url=getShareURL();
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(()=>{showShareNotif("🔗 Link copied to clipboard!");closeShareMenu();}).catch(()=>fallbackCopy(url));
  } else { fallbackCopy(url); }
}

function shareViaNavigator(){
  if(!picks.size){return;}
  const url=getShareURL();
  if(navigator.share){
    navigator.share({title:"Electric Castle 2026 – My picks",text:"Check out my EC2026 schedule!",url}).catch(()=>{});
    closeShareMenu();
  } else { shareViaCopyLink(); }
}

function closeShareMenu(){
  const m=document.getElementById("shareMenu");
  if(m) m.classList.remove("open");
}

// Close menu on outside click
document.addEventListener("click",e=>{
  const menu=document.getElementById("shareMenu");
  const btn=document.getElementById("shareDropdown");
  if(menu&&!menu.contains(e.target)&&btn&&!btn.contains(e.target)){
    menu.classList.remove("open");
  }
});

function fallbackCopy(url){
  const ta=document.createElement("textarea");
  ta.value=url;ta.style.position="fixed";ta.style.opacity="0";
  document.body.appendChild(ta);ta.focus();ta.select();
  try{document.execCommand("copy");showShareNotif("🔗 Link copied to clipboard!");}
  catch{prompt("Copy this link:",url);}
  document.body.removeChild(ta);
}

function showShareNotif(msg){
  const el=document.getElementById("shareNotif");
  document.getElementById("shareNotifText").textContent=msg;
  el.style.display="flex";
  clearTimeout(el._t);
  el._t=setTimeout(()=>{el.style.display="none";},3000);
}

function loadPicksFromURL(){
  const params=new URLSearchParams(location.search);
  const encoded=params.get("picks");
  if(encoded){
    decodePicks(encoded);
    // clean URL without reloading
    history.replaceState(null,"",location.pathname);
    setTimeout(()=>showShareNotif("✅ "+picks.size+" picks loaded from shared link!"),500);
  }
}


loadPicksFromURL();
init();
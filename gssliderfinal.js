(function(){
if(window.__gsSlider)return;
window.__gsSlider=true;

var REPO='https://raw.githubusercontent.com/janmaeusbacher-cpu/gentrifizierung-3d/main/';
var U1=REPO+'Meshy_AI_generiere_einen_alten_0420115809_generate.glb';
var U2=REPO+'Meshy_AI_erstelle_einen_kleine_0420121815_generate.glb';
var U3=REPO+'alte_wohnung.glb';
var U4=REPO+'luxus_wohnung.glb';
var DIST_FAR=8,DIST_NEAR=3,FOV='20deg';
var mouseX=0,mouseY=0;

document.addEventListener('mousemove',function(e){
  mouseX=(e.clientX/window.innerWidth-0.5)*2;
  mouseY=(e.clientY/window.innerHeight-0.5)*2;
});

function init(){
  var w=document.getElementById('gsWrap');
  if(!w){setTimeout(init,200);return;}
  if(document.getElementById('scene1'))return;

  var css=document.createElement('style');
  css.textContent='html,body{margin:0!important;padding:0!important;background:#000!important}.gs-scene{position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden;transition:opacity 0.6s ease;z-index:100}.gs-scene.hidden{opacity:0;pointer-events:none}.gs-layer{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.gs-before{background:linear-gradient(135deg,#2a1810,#4a2818 50%,#6b3a1f);color:#f4e4d0;z-index:1}.gs-after{background:#b0b0b0;color:#1a1a1a;z-index:2;clip-path:inset(0 0 0 50%)}.gs-model{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.gs-model model-viewer{width:100%;height:100%;display:block;background:transparent;--poster-color:transparent}.gs-txt{position:relative;z-index:3;text-align:center;max-width:560px;padding:0 40px;display:flex;flex-direction:column;align-items:center}.gs-lbl{font-family:"Courier New",monospace;font-size:12px;letter-spacing:4px;text-transform:uppercase;opacity:.7;display:block;margin-bottom:32px}.gs-head{font-family:"Helvetica Neue",Arial,sans-serif;font-weight:300;font-size:40px;line-height:48px;letter-spacing:-0.02em;margin:0 0 40px}.gs-frag{font-size:16px;line-height:28px;margin:0 0 8px;opacity:.9}.gs-tag{display:inline-block;margin-top:24px;padding:10px 20px;font-family:"Courier New",monospace;font-size:15px}.gs-before .gs-tag{background:rgba(244,228,208,.1);border:1px solid rgba(244,228,208,.3);color:#f4e4d0}.gs-after .gs-tag{background:#1a1a1a;color:#f5f5f0}.gs-bar{position:absolute;top:0;bottom:0;left:50%;width:2px;background:#fff;transform:translateX(-50%);cursor:ew-resize;z-index:10;box-shadow:0 0 40px rgba(0,0,0,.4);pointer-events:auto}.gs-knob{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;color:#1a1a1a;font-size:22px;box-shadow:0 8px 32px rgba(0,0,0,.3);cursor:ew-resize}.gs-hint{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);font-family:"Courier New",monospace;font-size:11px;letter-spacing:3px;color:#fff;text-transform:uppercase;z-index:11;pointer-events:none;mix-blend-mode:difference;white-space:nowrap}.gs-spacer{height:300vh;pointer-events:none}';
  document.head.appendChild(css);

  w.style.display='none';
  var spacer=document.createElement('div');
  spacer.className='gs-spacer';
  document.body.appendChild(spacer);

  function mkScene(id,urlB,urlA,lblB,headB,fragsB,tagB,lblA,headA,fragsA,tagA){
    var s=document.createElement('div');
    s.className='gs-scene';s.id=id;
    s.innerHTML='<div class="gs-layer gs-before"><div class="gs-model"><model-viewer id="'+id+'_m1" src="'+urlB+'" camera-orbit="0deg 75deg '+DIST_FAR+'m" field-of-view="'+FOV+'" exposure="0.8" disable-zoom interaction-prompt="none"></model-viewer></div><div class="gs-txt"><span class="gs-lbl">'+lblB+'</span><h1 class="gs-head">'+headB+'</h1>'+fragsB.map(function(f){return'<p class="gs-frag">'+f+'</p>';}).join('')+'<div class="gs-tag">'+tagB+'</div></div></div><div class="gs-layer gs-after" id="'+id+'_after"><div class="gs-model"><model-viewer id="'+id+'_m2" src="'+urlA+'" camera-orbit="0deg 75deg '+DIST_FAR+'m" field-of-view="'+FOV+'" exposure="1.3" disable-zoom interaction-prompt="none"></model-viewer></div><div class="gs-txt"><span class="gs-lbl">'+lblA+'</span><h1 class="gs-head">'+headA+'</h1>'+fragsA.map(function(f){return'<p class="gs-frag">'+f+'</p>';}).join('')+'<div class="gs-tag">'+tagA+'</div></div></div><div class="gs-bar" id="'+id+'_bar"><div class="gs-knob">&#x2039;&#x203a;</div></div><div class="gs-hint">&#x2190; Regler bewegen &#x2193; Scrollen</div>';
    return s;
  }

  var sc1=mkScene('scene1',U1,U2,'Vorher','Das Viertel, wie es war.',['Mietvertrag seit 1987.','Sp\u00e4ti an der Ecke.','Kneipe, drei Generationen.','Nachbarschaft, die sich kennt.'],'420 \u20ac warm','Nachher','The neighborhood, reimagined.',['Concept Store.','Flat White \u2014 5,80 \u20ac.','Luxury Lofts.','Curated community.'],'2.340 \u20ac kalt');
  var sc2=mkScene('scene2',U3,U4,'Vorher','Ihr Zuhause seit 30 Jahren.',['Sofa aus den 90ern.','Bilder der Enkel an der Wand.','Der Lieblingssessel am Fenster.','Zuhause, nicht Investment.'],'Mietvertrag seit 1995','Nachher','Luxury Loft.',['Designerm\u00f6bel, unbewohnt.','Kunst als Anlage.','Smart Home in jeder Ecke.','Wohnung als Statussymbol.'],'Ab 12.500 \u20ac / m\u00b2');

  sc2.classList.add('hidden');
  document.body.insertBefore(sc1,document.body.firstChild);
  document.body.insertBefore(sc2,document.body.firstChild);

  function setupSplit(bid,aid){
    var b=document.getElementById(bid),a=document.getElementById(aid);
    if(!b||!a)return;
    var dr=false;
    function sp(x){var p=Math.max(2,Math.min(98,(x/window.innerWidth)*100));b.style.left=p+'%';a.style.clipPath='inset(0 0 0 '+p+'%)';}
    b.addEventListener('mousedown',function(e){dr=true;e.preventDefault();});
    document.addEventListener('mousemove',function(e){if(dr)sp(e.clientX);});
    document.addEventListener('mouseup',function(){dr=false;});
    b.addEventListener('touchstart',function(){dr=true;},{passive:true});
    document.addEventListener('touchmove',function(e){if(dr)sp(e.touches[0].clientX);},{passive:true});
    document.addEventListener('touchend',function(){dr=false;});
  }
  setupSplit('scene1_bar','scene1_after');
  setupSplit('scene2_bar','scene2_after');

  var s1m1=document.getElementById('scene1_m1'),s1m2=document.getElementById('scene1_m2');
  var s2m1=document.getElementById('scene2_m1'),s2m2=document.getElementById('scene2_m2');

  function loop(){
    var sy=window.scrollY,max=window.innerHeight*2;
    var t=Math.max(0,Math.min(1,sy/max));
    var fade=t>0.5?Math.min(1,(t-0.5)/0.15):0;
    var zoom1=DIST_FAR-(DIST_FAR-DIST_NEAR)*Math.min(1,t/0.5);
    var zoom2=DIST_NEAR+(DIST_FAR-DIST_NEAR)*Math.max(0,(t-0.65)/0.35);
    if(fade<1){sc1.classList.remove('hidden');sc1.style.opacity=1-fade;}
    else{sc1.classList.add('hidden');}
    if(fade>0){sc2.classList.remove('hidden');sc2.style.opacity=fade;}
    else{sc2.classList.add('hidden');}
    var th=(mouseX*20).toFixed(1);
    var ph=(75+mouseY*15).toFixed(1);
    if(s1m1)s1m1.setAttribute('camera-orbit',th+'deg '+ph+'deg '+zoom1.toFixed(2)+'m');
    if(s1m2)s1m2.setAttribute('camera-orbit',th+'deg '+ph+'deg '+zoom1.toFixed(2)+'m');
    if(s2m1)s2m1.setAttribute('camera-orbit',th+'deg '+ph+'deg '+zoom2.toFixed(2)+'m');
    if(s2m2)s2m2.setAttribute('camera-orbit',th+'deg '+ph+'deg '+zoom2.toFixed(2)+'m');
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();

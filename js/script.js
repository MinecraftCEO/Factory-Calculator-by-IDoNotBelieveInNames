import { translations } from './languages.js';
import { runeSuffixes, defaultTiers } from './constants.js';
import { initAssistant } from './assistant.js';

const emoji = initAssistant();
let currentLang = 'en';
let currentPerc = 10;
let activeView = 'factory';
let tierDetailState = {};

const formatWithCommas = (n) => Math.floor(n).toLocaleString(translations[currentLang]?.locale || "en-US");
const parseRaw = (s) => parseInt(String(s).replace(/[^\d]/g, '')) || 0;
const formatHMS = (s) => {
    if (s <= 0) return "00:00:00";
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sc = Math.floor(s%60);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`;
};

function calculateFactory() {
    const rate = parseRaw(document.getElementById('rate').value);
    const t = translations[currentLang];
    let curPts = 0, tarPts = 0;
    document.querySelectorAll('.have-in').forEach(i => curPts += (parseRaw(i.value) * parseFloat(i.dataset.mult)));
    document.querySelectorAll('.want-in').forEach(i => tarPts += (parseRaw(i.value) * parseFloat(i.dataset.mult)));
    const diff = Math.max(0, tarPts - curPts);
    const sec = rate > 0 ? diff / rate : 0;
    
    document.getElementById('pts-needed').innerText = formatWithCommas(diff);
    document.getElementById('out-d').innerText = (sec / 86400).toLocaleString(t.locale, {maximumFractionDigits: 1});
    document.getElementById('out-h').innerText = (sec / 3600).toLocaleString(t.locale, {maximumFractionDigits: 1});
    document.getElementById('hms-needed').innerText = formatHMS(sec);
    
    const doneByEl = document.getElementById('done-by');
    if (sec > 0) doneByEl.innerText = new Date(Date.now() + sec*1000).toLocaleString(t.locale);
    else doneByEl.innerText = tarPts > 0 ? t.goal : "--/--/--";
    
    updateStrategy();
    defaultTiers.forEach(tier => {
        const hVal = parseRaw(document.getElementById(`h-${tier.id}`).value);
        const wVal = parseRaw(document.getElementById(`w-${tier.id}`).value);
        const tDiff = Math.max(0, (wVal - hVal) * tier.mult);
        const tSec = rate > 0 ? tDiff / rate : 0;
        const span = document.getElementById(`tier-time-${tier.id}`);
        span.innerText = (tSec <= 0 && wVal > 0) ? t.goal : (wVal === 0 ? t["no-target"] : t["time-lbl"] + formatHMS(tSec));
        
        if (tierDetailState[tier.id]) {
            document.getElementById(`tier-val-${tier.id}`).innerText = `DIFFERENCE: ${formatWithCommas(tDiff)} T1`;
            document.getElementById(`h-t1-${tier.id}`).innerText = `${formatWithCommas(hVal * tier.mult)} T1`;
            document.getElementById(`w-t1-${tier.id}`).innerText = `${formatWithCommas(wVal * tier.mult)} T1`;
        } else {
            document.getElementById(`tier-val-${tier.id}`).innerText = `Value: ${formatWithCommas(tier.mult)}`;
        }
    });
    saveData();
}

function calculateRune() {
    const luckNum = parseFloat(document.getElementById('runeLuckNum').value) || 0;
    const luckSfx = parseInt(document.getElementById('runeLuckSuffix').value);
    const bulkNum = parseFloat(document.getElementById('runeBulkNum').value) || 0;
    const bulkSfx = parseInt(document.getElementById('runeBulkSuffix').value);
    const speed = Math.max(0.001, parseFloat(document.getElementById('runeSpeed').value) || 0);
    const targetNum = parseFloat(document.getElementById('runeTargetNum').value) || 0;
    const targetSfx = parseInt(document.getElementById('runeTargetSuffix').value);
    
    let rps = bulkNum / speed;
    let luckValue = luckNum * Math.pow(10, luckSfx * 3);
    let multiRps = rps * luckValue;
    let targetScale = Math.pow(10, (targetSfx - bulkSfx) * 3);
    let grindSec = (targetNum / rps) * targetScale;

    document.getElementById('out-raw-rps').textContent = formatRuneNum(rps, bulkSfx) + " /s";
    document.getElementById('out-multi-rps').textContent = formatRuneNum(multiRps, bulkSfx);
    document.getElementById('out-req-bulk').textContent = formatRuneNum(targetNum * targetScale * speed, bulkSfx);
    document.getElementById('out-rune-time').textContent = formatGrindTime(grindSec);

    if (activeView === 'rune') {
        const loc = translations[currentLang].locale;
        document.getElementById('out-d').innerText = (grindSec / 86400).toLocaleString(loc, {maximumFractionDigits: 1});
        document.getElementById('out-h').innerText = (grindSec / 3600).toLocaleString(loc, {maximumFractionDigits: 1});
        document.getElementById('hms-needed').innerText = formatHMS(grindSec);
    }
    saveData();
}

function formatRuneNum(val, sfxIdx) {
    if (isNaN(val) || val <= 0 || val === Infinity) return "-";
    while (val >= 1000 && sfxIdx < runeSuffixes.length - 1) { val /= 1000; sfxIdx++; }
    while (val < 1 && sfxIdx > 0) { val *= 1000; sfxIdx--; }
    return val.toFixed(2) + " " + runeSuffixes[sfxIdx];
}

function formatGrindTime(s) {
    if (isNaN(s) || s === Infinity || s <= 0) return "-";
    if (s < 60) return s.toFixed(2) + "s";
    if (s < 3600) return (s/60).toFixed(1) + "m";
    if (s < 86400) return (s/3600).toFixed(1) + "h";
    return (s/86400).toFixed(1) + "d";
}

function updateStrategy() {
    const body = document.getElementById('strategy-body');
    if(!body) return;
    body.innerHTML = '';
    const p = currentPerc / 100;
    for(let i=0; i < defaultTiers.length - 1; i++) {
        const t = defaultTiers[i], n = defaultTiers[i+1];
        const thr = Math.ceil(t.hold / (1 - p));
        const gain = Math.floor((thr * p) / 5);
        body.innerHTML += `<tr><td>T${n.id}</td><td style="color:var(--pink)">${formatWithCommas(thr)} (T${t.id})</td><td style="color:var(--green)">+${formatWithCommas(gain)}</td></tr>`;
    }
}

function setupEvents() {
    document.getElementById('langSelect').onchange = (e) => { currentLang = e.target.value; changeLanguage(); };
    document.getElementById('nav-factory').onclick = () => showView('factory');
    document.getElementById('nav-rune').onclick = () => showView('rune');
    document.getElementById('btn-open-settings').onclick = toggleModal;
    document.getElementById('btn-close-modal').onclick = toggleModal;
    document.getElementById('btn-export').onclick = exportData;
    document.getElementById('btn-import').onclick = importData;
    document.getElementById('btn-reset-want').onclick = () => resetFields('want');
    document.getElementById('btn-reset-have').onclick = () => resetFields('have');
    document.getElementById('btn-reset-both').onclick = () => resetFields('both');
    
    document.querySelectorAll('.perc-btn').forEach(btn => {
        btn.onclick = () => { currentPerc = parseInt(btn.dataset.perc); updateStrategy(); saveData(); };
    });

    document.querySelectorAll('input, select').forEach(el => {
        el.oninput = (e) => {
            if(e.target.type === "text" && !e.target.classList.contains('rune-speed-input')) {
                let rawVal = e.target.value.replace(/\D/g, '');
                if (rawVal !== "") e.target.value = parseInt(rawVal).toLocaleString(translations[currentLang].locale);
            }
            activeView === 'factory' ? calculateFactory() : calculateRune();
        };
        el.onmouseenter = () => emoji.setHover(true);
        el.onmouseleave = () => emoji.setHover(false);
    });

    document.querySelectorAll('button').forEach(btn => {
        btn.onmouseenter = () => emoji.setHover(true);
        btn.onmouseleave = () => emoji.setHover(false);
    });
}

function showView(view) {
    activeView = view;
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    document.getElementById(`nav-${view}`).classList.add('active');
    view === 'factory' ? calculateFactory() : calculateRune();
    saveData();
}

function changeLanguage() {
    const t = translations[currentLang];
    const ids = ['lbl-rate','lbl-needed','lbl-estimation','lbl-d','lbl-h','lbl-completion','lbl-strat-title','lbl-th-tier','lbl-th-merge','lbl-th-result','btn-reset-have','btn-reset-want','btn-reset-both','lbl-rune-stats','lbl-rune-luck','lbl-rune-bulk','lbl-rune-speed','lbl-rune-target','lbl-rune-goal','lbl-raw-rps','lbl-multi-rps','lbl-rune-results','lbl-req-bulk','lbl-time-grind'];
    ids.forEach(id => { 
        let el = document.getElementById(id); 
        if(el) {
            let key = id.replace('lbl-', '').replace('btn-', '');
            el.innerText = t[key] || "ERR"; 
        }
    });
    document.querySelectorAll('.lbl-have').forEach(e => e.innerText = t.have);
    document.querySelectorAll('.lbl-want').forEach(e => e.innerText = t.want);
    activeView === 'factory' ? calculateFactory() : calculateRune();
}

function toggleModal() {
    const m = document.getElementById('settingsModal');
    m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

function saveData() {
    const data = {
        rate: document.getElementById('rate').value, lang: currentLang, perc: currentPerc, view: activeView,
        rune: { luck: document.getElementById('runeLuckNum').value, luckSfx: document.getElementById('runeLuckSuffix').value, bulk: document.getElementById('runeBulkNum').value, bulkSfx: document.getElementById('runeBulkSuffix').value, speed: document.getElementById('runeSpeed').value, target: document.getElementById('runeTargetNum').value, targetSfx: document.getElementById('runeTargetSuffix').value },
        factoryTiers: Array.from(document.querySelectorAll('.tier-card')).map(c => ({ h: c.querySelector('.have-in').value, w: c.querySelector('.want-in').value }))
    };
    localStorage.setItem('factoryV8', JSON.stringify(data));
}

function resetFields(type) {
    if (!confirm(translations[currentLang].confirm)) return;
    if (type === 'have' || type === 'both') document.querySelectorAll('.have-in').forEach(i => i.value = "0");
    if (type === 'want' || type === 'both') document.querySelectorAll('.want-in').forEach(i => i.value = "0");
    calculateFactory();
}

function exportData() { document.getElementById('io-area').value = btoa(localStorage.getItem('factoryV8')); }
function importData() { 
    try { localStorage.setItem('factoryV8', atob(document.getElementById('io-area').value)); location.reload(); } catch(e) { alert("Invalid Data"); }
}

const initTiers = () => {
    const container = document.getElementById('tier-container');
    if(!container) return;
    let html = "";
    defaultTiers.forEach(t => {
        tierDetailState[t.id] = false;
        html += `<div class="tier-card"><div class="tier-title"><span class="tier-name">TIER ${t.id} <small>(Max: ${t.max})</small></span><span class="tier-info" id="tier-val-${t.id}">Value: ${formatWithCommas(t.mult)}</span></div><div class="t1-row"><div id="h-t1-${t.id}" class="t1-display"></div><div id="w-t1-${t.id}" class="t1-display"></div></div><div class="input-group"><div class="field-box"><label class="lbl-have">Have</label><input type="text" class="have-in" id="h-${t.id}" data-mult="${t.mult}"></div><div class="field-box"><label class="lbl-want">Want</label><input type="text" class="want-in" id="w-${t.id}" data-mult="${t.mult}"></div></div><div class="tier-time" id="tier-time-${t.id}">Time: 0s</div></div>`;
    });
    container.innerHTML = html;
    
    defaultTiers.forEach(t => {
        document.getElementById(`tier-val-${t.id}`).onclick = () => {
            tierDetailState[t.id] = !tierDetailState[t.id];
            document.getElementById(`h-t1-${t.id}`).classList.toggle('visible');
            document.getElementById(`w-t1-${t.id}`).classList.toggle('visible');
            calculateFactory();
        };
    });
};

const initDropdowns = () => {
    ['runeLuckSuffix', 'runeBulkSuffix', 'runeTargetSuffix'].forEach(id => {
        const sel = document.getElementById(id);
        if(!sel) return;
        runeSuffixes.forEach((sfx, i) => { let opt = document.createElement('option'); opt.value = i; opt.textContent = sfx || "Ones"; sel.appendChild(opt); });
    });
};

initTiers();
initDropdowns();
setupEvents();

const saved = JSON.parse(localStorage.getItem('factoryV8') || '{}');
if(saved.lang) {
    currentLang = saved.lang; document.getElementById('langSelect').value = currentLang;
    document.getElementById('rate').value = saved.rate;
    currentPerc = saved.perc;
    if(saved.rune) {
        document.getElementById('runeLuckNum').value = saved.rune.luck;
        document.getElementById('runeLuckSuffix').value = saved.rune.luckSfx;
        document.getElementById('runeBulkNum').value = saved.rune.bulk;
        document.getElementById('runeBulkSuffix').value = saved.rune.bulkSfx;
        document.getElementById('runeSpeed').value = saved.rune.speed;
        document.getElementById('runeTargetNum').value = saved.rune.target;
        document.getElementById('runeTargetSuffix').value = saved.rune.targetSfx;
    }
    if(saved.factoryTiers) saved.factoryTiers.forEach((t, i) => { 
        if(document.getElementById(`h-${i+1}`)) document.getElementById(`h-${i+1}`).value = t.h;
        if(document.getElementById(`w-${i+1}`)) document.getElementById(`w-${i+1}`).value = t.w;
    });
}
showView(saved.view || 'factory');
changeLanguage();
const translations = {
    en: { locale: "en-US", rate: "Points / Sec (Rate)", needed: "Required T1 to reach all Wanted", have: "Have", want: "Want", estimation: "Time Estimation", d: "Days:", h: "Hours:", completion: "Completion Date", goal: "Goal Reached!", no_target: "No Target", time_lbl: "Time: ", strat_title: "Bulk Merger Strategy", th_tier: "Target", th_merge: "Merge Previous at...", th_result: "Est. Gain", reset_have: "Reset 'Have'", reset_want: "Reset 'Want'", reset_both: "Reset All", confirm: "Are you sure?", rune_stats: "1. Current Stats", rune_luck: "Rune Luck Multiplier:", rune_bulk: "Rune Bulk:", rune_speed: "Rune Speed (Seconds):", rune_target: "2. Target Settings", rune_goal: "Target Amount / RPS Goal:", raw_rps: "Raw Production (RPS):", multi_rps: "Multiplied Score /s:", rune_results: "3. Results & Time", req_bulk: "Required Bulk for Goal:", time_grind: "Time to reach Goal:" },
    de: { locale: "de-DE", rate: "Punkte / Sek (Rate)", needed: "Benötigte T1 für alle Ziele", have: "Besitz", want: "Ziel", estimation: "Zeit-Schätzung", d: "Tage:", h: "Stunden:", completion: "Fertigstellung", goal: "Ziel erreicht!", no_target: "Kein Ziel", time_lbl: "Zeit: ", strat_title: "Bulk-Merge Strategie", th_tier: "Ziel", th_merge: "Mergen ab (für Bonus)...", th_result: "Gewinn ca.", reset_have: "Besitz Reset", reset_want: "Ziel Reset", reset_both: "Alles Reset", confirm: "Bist du sicher?", rune_stats: "1. Aktuelle Stats", rune_luck: "Runen-Glück Multiplikator:", rune_bulk: "Runen-Menge (Bulk):", rune_speed: "Runen-Tempo (Sekunden):", rune_target: "2. Ziel-Einstellungen", rune_goal: "Ziel-Menge / RPS Ziel:", raw_rps: "Roh-Produktion (RPS):", multi_rps: "Multiplizierter Wert /s:", rune_results: "3. Ergebnisse & Zeit", req_bulk: "Benötigte Menge für Ziel:", time_grind: "Zeit bis zum Ziel:" },
    fr: { locale: "fr-FR", rate: "Points / Sec (Taux)", needed: "T1 requis pour tout le 'Voulu'", have: "Possédé", want: "Voulu", estimation: "Estimation du Temps", d: "Jours:", h: "Heures:", completion: "Date d'achèvement", goal: "Objectif Atteint!", no_target: "Pas de cible", time_lbl: "Temps: ", strat_title: "Stratégie de Fusion", th_tier: "Tier Cible", th_merge: "Fusionner à...", th_result: "Gain Est.", reset_have: "Reset Possédé", reset_want: "Reset Voulu", reset_both: "Reset Tout", confirm: "Sûr?", rune_stats: "1. Stats Actuelles", rune_luck: "Multiplicateur de Chance:", rune_bulk: "Volume de Runes:", rune_speed: "Vitesse (Secondes):", rune_target: "2. Paramètres Cibles", rune_goal: "Montant Cible / RPS:", raw_rps: "Production Brute (RPS):", multi_rps: "Score Multiplié /s:", rune_results: "3. Résultats & Temps", req_bulk: "Volume Requis:", time_grind: "Temps pour l'objectif:" },
    es: { locale: "es-ES", rate: "Puntos / Seg (Tasa)", needed: "T1 necesario para todo el 'Quiero'", have: "Tengo", want: "Quiero", estimation: "Estimación de Tiempo", d: "Días:", h: "Horas:", completion: "Fecha de Finalización", goal: "¡Meta Alcanzada!", no_target: "Sin objetivo", time_lbl: "Tiempo: ", strat_title: "Estrategia de Fusión", th_tier: "Tier Objetivo", th_merge: "Fusionar en...", th_result: "Ganancia Est.", reset_have: "Reset Tengo", reset_want: "Reset Quiero", reset_both: "Reset Todo", confirm: "Seguro?", rune_stats: "1. Estadísticas", rune_luck: "Multiplicador de Suerte:", rune_bulk: "Volumen de Runas:", rune_speed: "Velocidad (Segundos):", rune_target: "2. Objetivo", rune_goal: "Cantidad / RPS Objetivo:", raw_rps: "Producción Bruta (RPS):", multi_rps: "Puntuación Multiplicada /s:", rune_results: "3. Resultados", req_bulk: "Volumen Necesario:", time_grind: "Tiempo para la meta:" },
    pl: { locale: "pl-PL", rate: "Punkty / Sek (Tempo)", needed: "Wymagane T1 dla wszystkich 'Chcę'", have: "Posiadam", want: "Chcę", estimation: "Szacowany Czas", d: "Dni:", h: "Godziny:", completion: "Data Ukończenia", goal: "Cel Osiągnięty!", no_target: "Brak celu", time_lbl: "Czas: ", strat_title: "Strategia Łączenia", th_tier: "Tier Docelowy", th_merge: "Połącz przy...", th_result: "Zysk ok.", reset_have: "Reset Posiadam", reset_want: "Reset Chcę", reset_both: "Reset Wszystko", confirm: "Pewny?", rune_stats: "1. Statystyki", rune_luck: "Mnożnik Szczęścia:", rune_bulk: "Ilość Run:", rune_speed: "Prędkość (Sekundy):", rune_target: "2. Ustawienia Celu", rune_goal: "Ilość / Cel RPS:", raw_rps: "Produkcja (RPS):", multi_rps: "Wynik Pomnożony /s:", rune_results: "3. Wyniki i Czas", req_bulk: "Wymagana Ilość:", time_grind: "Czas do celu:" },
    ru: { locale: "ru-RU", rate: "Очков / сек (Скорость)", needed: "Нужно T1 для всех 'Нужно'", have: "Есть", want: "Нужно", estimation: "Оценка времени", d: "Дни:", h: "Часы:", completion: "Дата завершения", goal: "Цель достигнута!", no_target: "Нет цели", time_lbl: "Время: ", strat_title: "Стратегия Слияния", th_tier: "Целевой Тир", th_merge: "Сливать при...", th_result: "Прирост", reset_have: "Сброс Есть", reset_want: "Сброс Нужно", reset_both: "Сброс Всего", confirm: "Уверены?", rune_stats: "1. Статистика", rune_luck: "Множитель удачи:", rune_bulk: "Объем рун:", rune_speed: "Скорость (сек):", rune_target: "2. Цель", rune_goal: "Цель очков / RPS:", raw_rps: "Производство (RPS):", multi_rps: "Множитель очков /с:", rune_results: "3. Результаты", req_bulk: "Нужный объем:", time_grind: "Время до цели:" },
    id: { locale: "id-ID", rate: "Poin / Detik (Laju)", needed: "T1 yang dibutuhkan untuk semua 'Ingin'", have: "Punya", want: "Ingin", estimation: "Estimasi Waktu", d: "Hari:", h: "Jam:", completion: "Tanggal Selesai", goal: "Target Tercapai!", no_target: "Tidak ada target", time_lbl: "Waktu: ", strat_title: "Strategi Penggabungan", th_tier: "Tier Target", th_merge: "Gabung di...", th_result: "Hasil Est.", reset_have: "Reset Punya", reset_want: "Reset Ingin", reset_both: "Reset Semua", confirm: "Yakin?", rune_stats: "1. Statistik", rune_luck: "Pengali Keberuntungan:", rune_bulk: "Jumlah Rune:", rune_speed: "Kecepatan (Detik):", rune_target: "2. Target", rune_goal: "Jumlah / Target RPS:", raw_rps: "Produksi Mentah (RPS):", multi_rps: "Skor Pengali /detik:", rune_results: "3. Hasil & Waktu", req_bulk: "Jumlah yang Dibutuhkan:", time_grind: "Waktu untuk target:" },
    pt: { locale: "pt-PT", rate: "Pontos / Seg (Taxa)", needed: "T1 necessário para todos os 'Quero'", have: "Possuo", want: "Quero", estimation: "Estimativa de Tempo", d: "Dias:", h: "Horas:", completion: "Date de Conclusão", goal: "Meta Atingida!", no_target: "Sem alvo", time_lbl: "Tempo: ", strat_title: "Estrategia de Fusão", th_tier: "Tier Alvo", th_merge: "Fundir em...", th_result: "Ganho Est.", reset_have: "Reset Possuo", reset_want: "Reset Quero", reset_both: "Reset Tudo", confirm: "Tem certeza?", rune_stats: "1. Estatísticas", rune_luck: "Multiplicador de Sorte:", rune_bulk: "Volume de Runas:", rune_speed: "Velocidade (Segundos):", rune_target: "2. Objetivo", rune_goal: "Quantidade / RPS Alvo:", raw_rps: "Produção Bruta (RPS):", multi_rps: "Pontuação /s:", rune_results: "3. Resultados", req_bulk: "Volume Necessário:", time_grind: "Tempo para la meta:" }
};

const runeSuffixes = ["", "K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "De", "Ude", "Dde", "Tde", "Qdde", "Qnde", "Sxde", "Spde", "Ocde", "Node", "Vgde", "Uvgde", "Dvgde", "Tvgde", "Qavgde", "Qivgde", "Sxvgde", "Spvgde", "Ocvgde", "Novgde", "Tgde", "Utgde", "Dtgde", "Ttgde", "Qatgde", "Qitgde", "Sxtgde", "Sptgde", "Octgde", "Notgde", "Qagde", "Uqagde", "Dqagde", "Tqagde", "Qaqagde", "Qiqagde", "Sxqagde", "Spqagde", "Ocqagde", "Noqagde", "Qgde", "Uqgde", "Dqgde", "Tqgde", "Qaqgde", "Qiqgde", "Sxqgde", "Spqggde", "Ocqgde", "Noqgde", "Sgde", "Usgde", "Dsgde", "Tsgde", "Qasgde", "Qisgde", "Sxsgde", "Spsgde", "Ocsgde", "Nosgde", "Spgde", "Uspgde", "Dspgde", "Tspgde", "Qaspgde", "Qispgde", "Sxspgde", "Spspgde", "Ocspgde", "Nospgde", "Ogde", "Uogde", "Dogde", "Togde", "Qaogde", "Qiogde", "Sxogde", "Spogde", "Ocogde", "Noogde", "Ngde", "Ungde", "Dngde", "Tngde", "Qangde", "Qingde", "Sxngde", "Spngde", "Ocngde", "Nongde", "Cde"];

const defaultTiers = [
    { id: 1, mult: 1, h: 0, w: 100000, max: "100k", hold: 100000 },
    { id: 2, mult: 5, h: 0, w: 15000, max: "15k", hold: 15000 },
    { id: 3, mult: 25, h: 0, w: 200000, max: "200k", hold: 200000 },
    { id: 4, mult: 125, h: 0, w: 4000, max: "4k", hold: 4000 },
    { id: 5, mult: 625, h: 0, w: 80000, max: "80k", hold: 80000 },
    { id: 6, mult: 3125, h: 0, w: 956, max: "956", hold: 956 },
    { id: 7, mult: 15625, h: 0, w: 17000, max: "20k+ (Unknown)", hold: 0 }
];

let currentLang = 'en';
let currentPerc = 10;
let activeView = 'factory';
let tierDetailState = {};

function formatWithCommas(n) {
    const loc = translations[currentLang] ? translations[currentLang].locale : "en-US";
    return Math.floor(n).toLocaleString(loc);
}

function parseRaw(s) {
    if (!s) return 0;
    let cleaned = String(s).replace(',', '.').replace(/[^\d.-]/g, '');
    return parseFloat(cleaned) || 0;
}

function handleInput(el, type) {
    if (type === 'factory') {
        let val = el.value.replace(/\D/g, '');
        if (val !== "") {
            const loc = translations[currentLang] ? translations[currentLang].locale : "en-US";
            el.value = parseInt(val).toLocaleString(loc);
        } else {
            el.value = "";
        }
        calculateFactory();
    } else {
        calculateRune();
    }
}

function toggleTierDetail(id) {
    tierDetailState[id] = !tierDetailState[id];
    calculateFactory();
}

function showView(view) {
    activeView = view;
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    document.getElementById(`nav-${view}`).classList.add('active');
    if(view === 'factory') calculateFactory(); else calculateRune();
    saveData();
}

const container = document.getElementById('tier-container');
if (container) {
    defaultTiers.forEach(t => {
        tierDetailState[t.id] = false;
        container.innerHTML += `
            <div class="tier-card">
                <div class="tier-title">
                    <span class="tier-name">TIER ${t.id} <small>(Max: ${t.max})</small></span>
                    <span class="tier-info" id="tier-val-${t.id}" onclick="toggleTierDetail(${t.id})">Value: ${formatWithCommas(t.mult)}</span>
                </div>
                <div class="t1-row">
                    <div id="h-t1-${t.id}" class="t1-display"></div>
                    <div id="w-t1-${t.id}" class="t1-display"></div>
                </div>
                <div class="input-group">
                    <div class="field-box">
                        <label class="lbl-have">Have</label>
                        <input type="text" class="have-in" id="h-${t.id}" data-tier="${t.id}" data-mult="${t.mult}" oninput="handleInput(this, 'factory')">
                    </div>
                    <div class="field-box">
                        <label class="lbl-want">Want</label>
                        <input type="text" class="want-in" id="w-${t.id}" data-tier="${t.id}" data-mult="${t.mult}" oninput="handleInput(this, 'factory')">
                    </div>
                </div>
                <div class="tier-time" id="tier-time-${t.id}">Time: 0s</div>
            </div>`;
    });
}

function calculateFactory() {
    const rateEl = document.getElementById('rate');
    if (!rateEl) return;
    const rate = parseRaw(rateEl.value);
    const t = translations[currentLang];
    let curPts = 0, tarPts = 0;
    document.querySelectorAll('.have-in').forEach(i => curPts += parseRaw(i.value) * parseFloat(i.dataset.mult));
    document.querySelectorAll('.want-in').forEach(i => tarPts += parseRaw(i.value) * parseFloat(i.dataset.mult));
    const diff = Math.max(0, tarPts - curPts);
    const sec = rate > 0 ? diff / rate : 0;
    const ptsNeededEl = document.getElementById('pts-needed');
    if (ptsNeededEl) ptsNeededEl.innerText = formatWithCommas(diff);
    document.getElementById('out-d').innerText = (sec / 86400).toLocaleString(t.locale, {maximumFractionDigits: 1});
    document.getElementById('out-h').innerText = (sec / 3600).toLocaleString(t.locale, {maximumFractionDigits: 1});
    document.getElementById('hms-needed').innerText = formatHMS(sec);
    const doneByEl = document.getElementById('done-by');
    if (sec > 0) doneByEl.innerText = new Date(Date.now() + sec*1000).toLocaleString(t.locale);
    else doneByEl.innerText = tarPts > 0 ? t.goal : "--/--/--";
    updateStrategy();
    defaultTiers.forEach(tier => {
        const hIn = document.getElementById(`h-${tier.id}`);
        const wIn = document.getElementById(`w-${tier.id}`);
        if (!hIn || !wIn) return;
        const hVal = parseRaw(hIn.value);
        const wVal = parseRaw(wIn.value);
        const tDiff = Math.max(0, (wVal - hVal) * tier.mult);
        const tSec = rate > 0 ? tDiff / rate : 0;
        const span = document.getElementById(`tier-time-${tier.id}`);
        if (tSec <= 0 && wVal > 0) span.innerText = t.goal;
        else if (wVal === 0) span.innerText = t.no_target;
        else span.innerText = t.time_lbl + formatHMS(tSec);
        const infoLabel = document.getElementById(`tier-val-${tier.id}`);
        const hT1 = document.getElementById(`h-t1-${tier.id}`);
        const wT1 = document.getElementById(`w-t1-${tier.id}`);
        if (tierDetailState[tier.id]) {
            infoLabel.innerText = `DIFFERENCE: ${formatWithCommas(tDiff)} T1`;
            hT1.innerText = `${formatWithCommas(hVal * tier.mult)} T1`;
            wT1.innerText = `${formatWithCommas(wVal * tier.mult)} T1`;
            hT1.classList.add('visible');
            wT1.classList.add('visible');
        } else {
            infoLabel.innerText = `Value: ${formatWithCommas(tier.mult)}`;
            hT1.classList.remove('visible');
            wT1.classList.remove('visible');
        }
    });
    saveData();
}

function calculateRune() {
    const luckNumEl = document.getElementById('runeLuckNum');
    if (!luckNumEl) return;
    const luck = parseRaw(luckNumEl.value);
    const luckSfx = parseInt(document.getElementById('runeLuckSuffix').value);
    const bulk = parseRaw(document.getElementById('runeBulkNum').value);
    const bulkSfx = parseInt(document.getElementById('runeBulkSuffix').value);
    const speed = parseRaw(document.getElementById('runeSpeed').value);
    const target = parseRaw(document.getElementById('runeTargetNum').value);
    const targetSfx = parseInt(document.getElementById('runeTargetSuffix').value);
    if (bulk <= 0 || speed <= 0) return;
    let rps = bulk / speed;
    document.getElementById('out-raw-rps').textContent = formatRuneNum(rps, bulkSfx) + " /s";
    let luckValue = luck * Math.pow(10, (luckSfx) * 3);
    let multiRps = rps * luckValue;
    document.getElementById('out-multi-rps').textContent = formatRuneNum(multiRps, bulkSfx);
    let targetScale = Math.pow(10, (targetSfx - bulkSfx) * 3);
    let reqBulk = (target * targetScale) * speed;
    document.getElementById('out-req-bulk').textContent = formatRuneNum(reqBulk, bulkSfx);
    let grindSec = (target / rps) * targetScale;
    document.getElementById('out-rune-time').textContent = formatGrindTime(grindSec);
    if (activeView === 'rune') {
        document.getElementById('out-d').innerText = (grindSec / 86400).toLocaleString(translations[currentLang].locale, {maximumFractionDigits: 1});
        document.getElementById('out-h').innerText = (grindSec / 3600).toLocaleString(translations[currentLang].locale, {maximumFractionDigits: 1});
        document.getElementById('hms-needed').innerText = formatHMS(grindSec);
        if (grindSec > 0) document.getElementById('done-by').innerText = new Date(Date.now() + grindSec*1000).toLocaleString(translations[currentLang].locale);
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

function formatHMS(s) {
    if (s <= 0) return "00:00:00";
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sc = Math.floor(s%60);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`;
}

function updateStrategy() {
    const body = document.getElementById('strategy-body');
    if (!body) return;
    body.innerHTML = '';
    const p = currentPerc / 100;
    for(let i=0; i < defaultTiers.length - 1; i++) {
        const t = defaultTiers[i], n = defaultTiers[i+1];
        const thr = Math.ceil(t.hold / (1 - p));
        const gain = Math.floor((thr * p) / 5);
        body.innerHTML += `<tr><td>T${n.id}</td><td style="color:var(--pink)">${formatWithCommas(thr)} (T${t.id})</td><td style="color:var(--green)">+${formatWithCommas(gain)}</td></tr>`;
    }
}

function setPerc(p) {
    currentPerc = p;
    document.querySelectorAll('.perc-btn').forEach(b => b.classList.toggle('active', parseInt(b.innerText) === p));
    updateStrategy(); saveData();
}

function resetFields(type) {
    const t = translations[currentLang];
    if (!confirm(t.confirm)) return;
    if (type === 'have' || type === 'both') document.querySelectorAll('.have-in').forEach(i => i.value = "0");
    if (type === 'want' || type === 'both') document.querySelectorAll('.want-in').forEach(i => i.value = "0");
    calculateFactory();
}

function toggleModal() {
    const m = document.getElementById('settingsModal');
    if (m) m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}

function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    const t = translations[currentLang];
    document.getElementById('lbl-rate').innerText = t.rate;
    document.getElementById('lbl-needed').innerText = t.needed;
    document.getElementById('lbl-estimation').innerText = t.estimation;
    document.getElementById('lbl-d').innerText = t.d;
    document.getElementById('lbl-h').innerText = t.h;
    document.getElementById('lbl-completion').innerText = t.completion;
    document.getElementById('lbl-strat-title').innerText = t.strat_title;
    document.getElementById('lbl-th-tier').innerText = t.th_tier;
    document.getElementById('lbl-th-merge').innerText = t.th_merge;
    document.getElementById('lbl-th-result').innerText = t.th_result;
    document.getElementById('btn-reset-have').innerText = t.reset_have;
    document.getElementById('btn-reset-want').innerText = t.reset_want;
    document.getElementById('btn-reset-both').innerText = t.reset_both;
    document.querySelectorAll('.lbl-have').forEach(e => e.innerText = t.have);
    document.querySelectorAll('.lbl-want').forEach(e => e.innerText = t.want);
    document.getElementById('lbl-rune-stats').innerText = t.rune_stats;
    document.getElementById('lbl-rune-luck').innerText = t.rune_luck;
    document.getElementById('lbl-rune-bulk').innerText = t.rune_bulk;
    document.getElementById('lbl-rune-speed').innerText = t.rune_speed;
    document.getElementById('lbl-rune-target').innerText = t.rune_target;
    document.getElementById('lbl-rune-goal').innerText = t.rune_goal;
    document.getElementById('lbl-raw-rps').innerText = t.raw_rps;
    document.getElementById('lbl-multi-rps').innerText = t.multi_rps;
    document.getElementById('lbl-rune-results').innerText = t.rune_results;
    document.getElementById('lbl-req-bulk').innerText = t.req_bulk;
    document.getElementById('lbl-time-grind').innerText = t.time_grind;
    document.querySelectorAll('.have-in, .want-in').forEach(input => {
        let v = parseRaw(input.value);
        if (v > 0) input.value = Math.floor(v).toLocaleString(t.locale);
    });
    if(activeView === 'factory') calculateFactory(); else calculateRune();
}

function setupRuneDropdowns() {
    const ids = ['runeLuckSuffix', 'runeBulkSuffix', 'runeTargetSuffix'];
    ids.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = '';
        runeSuffixes.forEach((sfx, i) => {
            let opt = document.createElement('option');
            opt.value = i; opt.textContent = sfx || "Ones";
            sel.appendChild(opt);
        });
    });
}

function exportData() { 
    const area = document.getElementById('io-area');
    if (area) area.value = btoa(localStorage.getItem('factoryV8')); 
}

function importData() { 
    const area = document.getElementById('io-area');
    if (area && area.value) {
        localStorage.setItem('factoryV8', atob(area.value)); 
        location.reload(); 
    }
}

function saveData() {
    const data = {
        rate: document.getElementById('rate')?.value || "350",
        lang: currentLang,
        perc: currentPerc,
        view: activeView,
        rune: {
            luck: document.getElementById('runeLuckNum')?.value || "1",
            luckSfx: document.getElementById('runeLuckSuffix')?.value || "0",
            bulk: document.getElementById('runeBulkNum')?.value || "1",
            bulkSfx: document.getElementById('runeBulkSuffix')?.value || "0",
            speed: document.getElementById('runeSpeed')?.value || "1",
            target: document.getElementById('runeTargetNum')?.value || "1",
            targetSfx: document.getElementById('runeTargetSuffix')?.value || "0"
        },
        factoryTiers: Array.from(document.querySelectorAll('.tier-card')).map(c => ({
            h: c.querySelector('.have-in').value,
            w: c.querySelector('.want-in').value
        }))
    };
    localStorage.setItem('factoryV8', JSON.stringify(data));
}

function loadData() {
    setupRuneDropdowns();
    const saved = localStorage.getItem('factoryV8');
    if (saved) {
        const data = JSON.parse(saved);
        if (document.getElementById('rate')) document.getElementById('rate').value = data.rate || "350";
        currentLang = data.lang || 'en';
        if (document.getElementById('langSelect')) document.getElementById('langSelect').value = currentLang;
        setPerc(data.perc || 10);
        activeView = data.view || 'factory';
        if(data.rune) {
            if (document.getElementById('runeLuckNum')) document.getElementById('runeLuckNum').value = data.rune.luck;
            if (document.getElementById('runeLuckSuffix')) document.getElementById('runeLuckSuffix').value = data.rune.luckSfx;
            if (document.getElementById('runeBulkNum')) document.getElementById('runeBulkNum').value = data.rune.bulk;
            if (document.getElementById('runeBulkSuffix')) document.getElementById('runeBulkSuffix').value = data.rune.bulkSfx;
            if (document.getElementById('runeSpeed')) document.getElementById('runeSpeed').value = data.rune.speed;
            if (document.getElementById('runeTargetNum')) document.getElementById('runeTargetNum').value = data.rune.target;
            if (document.getElementById('runeTargetSuffix')) document.getElementById('runeTargetSuffix').value = data.rune.targetSfx;
        }
        if(data.factoryTiers) {
            data.factoryTiers.forEach((t, i) => {
                if(document.getElementById(`h-${i+1}`)) document.getElementById(`h-${i+1}`).value = t.h;
                if(document.getElementById(`w-${i+1}`)) document.getElementById(`w-${i+1}`).value = t.w;
            });
        }
    } else { setPerc(10); }
    showView(activeView);
    changeLanguage();
}

window.onload = loadData;

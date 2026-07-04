export function initAssistant() {
    const assistant = document.getElementById('smiley-assistant');
    const mouth = document.getElementById('mouth');
    const head = document.getElementById('assistant-head');
    const normalEyes = document.getElementById('eyes-normal');
    const closedEyes = document.getElementById('eyes-closed');
    const swirlEyes = document.getElementById('eyes-swirl');
    const zzz = document.getElementById('zzz-group');
    const puke = document.getElementById('puke-trace');
    const brows = document.getElementById('brow-group');
    const browL = document.getElementById('eyebrow-l');
    const browR = document.getElementById('eyebrow-r');
    
    let isAngry = false, isSleeping = false, isDizzy = false, isSad = false;
    let clickCount = 0, idleTimer, lastX = 0, lastY = 0, lastTime = Date.now();

    window.addEventListener('mousemove', (e) => {
        const dt = Date.now() - lastTime;
        if (dt > 0) {
            const speed = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)) / dt;
            if (speed > 16 && !isDizzy && !isAngry) triggerDizzy();
        }
        lastX = e.clientX; lastY = e.clientY; lastTime = Date.now();
        resetIdleTimer();
        if (isSleeping) wakeUp();
        if (!isDizzy && !isSleeping && !isSad) {
            const rect = assistant.getBoundingClientRect();
            const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2));
            normalEyes.setAttribute('transform', `translate(${Math.cos(angle)*5}, ${Math.sin(angle)*5})`);
        }
    });

    document.addEventListener('mouseleave', () => {
        if (!isAngry && !isDizzy && !isSleeping) {
            isSad = true;
            updateFace('sad');
        }
    });

    document.addEventListener('mouseenter', () => {
        if (isSad) {
            isSad = false;
            updateFace('normal');
        }
    });

    const updateFace = (state) => {
        assistant.classList.remove('shake');
        puke.classList.remove('puking');
        puke.setAttribute('opacity', '0');
        normalEyes.setAttribute('opacity', '0');
        closedEyes.setAttribute('opacity', '0');
        swirlEyes.setAttribute('opacity', '0');
        zzz.setAttribute('opacity', '0');
        brows.setAttribute('opacity', '0');
        mouth.setAttribute('fill', 'none');
        mouth.setAttribute('opacity', '1');
        normalEyes.setAttribute('transform', 'translate(0,0)');

        if (state === 'normal') {
            head.style.fill = "url(#headGrad)";
            normalEyes.setAttribute('opacity', '1');
            mouth.setAttribute('d', 'M 38 72 Q 50 80 62 72');
        }
        else if (state === 'sad') {
            head.style.fill = "#d1c464";
            normalEyes.setAttribute('opacity', '1');
            normalEyes.setAttribute('transform', 'translate(0, 4)');
            mouth.setAttribute('d', 'M 38 82 Q 50 74 62 82');
        }
        else if (state === 'angry') {
            head.style.fill = "#ff9900";
            normalEyes.setAttribute('opacity', '1');
            brows.setAttribute('opacity', '1');
            browL.setAttribute('d', 'M 30 35 L 45 40'); browR.setAttribute('d', 'M 55 40 L 70 35');
            mouth.setAttribute('d', 'M 38 78 Q 50 70 62 78');
        } 
        else if (state === 'rage') {
            head.style.fill = "#ff4444";
            normalEyes.setAttribute('opacity', '1');
            assistant.classList.add('shake');
            brows.setAttribute('opacity', '1');
            browL.setAttribute('d', 'M 30 30 L 45 42'); browR.setAttribute('d', 'M 70 30 L 55 42');
            mouth.setAttribute('d', 'M 35 75 L 65 75');
        } 
        else if (state === 'sleep') {
            closedEyes.setAttribute('opacity', '1');
            zzz.setAttribute('opacity', '1');
            mouth.setAttribute('d', 'M 45 75 Q 50 78 55 75');
        } 
        else if (state === 'dizzy') {
            swirlEyes.setAttribute('opacity', '1');
            mouth.setAttribute('d', 'M 40 75 Q 50 65 60 75');
        }
        else if (state === 'puke-pre') {
            head.style.fill = "#88d444";
            swirlEyes.setAttribute('opacity', '1');
            mouth.setAttribute('d', 'M 42 75 Q 50 72 58 75');
        }
        else if (state === 'puke-act') {
            head.style.fill = "#88d444";
            swirlEyes.setAttribute('opacity', '1');
            puke.setAttribute('opacity', '1');
            puke.classList.add('puking');
            mouth.setAttribute('d', 'M 40 75 A 10 10 0 1 0 60 75 A 10 10 0 1 0 40 75');
            mouth.setAttribute('fill', '#222');
        }
        else if (state === 'hover') {
            normalEyes.setAttribute('opacity', '1');
            mouth.setAttribute('d', 'M 45 75 A 5 7 0 1 0 55 75 A 5 7 0 1 0 45 75');
            mouth.setAttribute('fill', '#222');
        }
    };

    assistant.addEventListener('mousedown', () => {
        clickCount++;
        if (clickCount >= 10) {
            isAngry = true; updateFace('rage');
            setTimeout(() => { 
                updateFace('angry');
                setTimeout(() => { isAngry = false; clickCount = 0; updateFace('normal'); }, 1000);
            }, 3000);
        } else {
            isAngry = true; updateFace('angry');
            setTimeout(() => { if(clickCount < 10) { isAngry = false; updateFace('normal'); } }, 1500);
        }
    });

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => { if (!isAngry && !isDizzy && !isSad) { isSleeping = true; updateFace('sleep'); } }, 7500);
    }

    function triggerDizzy() {
        isDizzy = true;
        const rand = Math.random();
        if (rand < 0.25) {
            updateFace('puke-pre');
            setTimeout(() => {
                updateFace('puke-act');
                setTimeout(() => { isDizzy = false; updateFace('normal'); }, 2000);
            }, 1000);
        } else {
            updateFace('dizzy');
            setTimeout(() => { isDizzy = false; updateFace('normal'); }, 2000);
        }
    }

    function wakeUp() { isSleeping = false; updateFace('normal'); }
    resetIdleTimer();
    updateFace('normal');
    return { setHover: (h) => { if(!isAngry && !isSleeping && !isDizzy && !isSad) updateFace(h ? 'hover' : 'normal'); } };
}
const createStoryScreen = (title, text, themeColor, onComplete) => {
    const content = `
        <div id="story-wrapper" class="story-wrapper">
            <div id="story-box" class="story-box" dir="rtl" style="--theme-color: ${themeColor};">
                <h1 class="story-title">${title}</h1>
                <p class="story-text">${text}</p>
                <p class="story-prompt">اضغط [ENTER] للإكمال</p>
            </div>
        </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.trim();
    const element = tempDiv.firstElementChild;

    const handleKeydown = (e) => {
        if (e.key === 'Enter') {
            document.removeEventListener('keydown', handleKeydown);
            element.remove(); 
            if (onComplete) onComplete();
        }
    };

    document.addEventListener('keydown', handleKeydown);
    return element;
};

export const showIntro = (onComplete) => {
    const title = "نداء استغاثة";
    const text = "العام 2099. الأرض تحترق تحت وطأة الغزو الفضائي. لقد سقطت جميع دفاعاتنا، ولم يتبق سوى مركبتك الهجومية. مصير البشرية بين يديك أيها القائد... دمرهم جميعاً ولا تظهر أي رحمة.";
    return createStoryScreen(title, text, "#00ccff", onComplete);
};

export const showDevelopment = (onComplete) => {
    const title = "تحذير من الرادار!";
    const text = "المركبة الأم رصدت موقعك وهي ترسل الآن قوات النخبة. هجومهم سيكون أسرع وأكثر شراسة. استعد للمواجهة الحاسمة، التراجع ليس خياراً!";
    return createStoryScreen(title, text, "#ffcc00", onComplete);
};

export const showConclusion = (status, onComplete) => {
    let title, text, color;
    if (status === 'win') {
        title = "انتصار تاريخي!";
        text = "لقد سحقت الغزاة ودمرت المركبة الأم بالكامل. بفضلك، ستشرق الشمس من جديد على كوكب الأرض. المجرة بأكملها مدينة لك أيها البطل الأسطوري.";
        color = "#00ff00";
    } else {
        title = "اختراق حرج...";
        text = "تم تدمير دروعك... الغزاة يجتاحون الأرض والبشرية تغرق في ظلام أبدي. هل هذه هي النهاية الحتمية؟";
        color = "#ff3333";
    }
    return createStoryScreen(title, text, color, onComplete);
};
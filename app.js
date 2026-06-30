// State Variables
let currentQuestionIndex = 0;
let userScore = 0;
const FREE_LIMIT = 1; // Number of free questions before triggering the paywall lock

// DOM Selectors
const questionMeta = document.getElementById("question-meta");
const progressText = document.getElementById("progress-text");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const scoreBadge = document.getElementById("score-badge");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function initApp() {
    renderQuestion(currentQuestionIndex);
    
    nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questionBank.length - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion(currentQuestionIndex);
        }
    });
}

function renderQuestion(index) {
    // ?? Mobile Money Paywall Safeguard
    if (index >= FREE_LIMIT) {
        showPaywall();
        return;
    }

    const currentQuestion = questionBank[index];
    
    // Set UI Content Strings
    questionMeta.innerText = `${currentQuestion.subject} • ${currentQuestion.topic}`;
    progressText.innerText = `${index + 1} / ${questionBank.length}`;
    questionText.innerText = currentQuestion.question;
    explanationBox.classList.add("hidden"); // Reset visibility state
    
    // Clear old options buttons
    optionsContainer.innerHTML = "";
    
    // Inject Interactive Option Cards
    Object.entries(currentQuestion.options).forEach(([key, value]) => {
        const button = document.createElement("button");
        button.className = "w-full text-left px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 font-medium text-sm transition-all duration-150 flex items-start gap-3";
        button.innerHTML = `<span class="bg-white border border-slate-300 text-slate-500 rounded-md px-1.5 py-0.5 text-xs font-bold">${key}</span> <span class="flex-1">${value}</span>`;
        
        button.addEventListener("click", () => handleAnswerSelection(key, currentQuestion, button));
        optionsContainer.appendChild(button);
    });
}

function handleAnswerSelection(selectedKey, questionObj, selectedButton) {
    const allButtons = optionsContainer.querySelectorAll("button");
    // Freeze all interactive components once an selection happens
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedKey === questionObj.correct) {
        selectedButton.classList.remove("bg-slate-50", "border-slate-200");
        selectedButton.classList.add("bg-emerald-50", "border-emerald-300", "text-emerald-900");
        userScore += 10;
        scoreBadge.innerText = `Score: ${userScore}`;
    } else {
        selectedButton.classList.remove("bg-slate-50", "border-slate-200");
        selectedButton.classList.add("bg-rose-50", "border-rose-300", "text-rose-900");
        
        // Highlight correct option path implicitly
        allButtons.forEach(btn => {
            if (btn.querySelector("span").innerText === questionObj.correct) {
                btn.classList.add("bg-emerald-50", "border-emerald-200");
            }
        });
    }

    // Unveil explanation box
    explanationText.innerText = questionObj.explanation;
    explanationBox.classList.remove("hidden");
}

function showPaywall() {
    questionText.innerHTML = `
        <div class="text-center py-6 space-y-4">
            <span class="text-4xl">??</span>
            <h3 class="text-lg font-bold text-slate-900">Unlock Full Level 100 Scaffold Bank</h3>
            <p class="text-sm text-slate-500 px-4">Gain unlimited lifetime access to over 500+ localized medical past questions, mnemonics summaries, and continuous exam updates.</p>
            <div class="pt-2">
                <button onclick="triggerMoMoPayment()" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition tracking-wide text-sm">
                    Unlock with Mobile Money (GH? 150)
                </button>
            </div>
        </div>
    `;
    optionsContainer.innerHTML = "";
    explanationBox.classList.add("hidden");
}

function triggerMoMoPayment() {
    alert("Redirecting securely to payment gateway hook (Paystack/Hubtel Integration)...");
    // Production deployment replaces this hook with a standard window.location window redirection to a Paystack payment authorization URL.
}

// Instantiate App Launch
initApp();
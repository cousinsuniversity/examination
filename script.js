// ==================== EXAM DATA ====================
const examQuestions = [
    {
        question: "What is the study of patterns, quantities, and relationships using logic and reasoning?",
        options: ["A. Biology", "B. Mathematics", "C. Chemistry", "D. Physics"],
        correct: 1
    },
    {
        question: "The Fibonacci sequence starts with 0, 1, and each subsequent number is the sum of the two preceding numbers. What is the 8th number in the sequence?",
        options: ["A. 8", "B. 13", "C. 21", "D. 34"],
        correct: 1
    },
    {
        question: "What is the Golden Ratio approximately equal to?",
        options: ["A. 1.414", "B. 1.618", "C. 2.718", "D. 3.142"],
        correct: 1
    },
    {
        question: "If a population doubles every 3 years, what type of growth is this?",
        options: ["A. Linear growth", "B. Quadratic growth", "C. Exponential growth", "D. Logarithmic growth"],
        correct: 2
    },
    {
        question: "What is the sum of the first 10 natural numbers?",
        options: ["A. 45", "B. 50", "C. 55", "D. 60"],
        correct: 2
    },
    {
        question: "In set theory, what does the symbol ∪ represent?",
        options: ["A. Intersection", "B. Union", "C. Subset", "D. Complement"],
        correct: 1
    },
    {
        question: "What is the probability of getting heads when flipping a fair coin?",
        options: ["A. 0", "B. 1/4", "C. 1/2", "D. 1"],
        correct: 2
    },
    {
        question: "The mean of the numbers 2, 4, 6, 8, 10 is:",
        options: ["A. 4", "B. 5", "C. 6", "D. 7"],
        correct: 2
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["A. 3.12", "B. 3.14", "C. 3.16", "D. 3.18"],
        correct: 1
    },
    {
        question: "In modular arithmetic, what is 17 mod 5?",
        options: ["A. 1", "B. 2", "C. 3", "D. 4"],
        correct: 1
    },
    {
        question: "What is the formula for the area of a circle?",
        options: ["A. πr", "B. πr²", "C. 2πr", "D. πd²"],
        correct: 1
    },
    {
        question: "A sequence where each term after the first is obtained by adding a constant is called:",
        options: ["A. Geometric sequence", "B. Harmonic sequence", "C. Arithmetic sequence", "D. Fibonacci sequence"],
        correct: 2
    },
    {
        question: "What is the compound interest formula?",
        options: ["A. A = P(1 + r)", "B. A = P(1 + rt)", "C. A = P(1 + r/n)^(nt)", "D. A = Pe^(rt)"],
        correct: 2
    },
    {
        question: "The measure of central tendency most affected by outliers is:",
        options: ["A. Median", "B. Mode", "C. Mean", "D. Range"],
        correct: 2
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
        options: ["A. 24", "B. 32", "C. 36", "D. 48"],
        correct: 1
    },
    {
        question: "In graph theory, a graph that has no cycles is called:",
        options: ["A. Complete graph", "B. Connected graph", "C. Tree", "D. Bipartite graph"],
        correct: 2
    },
    {
        question: "What is the standard deviation of the set {2, 2, 2, 2}?",
        options: ["A. 0", "B. 1", "C. 2", "D. 4"],
        correct: 0
    },
    {
        question: "If f(x) = 2x + 3, what is f(5)?",
        options: ["A. 10", "B. 13", "C. 15", "D. 18"],
        correct: 1
    },
    {
        question: "The number e (Euler's number) is approximately:",
        options: ["A. 2.414", "B. 2.618", "C. 2.718", "D. 3.142"],
        correct: 2
    },
    {
        question: "What is the median of the data set: 1, 3, 5, 7, 9?",
        options: ["A. 3", "B. 5", "C. 7", "D. 9"],
        correct: 1
    },
    {
        question: "In probability theory, events that cannot occur simultaneously are called:",
        options: ["A. Independent events", "B. Dependent events", "C. Mutually exclusive events", "D. Complementary events"],
        correct: 2
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["A. 90°", "B. 180°", "C. 270°", "D. 360°"],
        correct: 1
    },
    {
        question: "The formula for simple interest is:",
        options: ["A. I = P(1 + r)^t", "B. I = Prt", "C. I = P(1 - r)^t", "D. I = Pt/r"],
        correct: 1
    },
    {
        question: "What is the 12th Fibonacci number?",
        options: ["A. 89", "B. 144", "C. 233", "D. 377"],
        correct: 1
    },
    {
        question: "In statistics, the difference between the highest and lowest values is called:",
        options: ["A. Variance", "B. Standard deviation", "C. Range", "D. Interquartile range"],
        correct: 2
    },
    {
        question: "What is the probability of rolling a 6 on a standard die?",
        options: ["A. 1/3", "B. 1/4", "C. 1/5", "D. 1/6"],
        correct: 3
    },
    {
        question: "A relation where each input has exactly one output is called:",
        options: ["A. Mapping", "B. Function", "C. Correspondence", "D. Transformation"],
        correct: 1
    },
    {
        question: "What is the quadratic formula?",
        options: ["A. x = -b ± √(b² - 4ac) / 2a", "B. x = -b ± √(b² - 4ac) / a", "C. x = b ± √(b² - 4ac) / 2a", "D. x = -b ± √(b² + 4ac) / 2a"],
        correct: 0
    },
    {
        question: "The mode of the data set {2, 3, 3, 4, 5, 5, 5, 6} is:",
        options: ["A. 3", "B. 4", "C. 5", "D. 6"],
        correct: 2
    },
    {
        question: "What is the value of 5! (5 factorial)?",
        options: ["A. 60", "B. 120", "C. 180", "D. 240"],
        correct: 1
    },
    {
        question: "In graph theory, the number of edges connected to a vertex is called:",
        options: ["A. Degree", "B. Order", "C. Size", "D. Path"],
        correct: 0
    },
    {
        question: "What is the formula for the volume of a cylinder?",
        options: ["A. πr²h", "B. 2πrh", "C. πrh²", "D. (1/3)πr²h"],
        correct: 0
    },
    {
        question: "The intersection of two sets A and B is:",
        options: ["A. Elements in A only", "B. Elements in B only", "C. Elements in both A and B", "D. Elements in A or B"],
        correct: 2
    },
    {
        question: "What is the slope of the line y = 3x + 2?",
        options: ["A. 2", "B. 3", "C. 5", "D. 6"],
        correct: 1
    },
    {
        question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
        options: ["A. 50%", "B. 68%", "C. 75%", "D. 95%"],
        correct: 1
    },
    {
        question: "What is the next prime number after 7?",
        options: ["A. 9", "B. 11", "C. 13", "D. 15"],
        correct: 1
    },
    {
        question: "The complement of an event A is denoted as:",
        options: ["A. A'", "B. A²", "C. A⁻¹", "D. |A|"],
        correct: 0
    },
    {
        question: "What is the value of log₁₀(100)?",
        options: ["A. 1", "B. 2", "C. 10", "D. 100"],
        correct: 1
    },
    {
        question: "In set theory, the empty set is denoted by:",
        options: ["A. {0}", "B. ∅", "C. { }", "D. Both B and C"],
        correct: 3
    },
    {
        question: "What is the circumference of a circle with radius 5?",
        options: ["A. 5π", "B. 10π", "C. 15π", "D. 25π"],
        correct: 1
    },
    {
        question: "The process of finding the derivative is called:",
        options: ["A. Integration", "B. Differentiation", "C. Substitution", "D. Elimination"],
        correct: 1
    },
    {
        question: "What is the mean of 10, 20, 30, 40, 50?",
        options: ["A. 20", "B. 25", "C. 30", "D. 35"],
        correct: 2
    },
    {
        question: "In a deck of 52 cards, what is the probability of drawing a heart?",
        options: ["A. 1/2", "B. 1/3", "C. 1/4", "D. 1/13"],
        correct: 2
    },
    {
        question: "What is the formula for the distance between two points (x₁,y₁) and (x₂,y₂)?",
        options: ["A. √((x₂-x₁)² + (y₂-y₁)²)", "B. (x₂-x₁)(y₂-y₁)", "C. |x₂-x₁| + |y₂-y₁|", "D. √((x₂+x₁)² + (y₂+y₁)²)"],
        correct: 0
    },
    {
        question: "The Fibonacci sequence appears in nature in:",
        options: ["A. Crystal structures", "B. Spiral shells and flower petals", "C. Rock formations", "D. Cloud patterns"],
        correct: 1
    },
    {
        question: "What is the value of sin(90°)?",
        options: ["A. 0", "B. 1/2", "C. 1", "D. ∞"],
        correct: 2
    },
    {
        question: "In statistics, the square of the standard deviation is called:",
        options: ["A. Mean", "B. Median", "C. Variance", "D. Correlation"],
        correct: 2
    },
    {
        question: "What is the sum of the first 100 positive integers?",
        options: ["A. 4950", "B. 5000", "C. 5050", "D. 5100"],
        correct: 2
    },
    {
        question: "A geometric sequence has a common ratio of 2 and first term 3. What is the 4th term?",
        options: ["A. 12", "B. 24", "C. 48", "D. 96"],
        correct: 1
    },
    {
        question: "What is the probability of drawing an ace from a standard deck of cards?",
        options: ["A. 1/52", "B. 1/26", "C. 1/13", "D. 4/13"],
        correct: 2
    },
    {
        question: "The mathematical constant e is used in:",
        options: ["A. Geometry", "B. Calculus and natural logarithms", "C. Statistics only", "D. Algebra only"],
        correct: 1
    },
    {
        question: "What is the mode of the set {1, 1, 2, 3, 4, 4, 4, 5}?",
        options: ["A. 1", "B. 2", "C. 3", "D. 4"],
        correct: 3
    },
    {
        question: "In a right triangle, the side opposite the right angle is called:",
        options: ["A. Adjacent side", "B. Opposite side", "C. Hypotenuse", "D. Base"],
        correct: 2
    },
    {
        question: "What is the value of 3⁴?",
        options: ["A. 27", "B. 64", "C. 81", "D. 243"],
        correct: 2
    },
    {
        question: "The correlation coefficient ranges between:",
        options: ["A. 0 and 1", "B. -1 and 1", "C. -∞ and ∞", "D. 0 and ∞"],
        correct: 1
    },
    {
        question: "What is the formula for the area of a rectangle?",
        options: ["A. length + width", "B. 2(length + width)", "C. length × width", "D. length²"],
        correct: 2
    },
    {
        question: "In probability, P(A|B) represents:",
        options: ["A. Probability of A and B", "B. Probability of A given B", "C. Probability of B given A", "D. Probability of A or B"],
        correct: 1
    },
    {
        question: "The golden ratio is often denoted by the Greek letter:",
        options: ["A. α (alpha)", "B. β (beta)", "C. φ (phi)", "D. θ (theta)"],
        correct: 2
    },
    {
        question: "What is the next number in the pattern: 1, 1, 2, 3, 5, 8, ___?",
        options: ["A. 11", "B. 12", "C. 13", "D. 15"],
        correct: 2
    },
    {
        question: "In calculus, what does the integral represent?",
        options: ["A. Rate of change", "B. Area under a curve", "C. Slope of a line", "D. Maximum value"],
        correct: 1
    },
    {
        question: "What is the value of 2⁵?",
        options: ["A. 16", "B. 24", "C. 32", "D. 64"],
        correct: 2
    },
    {
        question: "In set theory, if A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
        options: ["A. {1, 2}", "B. {3}", "C. {4, 5}", "D. {1, 2, 3, 4, 5}"],
        correct: 1
    },
    {
        question: "What is the formula for the area of a triangle?",
        options: ["A. base × height", "B. ½ × base × height", "C. 2 × base × height", "D. base + height"],
        correct: 1
    },
    {
        question: "The value of cos(0°) is:",
        options: ["A. 0", "B. 1/2", "C. 1", "D. -1"],
        correct: 2
    },
    {
        question: "What is the next number in the sequence: 3, 6, 12, 24, ___?",
        options: ["A. 36", "B. 48", "C. 60", "D. 72"],
        correct: 1
    },
    {
        question: "In statistics, what does a negative correlation indicate?",
        options: ["A. As one variable increases, the other decreases", "B. Both variables increase together", "C. No relationship between variables", "D. Variables are identical"],
        correct: 0
    },
    {
        question: "What is the value of log₁₀(1000)?",
        options: ["A. 1", "B. 2", "C. 3", "D. 4"],
        correct: 2
    },
    {
        question: "The Pythagorean theorem is used to find:",
        options: ["A. Area of a circle", "B. Volume of a cube", "C. Length of sides in a right triangle", "D. Circumference of a circle"],
        correct: 2
    },
    {
        question: "What is the probability of rolling an even number on a standard die?",
        options: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3"],
        correct: 2
    },
    {
        question: "In calculus, what does the derivative represent?",
        options: ["A. Area under a curve", "B. Rate of change", "C. Volume of a solid", "D. Length of a curve"],
        correct: 1
    },
    {
        question: "What is the formula for simple interest if P = $1000, r = 5%, t = 3 years?",
        options: ["A. $150", "B. $300", "C. $500", "D. $1500"],
        correct: 0
    }
];

// ==================== STATE VARIABLES ====================
let currentQuestion = 0;
let answers = new Array(60).fill(null);
let examStarted = false;
let examSuspended = false;
let timeRemaining = 90 * 60; // 90 minutes in seconds
let timerInterval = null;
let screenRecording = false;
let blurCount = 0;
let violationTriggered = false;
let isRequestingScreenShare = false; // New flag to prevent false suspension
let examCheckComplete = false; // New flag to ensure exam check completes first

// ==================== PROCTORING FUNCTIONS ====================

// Start screen recording
function startScreenRecording() {
    // Set flag to indicate we're requesting screen share
    isRequestingScreenShare = true;
    
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({ video: true })
            .then(stream => {
                screenRecording = true;
                console.log('Screen recording started');
                
                // Clear the requesting flag after permission is granted
                isRequestingScreenShare = false;
                examCheckComplete = true;
                
                // Stop recording when stream ends (user clicks "Stop Sharing")
                stream.getVideoTracks()[0].onended = function() {
                    screenRecording = false;
                    if (examStarted && !examSuspended && examCheckComplete) {
                        suspendExam('Screen sharing was stopped');
                    }
                };
            })
            .catch(err => {
                console.error('Screen recording failed:', err);
                // Clear the requesting flag after permission is denied
                isRequestingScreenShare = false;
                examCheckComplete = true;
                
                // Continue without recording but warn
                alert('Warning: Screen recording could not be started. The exam will continue without recording.');
            });
    } else {
        // Clear the requesting flag if not supported
        isRequestingScreenShare = false;
        examCheckComplete = true;
        
        alert('Warning: Screen recording is not supported in this browser. The exam will continue without recording.');
    }
}

// Suspend exam for violation
function suspendExam(reason) {
    if (examSuspended) return;
    
    // Don't suspend if we're currently requesting screen share
    if (isRequestingScreenShare) {
        console.log('Ignoring suspension during screen share request');
        return;
    }
    
    examSuspended = true;
    violationTriggered = true;
    
    // Stop the timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Log the violation
    console.error('EXAM SUSPENDED:', reason);
    
    // Show suspension modal
    document.getElementById('suspendModal').classList.add('active');
    
    // Disable all interactions
    document.body.style.pointerEvents = 'none';
    document.getElementById('suspendModal').style.pointerEvents = 'auto';
}

// Check for tab visibility change
document.addEventListener('visibilitychange', function() {
    if (examStarted && document.hidden && !examSuspended && !isRequestingScreenShare && examCheckComplete) {
        blurCount++;
        suspendExam('Tab switching detected');
    }
});

// Check for window blur (losing focus)
window.addEventListener('blur', function() {
    if (examStarted && !examSuspended && !isRequestingScreenShare && examCheckComplete) {
        // Small delay to allow for alert dialogs
        setTimeout(() => {
            if (!document.hasFocus() && examStarted && !examSuspended && !isRequestingScreenShare && examCheckComplete) {
                blurCount++;
                suspendExam('Window lost focus');
            }
        }, 100);
    }
});

// Disable context menu (right-click)
document.addEventListener('contextmenu', function(e) {
    if (examStarted) {
        e.preventDefault();
        return false;
    }
});

// Disable copy/paste
document.addEventListener('copy', function(e) {
    if (examStarted) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('paste', function(e) {
    if (examStarted) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('cut', function(e) {
    if (examStarted) {
        e.preventDefault();
        return false;
    }
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (examStarted && !examSuspended) {
        // Block Ctrl combinations (except Ctrl+R for refresh prevention)
        if (e.ctrlKey && ['c', 'v', 'x', 's', 'p', 'a'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
        }
        
        // Block F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        
        // Block Ctrl+Shift combinations
        if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return false;
        }
        
        // Block Alt+Tab (although this may not work in all browsers)
        if (e.altKey && e.key === 'Tab') {
            e.preventDefault();
            return false;
        }
    }
});

// ==================== EXAM FUNCTIONS ====================

function startExam() {
    examStarted = true;
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('examScreen').style.display = 'block';
    
    // Start screen recording
    startScreenRecording();
    
    // Start timer only after screen recording check
    setTimeout(() => {
        startTimer();
        examCheckComplete = true;
    }, 1000); // Give 1 second for screen recording to initialize
    
    // Initialize exam
    renderQuestion();
    renderQuestionGrid();
    updateProgress();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 300) { // 5 minutes warning
            document.getElementById('timer').classList.add('warning');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderQuestion() {
    const question = examQuestions[currentQuestion];
    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestion + 1} of 60`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (answers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option${index}" value="${index}" 
                ${answers[currentQuestion] === index ? 'checked' : ''}>
            <label class="option-letter" for="option${index}">${letters[index]}</label>
            <label class="option-text" for="option${index}">${option.substring(3)}</label>
        `;
        
        optionDiv.onclick = function() {
            selectAnswer(index);
        };
        
        optionsList.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestion === 59 ? 'Finish' : 'Next →';
}

function selectAnswer(index) {
    answers[currentQuestion] = index;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
        } else {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
        }
    });
    
    renderQuestionGrid();
    updateProgress();
}

function navigateQuestion(direction) {
    const newIndex = currentQuestion + direction;
    
    if (newIndex >= 0 && newIndex < 60) {
        currentQuestion = newIndex;
        renderQuestion();
        renderQuestionGrid();
    } else if (newIndex >= 60) {
        confirmSubmit();
    }
}

function goToQuestion(index) {
    currentQuestion = index;
    renderQuestion();
    renderQuestionGrid();
}

function renderQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 60; i++) {
        const qDiv = document.createElement('div');
        qDiv.className = 'q-number';
        
        if (answers[i] !== null) {
            qDiv.classList.add('answered');
        }
        
        if (i === currentQuestion) {
            qDiv.classList.add('current');
        }
        
        qDiv.textContent = i + 1;
        qDiv.onclick = function() {
            goToQuestion(i);
        };
        
        grid.appendChild(qDiv);
    }
}

function updateProgress() {
    const answered = answers.filter(a => a !== null).length;
    const percentage = (answered / 60) * 100;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = 
        `Answered: ${answered}/60`;
}

function confirmSubmit() {
    const answered = answers.filter(a => a !== null).length;
    const unanswered = 60 - answered;
    
    let message = 'Are you sure you want to submit your exam?';
    if (unanswered > 0) {
        message += `\n\nYou have ${unanswered} unanswered question(s).`;
    }
    
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('confirmModal').classList.add('active');
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.remove('active');
}

function submitExam() {
    // Close any open modals
    document.getElementById('confirmModal').classList.remove('active');
    
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Calculate score
    let score = 0;
    for (let i = 0; i < 60; i++) {
        if (answers[i] !== null && answers[i] === examQuestions[i].correct) {
            score++;
        }
    }
    
    const percentage = (score / 60) * 100;
    
    // Show results
    document.getElementById('examScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'flex';
    
    document.getElementById('scoreCircle').innerHTML = 
        `${percentage.toFixed(1)}%<small>Score</small>`;
    
    let message = '';
    let grade = '';
    
    if (percentage >= 90) {
        grade = 'A';
        message = 'Excellent! Outstanding performance!';
    } else if (percentage >= 80) {
        grade = 'B';
        message = 'Very good! Keep up the great work!';
    } else if (percentage >= 70) {
        grade = 'C';
        message = 'Good job! There\'s room for improvement.';
    } else if (percentage >= 60) {
        grade = 'D';
        message = 'You passed, but need to study more.';
    } else {
        grade = 'F';
        message = 'You need to retake the exam.';
    }
    
    document.getElementById('resultMessage').innerHTML = 
        `<strong>Grade: ${grade}</strong><br>${message}<br><br>` +
        `Correct Answers: ${score} out of 60<br>` +
        `Time Used: ${Math.floor((90 * 60 - timeRemaining) / 60)} minutes ${(90 * 60 - timeRemaining) % 60} seconds`;
}

// ==================== INITIALIZATION ====================
console.log('Exam system initialized');
console.log('Total questions loaded:', examQuestions.length);

// Prevent refresh during exam
window.addEventListener('beforeunload', function(e) {
    if (examStarted && !examSuspended) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your exam will be suspended!';
        return e.returnValue;
    }
});

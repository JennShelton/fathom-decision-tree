let currentQuestion = 1;
let answers = {};

function startQuestions() {
  document.getElementById('introScreen').classList.remove('active');
  document.getElementById('question1').classList.add('active');
  updateProgress();
}

function answer(questionNumber, value) {
  answers[`question${questionNumber}`] = value;
  document.getElementById(`question${questionNumber}`).classList.remove('active');

  if (questionNumber === 1) {
    currentQuestion = 2;
  } else {
    currentQuestion++;
  }

  const nextScreen = document.getElementById(`question${currentQuestion}`);
  if (nextScreen) {
    nextScreen.classList.add('active');
    updateProgress();
  } else {
    showResults();
  }
}

function updateProgress() {
  document.getElementById('progressText').textContent = `Question ${currentQuestion} of 2`;
}

function showResults() {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById('resultsScreen').classList.add('active');

  let summary = '';
  if (answers.question1 === 'corporate') {
    summary += '✅ Corporate client: Recommend strategic planning and operational audits.\n';
  } else {
    summary += '✅ Individual client: Recommend personalized coaching and financial guidance.\n';
  }

  if (answers.question2 === 'growth') {
    summary += '📈 Focus on growth strategies and market expansion.\n';
  } else {
    summary += '⚙️ Focus on process optimization and cost reduction.\n';
  }

  document.getElementById('resultsText').textContent = summary;
}
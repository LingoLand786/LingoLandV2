// Verb of the Day
function updateDailyChallenge() {
  const verbs = [
      { verb: 'Comer', meaning: 'To eat' },
      { verb: 'Beber', meaning: 'To drink' },
      { verb: 'Correr', meaning: 'To run' },
      { verb: 'Abrir', meaning: 'To open' },
  ];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  document.getElementById('verb-of-the-day').innerHTML = `
      <h3>${randomVerb.verb}</h3>
      <p>${randomVerb.meaning}</p>
  `;
}

// Verb Search
function searchVerbs() {
  const query = document.getElementById('verb-search').value.toLowerCase();
  const verbs = ['comer', 'beber', 'abrir', 'fechar', 'correr'];
  const results = document.getElementById('search-results');
  results.innerHTML = '';
  if (query) {
      verbs.filter(v => v.includes(query)).forEach(verb => {
          const result = document.createElement('div');
          result.className = 'search-result';
          result.textContent = verb;
          results.appendChild(result);
      });
  }
}

// Quiz
function checkAnswer(option) {
  const feedback = document.getElementById('quiz-feedback');
  if (option === 'A') {
      feedback.textContent = 'Correct!';
  } else {
      feedback.textContent = 'Try again.';
  }
}

// Initialize
window.onload = updateDailyChallenge;

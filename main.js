async function getRecommendations() {
  const userId = document.getElementById('userId').value.trim();
  if (!userId) {
    alert('Please enter a user ID');
    return;
  }

  const response = await fetch('/.netlify/functions/recommend?user_id=' + encodeURIComponent(userId));
  const data = await response.json();

  const ul = document.getElementById('results');
  ul.innerHTML = '';

  (data.products || []).forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    ul.appendChild(li);
  });

  if ((data.products || []).length === 0) {
    ul.innerHTML = '<li>No recommendations for this user (mock data)</li>';
  }
}

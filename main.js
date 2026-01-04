const form = document.getElementById('reco-form');
const input = document.getElementById('user-id');
const statusEl = document.getElementById('status');
const grid = document.getElementById('reco-grid');
const userLabel = document.getElementById('user-label');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userId = input.value.trim();
  if (!userId) return;

  statusEl.textContent = 'Loading recommendations...';
  grid.innerHTML = '';
  userLabel.textContent = '';

  try {
    const res = await fetch(`/.netlify/functions/recommend?user_id=${encodeURIComponent(userId)}`);
    const data = await res.json();

    const products = data.products || [];

    if (!products.length) {
      statusEl.textContent = 'No recommendations found for this user ID.';
      return;
    }

    statusEl.textContent = '';
    userLabel.textContent = `User: ${userId}`;

    products.forEach((pid, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <div class="product-image"></div>
        <div class="product-id">Product ID: ${pid}</div>
        <div class="product-title">Recommended item #${index + 1}</div>
        <div class="product-meta">
          <span class="badge">Recommended</span>
          <span>Score: ★★★★☆</span>
        </div>
        <div class="card-actions">
          <button class="btn-ghost">View details</button>
          <span class="price">₹${(Math.random() * 900 + 100).toFixed(0)}</span>
        </div>
      `;

      grid.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    statusEl.textContent = 'Something went wrong. Please try again.';
  }
});

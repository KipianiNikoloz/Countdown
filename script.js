(() => {
  // Utility: pad number
  const pad = (n) => (n < 10 ? '0' + n : n);

  // Range: 2026-01-01 00:00:00 to 2026-12-31 23:59:59
  function randomDateIn2026() {
    const start = new Date('2026-01-01T00:00:00Z').getTime();
    const end = new Date('2026-12-31T23:59:59Z').getTime();
    const rand = start + Math.floor(Math.random() * (end - start + 1));
    return new Date(rand);
  }

  // Initialize DOM references
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const doneOverlay = document.getElementById('doneOverlay');
  const restartBtn = document.getElementById('restart');

  let target = randomDateIn2026();
  const targetEl = document.getElementById('targetDate');

  function setNewTarget(date) {
    target = date;
    doneOverlay.classList.add('hidden');
    if(targetEl) targetEl.innerHTML = '<small>Target (local):</small> ' + target.toLocaleString();
    update();
  }

  // Expose the selected date in the console for verification
  console.log('Countdown target:', target.toString());
  if(targetEl) targetEl.innerHTML = '<small>Target (local):</small> ' + target.toLocaleString();

  function update() {
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      // Ended
      daysEl.textContent = '0';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      doneOverlay.classList.remove('hidden');
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = days.toString();
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  // Live update every second
  update();
  let timer = setInterval(update, 1000);

  // Restart button creates a new random 2026 date
  restartBtn.addEventListener('click', () => {
    const newTarget = randomDateIn2026();
    setNewTarget(newTarget);
    console.log('New countdown target:', newTarget.toString());
    // reset interval
    clearInterval(timer);
    timer = setInterval(update, 1000);
  });
})();

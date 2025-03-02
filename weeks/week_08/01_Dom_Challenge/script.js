const toggleBtn = document.getElementById('toggleButton');
const body = document.getElementById('body');
const bulb = document.getElementById('bulb');
const statusText = document.getElementById('status');

toggleBtn.innerText = 'Turn On';
statusText.innerText = 'Status: Off';
bulb.classList.add('off');

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerText = 'Turn Off';
    statusText.innerText = 'Status: On';
    bulb.classList.remove('off');
  } else {
    toggleBtn.innerText = 'Turn On';
    statusText.innerText = 'Status: Off';
    bulb.classList.add('off');
  }
});

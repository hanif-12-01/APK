// Theme
const toggle = document.getElementById('themeToggle');
toggle.onclick = () => {
  const dark = document.body.dataset.theme === 'dark';
  document.body.dataset.theme = dark ? '' : 'dark';
  localStorage.setItem('theme', dark ? '' : 'dark');
};
document.body.dataset.theme = localStorage.getItem('theme') || '';

// Navigation
document.querySelectorAll('nav button').forEach(btn => {
  btn.onclick = () => openSection(btn.dataset.section);
});
function openSection(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.querySelector(`nav [data-section="${id}"]`).classList.add('active');
}

// Clock
setInterval(() => {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString('id-ID');
}, 1000);

// Tiket
const form = document.getElementById('formTiket');
const list = document.getElementById('listTiket');
const saved = JSON.parse(localStorage.getItem('tiket') || '[]');
function render() {
  list.innerHTML = saved.map((t,i) => `<p>${i+1}. ${t.nama} → ${t.tujuan}, ${t.tanggal}</p>`).join('');
}
form.onsubmit = e => {
  e.preventDefault();
  const data = { nama: form.nama.value, tujuan: form.tujuan.value, tanggal: form.tanggal.value };
  saved.push(data);
  localStorage.setItem('tiket', JSON.stringify(saved));
  render();
  form.reset();
};
render();

// Health
function startHealth() {
  document.getElementById('suhu').textContent = (36 + Math.random()*2).toFixed(1);
  document.getElementById('detak').textContent = (60 + Math.random()*40).toFixed(0);
}

// Safety (QR Scanner)
async function startCamera() {
  const video = document.getElementById('video');
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
  video.srcObject = stream;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  setInterval(() => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    try {
      const code = jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data, canvas.width, canvas.height);
      if (code) document.getElementById('qrResult').textContent = code.data;
    } catch(e) {}
  }, 500);
}
startCamera();

// Info (jadwal)
fetch('data/jadwal.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('jadwalList').innerHTML = data.map(j => 
      `<li>${j.waktu} - ${j.tujuan} (${j.status})</li>`).join('');
  });

// Voice
document.getElementById('voiceBtn').onclick = () => {
  if (!('webkitSpeechRecognition' in window)) return alert('Browser tidak support voice.');
  const rec = new webkitSpeechRecognition();
  rec.lang = 'id-ID';
  rec.onresult = e => {
    const txt = e.results[0][0].transcript.toLowerCase();
    if (txt.includes('tiket')) openSection('tiket');
    else if (txt.includes('sehat')) openSection('health');
    else if (txt.includes('aman')) openSection('safety');
    else if (txt.includes('info')) openSection('info');
    else if (txt.includes('training')) openSection('training');
  };
  rec.start();
};

// PWA Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

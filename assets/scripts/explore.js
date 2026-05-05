window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const talkBtn = document.querySelector('#explore button');
  const face = document.querySelector('#explore img');

  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    dropdown.querySelectorAll('option:not([disabled])').forEach(o => o.remove());
    voices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = v.name + ' (' + v.lang + ')';
      dropdown.appendChild(opt);
    });
  }

  loadVoices();
  window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkBtn.addEventListener('click', () => {
    const text = textBox.value.trim();
    if (!text) return;

    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    if (dropdown.value !== 'select' && voices[dropdown.value]) {
      msg.voice = voices[dropdown.value];
    }

    msg.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    msg.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    msg.onerror = () => {
      face.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(msg);
  });
}
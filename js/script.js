var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}
function downloadPDF() {
      const content = document.getElementById('content');
      const pdf = new jsPDF();
      
      pdf.html(content, {
        callback: function (pdf) {
          pdf.save('resume2024.pdf');

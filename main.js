document.addEventListener('DOMContentLoaded',()=>{
  document.body.classList.add('loaded');

  
  document.querySelectorAll('.flip').forEach(flipWrap=>{
    const inner = flipWrap.querySelector('.flip-inner');
    flipWrap.addEventListener('click', ()=>{
      flipWrap.classList.toggle('is-flipped');
    });
    
    flipWrap.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        flipWrap.classList.toggle('is-flipped');
      }
    });
  });
});


function ensureBanner(){
  let banner = document.querySelector('.current-info');
  if(!banner){
    banner = document.createElement('div');
    banner.className = 'current-info';
    banner.innerHTML = '<div class="ci-title"></div><div class="ci-desc"></div><button class="ci-close" aria-label="Close">Close</button>';
    document.body.insertBefore(banner, document.querySelector('main'));
    banner.querySelector('.ci-close').addEventListener('click', ()=>{
      banner.classList.remove('visible');
    });
  }
  return banner;
}


document.addEventListener('DOMContentLoaded', ()=>{
  const banner = ensureBanner();
  document.querySelectorAll('.flip').forEach(flipWrap=>{
    const front = flipWrap.querySelector('.flip-front');
    const back = flipWrap.querySelector('.flip-back');
    const title = front ? front.querySelector('.concept-title') : null;
    const desc = front ? front.querySelector('.concept-desc') : null;

    function showInfo(){
      const t = title ? title.textContent.trim() : '';
      // use back code if available for description
      const codeEl = back ? back.querySelector('.code') : null;
      const d = (desc && desc.textContent.trim()) || (codeEl && codeEl.textContent.trim()) || '';
      banner.querySelector('.ci-title').textContent = t;
      banner.querySelector('.ci-desc').textContent = d;
      banner.classList.add('visible');
    }

    flipWrap.addEventListener('click', (e)=>{
      
      showInfo();
    });

    flipWrap.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        showInfo();
      }
    });
  });
});

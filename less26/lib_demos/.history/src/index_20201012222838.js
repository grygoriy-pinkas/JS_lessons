import './styles.css';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import "pnotify/dist/PNotifyBrightTheme.css"

PNotify.defaults = {
    addClass: 'pn',
    icons: 'brighttheme',
    icon: true
}


const btn = document.getElementById('btn')


btn.addEventListener('click', ()=>{
    console.log('------------');
    PNotify.info({
        text: "I'm an info message."
      });
    // defaultModules.set(PNotifyMobile, {});

    // alert('Notice me, senpai!');
})


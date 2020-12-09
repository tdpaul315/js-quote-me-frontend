

    function textToSpeech() {
        if ('speechSynthesis' in window) with(speechSynthesis) {
    
    
            let playEle = document.querySelector('#play-me');
            let pauseEle = document.querySelector('#pause');
            let stopEle = document.querySelector('#stop');
            var flag = false;
    
    
            playEle.addEventListener('click', onClickPlay);
            pauseEle.addEventListener('click', onClickPause);
            stopEle.addEventListener('click', onClickStop);
    
            function onClickPlay() {
                if(!flag){
                    flag = true;
                    utterance = new SpeechSynthesisUtterance(document.querySelector('#speech-text').textContent);
                    utterance.voice = getVoices()[0];
                    utterance.onend = function(){
                        flag = false;
                    };
                    speak(utterance);
                }
                 if (paused) { /* unpause/resume narration */
                    playEle.className = 'played';
                    pauseEle.className = '';
                    resume();
                } 
            }
    
            function onClickPause() {
                if(speaking && !paused){ /* pause narration */
                    pauseEle.className = 'paused';
                    playEle.className = '';
                    pause();
                }
            }
    
            function onClickStop() {
                if(speaking){ /* stop narration */
                    /* for safari */
                    stopEle.className = 'stopped';
                    playEle.className = pauseEle.className = '';
                    flag = false;
                    cancel();
    
                }
            }
    
        }
            else { /* speech synthesis not supported */
                msg = document.createElement('h5');
                msg.textContent = "Detected no support for Speech Synthesis";
                msg.style.textAlign = 'center';
                msg.style.backgroundColor = 'red';
                msg.style.color = 'white';
                msg.style.marginTop = msg.style.marginBottom = 0;
                document.body.insertBefore(msg, document.querySelector('div'));
            }
    }

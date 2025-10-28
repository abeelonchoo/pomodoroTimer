 var timeLeft = 25 * 60;
        var isRunning = false;
        var interval;

        var timerDisplay = document.getElementById('timer');
        var startBtn = document.getElementById('startBtn');
        var pauseBtn = document.getElementById('pauseBtn');
        var resetBtn = document.getElementById('resetBtn');

        function formatTime(seconds) {
            var mins = Math.floor(seconds / 60);
            var secs = seconds % 60;
            var minsStr = mins < 10 ? '0' + mins : mins;
            var secsStr = secs < 10 ? '0' + secs : secs;
            return minsStr + ':' + secsStr;
        }

        function updateDisplay() {
            timerDisplay.textContent = formatTime(timeLeft);
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                interval = setInterval(function() {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay();
                    } else {
                        pauseTimer();
                        alert('¡Tiempo terminado!');
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            isRunning = false;
            clearInterval(interval);
        }

        function resetTimer() {
            pauseTimer();
            timeLeft = 25 * 60;
            updateDisplay();
        }

        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);

        updateDisplay();
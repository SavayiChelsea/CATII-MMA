document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlifeVideo');
    const btn = document.getElementById('toggleBtn');
    const videoContainer = document.getElementById('videoContainer');

    btn.addEventListener('click', () => {
        // Requirement: Hides the video or plays it if it is not playing already
        if (video.paused || video.ended) {
            // If it's not playing, ensure it's visible and play it
            videoContainer.style.display = 'block';
            video.play();
            btn.textContent = 'Hide Video';
        } else {
            // If it is currently playing, pause and hide it
            video.pause();
            videoContainer.style.display = 'none';
            btn.textContent = 'Play Video';
        }
    });
});
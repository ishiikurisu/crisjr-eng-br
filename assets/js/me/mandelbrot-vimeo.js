const MANDELBROT_VIMEO = `
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/514280627?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Mandelbrot Zoom 0.0.1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`;

function embed_mandelbrot_vimeo(elementId) {
    document.getElementById(elementId).innerHTML = MANDELBROT_VIMEO;
}

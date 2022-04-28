const dropdownMenu = () => {

}

const player = new Plyr('#player', {
    title: 'Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP',
    controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'fullscreen'
    ],
});

window.player = player;

$("#sum").on("click", function () {


    if ($("#expand").css("display") === "none") {
        $("#expand").css("display", "inline");
        $("#ellipsis").css("display", "none");
    } else {
        $("#ellipsis").css("display", "inline");
        $("#expand").css("display", "none");
    }
});
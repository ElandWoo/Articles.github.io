$(document).ready(function () {
    var idea = MAPJS.content({
        title: '我们的关系', a: { style: { background: '#FFB6C1' } }, ideas: {
            1: {
                title: '相识', a: { style: { background: '#FFC0CB' } }, ideas: {
                    1: { title: '校园音乐会', a: { style: { background: '#FFD1DC' } } },
                    2: { title: '共同朋友介绍', a: { style: { background: '#FFD1DC' } } }
                }
            },
            2: {
                title: '约会', a: { style: { background: '#FFC0CB' } }, ideas: {
                    1: { title: '电影', a: { style: { background: '#FFD1DC' } } },
                    2: { title: '晚餐', a: { style: { background: '#FFD1DC' } } },
                    3: { title: '公园散步', a: { style: { background: '#FFD1DC' } } }
                }
            },
            3: {
                title: '共同兴趣', a: { style: { background: '#FFC0CB' } }, ideas: {
                    1: { title: '旅行', a: { style: { background: '#FFD1DC' } } },
                    2: { title: '摄影', a: { style: { background: '#FFD1DC' } } },
                    3: { title: '音乐', a: { style: { background: '#FFD1DC' } } }
                }
            }
        }
    });

    var container = $('#mindmap');
    container.domMapWidget({
        centerOn: { x: 0, y: 0 },
        zoom: 1
    }).data('mapModel').setIdea(idea);
});


$(document).ready(function () {
    // ...之前的思维导图代码...

    // 回到顶部按钮
    var backToTopButton = $('#back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    backToTopButton.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});
$(document).ready(function () {
    // ...之前的代码...

    // 音乐播放组件点击事件
    $('.music-player').on('click', function () {
        var audioPlayer = document.getElementById('audio-player');
        if (audioPlayer.paused) {
            audioPlayer.play();
            $(this).addClass('rotating');
        } else {
            audioPlayer.pause();
            $(this).removeClass('rotating');
        }
    });
});



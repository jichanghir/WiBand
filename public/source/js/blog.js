$(function() {
    const WIN = window;
    const DOC = document;
    const $articles = $('.blog__article');
    const articles = $articles.toArray();
    const $articlesList = $('#blog__article-list');
    const $articleTitles = $('#blog__article-titles');
    let activeArticleId = null;

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    function setArticleActive() {
        function setActive(artcl) {
            if (artcl.dataset.idtitle !== activeArticleId) {
                $('.blog__article-title').removeClass('active');
                $(`#${artcl.dataset.idtitle}`).addClass('active');
                activeArticleId = artcl.dataset.idtitle;
            }
        }

        if (WIN.pageYOffset < getCoords(articles[0]).top) {
            setActive(articles[0]);
        }
        else if (WIN.pageYOffset + WIN.innerHeight === DOC.body.offsetHeight) {
            setActive(articles[articles.length - 1]);
        }
        else {
            articles.forEach((article) => {
                const elemTop = getCoords(article).top;
                if (WIN.pageYOffset > elemTop - 150) {
                    setActive(article);
                }
            });
        }
    }

    function setArticleChords() {
        const elemChords = getCoords($articleTitles[0]);

        if (WIN.pageYOffset >= elemChords.top - 30) {

            $articlesList.css({
                'position': 'fixed',
                'top': 30 + 'px',
                'left': elemChords.left + 'px'
            })
        }
        else {
            $articlesList.css({
                'position': 'static'
            })
        }
    }

    if ($articlesList.length && $articles.length) {
        $articlesList.css({
            'width': $articlesList.outerWidth()
        });

        // выполниться только тогда когда будет действия скроллинг
        $(WIN).scroll(() => {
            WIN.screen.width >= 1200 && setArticleChords();
            setArticleActive();
        });

        // выполниться при загрузке кода
        WIN.screen.width >= 1200 && setArticleChords();
        setArticleActive();

        if (WIN.screen.width < 1200) {
            $('#blog__article-adaptive-btn').on('click', () => {
                $('#blog__article-titles').toggleClass('adaptive-show');

            });
            $('body').on('click', (e) => {
                if (!$(e.target).closest('#blog__article-titles').length || $(e.target).hasClass('blog__article-link')) {
                    $('#blog__article-titles').removeClass('adaptive-show');
                }
            });
        }
    }
});

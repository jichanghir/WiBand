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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJibG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgV0lOID0gd2luZG93O1xuICAgIGNvbnN0IERPQyA9IGRvY3VtZW50O1xuICAgIGNvbnN0ICRhcnRpY2xlcyA9ICQoJy5ibG9nX19hcnRpY2xlJyk7XG4gICAgY29uc3QgYXJ0aWNsZXMgPSAkYXJ0aWNsZXMudG9BcnJheSgpO1xuICAgIGNvbnN0ICRhcnRpY2xlc0xpc3QgPSAkKCcjYmxvZ19fYXJ0aWNsZS1saXN0Jyk7XG4gICAgY29uc3QgJGFydGljbGVUaXRsZXMgPSAkKCcjYmxvZ19fYXJ0aWNsZS10aXRsZXMnKTtcbiAgICBsZXQgYWN0aXZlQXJ0aWNsZUlkID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG4gICAgICAgIGNvbnN0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogYm94LnRvcCArIHBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBwYWdlWE9mZnNldFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFydGljbGVBY3RpdmUoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNldEFjdGl2ZShhcnRjbCkge1xuICAgICAgICAgICAgaWYgKGFydGNsLmRhdGFzZXQuaWR0aXRsZSAhPT0gYWN0aXZlQXJ0aWNsZUlkKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJsb2dfX2FydGljbGUtdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChgIyR7YXJ0Y2wuZGF0YXNldC5pZHRpdGxlfWApLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVBcnRpY2xlSWQgPSBhcnRjbC5kYXRhc2V0LmlkdGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoV0lOLnBhZ2VZT2Zmc2V0IDwgZ2V0Q29vcmRzKGFydGljbGVzWzBdKS50b3ApIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZShhcnRpY2xlc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoV0lOLnBhZ2VZT2Zmc2V0ICsgV0lOLmlubmVySGVpZ2h0ID09PSBET0MuYm9keS5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZShhcnRpY2xlc1thcnRpY2xlcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbVRvcCA9IGdldENvb3JkcyhhcnRpY2xlKS50b3A7XG4gICAgICAgICAgICAgICAgaWYgKFdJTi5wYWdlWU9mZnNldCA+IGVsZW1Ub3AgLSAxNTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKGFydGljbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QXJ0aWNsZUNob3JkcygpIHtcbiAgICAgICAgY29uc3QgZWxlbUNob3JkcyA9IGdldENvb3JkcygkYXJ0aWNsZVRpdGxlc1swXSk7XG5cbiAgICAgICAgaWYgKFdJTi5wYWdlWU9mZnNldCA+PSBlbGVtQ2hvcmRzLnRvcCAtIDMwKSB7XG5cbiAgICAgICAgICAgICRhcnRpY2xlc0xpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICd0b3AnOiAzMCArICdweCcsXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiBlbGVtQ2hvcmRzLmxlZnQgKyAncHgnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGFydGljbGVzTGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdzdGF0aWMnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRhcnRpY2xlc0xpc3QubGVuZ3RoICYmICRhcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgICAgJGFydGljbGVzTGlzdC5jc3Moe1xuICAgICAgICAgICAgJ3dpZHRoJzogJGFydGljbGVzTGlzdC5vdXRlcldpZHRoKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0LLRi9C/0L7Qu9C90LjRgtGM0YHRjyDRgtC+0LvRjNC60L4g0YLQvtCz0LTQsCDQutC+0LPQtNCwINCx0YPQtNC10YIg0LTQtdC50YHRgtCy0LjRjyDRgdC60YDQvtC70LvQuNC90LNcbiAgICAgICAgJChXSU4pLnNjcm9sbCgoKSA9PiB7XG4gICAgICAgICAgICBXSU4uc2NyZWVuLndpZHRoID49IDEyMDAgJiYgc2V0QXJ0aWNsZUNob3JkcygpO1xuICAgICAgICAgICAgc2V0QXJ0aWNsZUFjdGl2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQstGL0L/QvtC70L3QuNGC0YzRgdGPINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INC60L7QtNCwXG4gICAgICAgIFdJTi5zY3JlZW4ud2lkdGggPj0gMTIwMCAmJiBzZXRBcnRpY2xlQ2hvcmRzKCk7XG4gICAgICAgIHNldEFydGljbGVBY3RpdmUoKTtcblxuICAgICAgICBpZiAoV0lOLnNjcmVlbi53aWR0aCA8IDEyMDApIHtcbiAgICAgICAgICAgICQoJyNibG9nX19hcnRpY2xlLWFkYXB0aXZlLWJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjYmxvZ19fYXJ0aWNsZS10aXRsZXMnKS50b2dnbGVDbGFzcygnYWRhcHRpdmUtc2hvdycpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnI2Jsb2dfX2FydGljbGUtdGl0bGVzJykubGVuZ3RoIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdibG9nX19hcnRpY2xlLWxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjYmxvZ19fYXJ0aWNsZS10aXRsZXMnKS5yZW1vdmVDbGFzcygnYWRhcHRpdmUtc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwiZmlsZSI6ImJsb2cuanMifQ==

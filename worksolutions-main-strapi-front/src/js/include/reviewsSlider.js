import Slider from "./slider"
import {isAnyPartOfElementInViewport} from "./utils";

const url = "/reviews-api";

function preparePicture(pictureUrl){
    let url = pictureUrl
    if (process.env.RUNS_IN_VARIOUS_NETWORKS === "true") {
        url = process.env.API_HOST + pictureUrl;
    }

    return ` 
        <picture>
          <source type="image/jpg" data-srcset="${url}">
          <img class="reviews-main__avatar lazyload" data-src="${url}" alt="avatar">
        </picture>`

}

function renderReviewCards(data){
  const tempList = document.createDocumentFragment();

  data.forEach((item) => {
    const { photo, fullname, text, position, project, socialLink } = item

    const picture = preparePicture(photo.url)

    const reviewListElement = `
        <div class="reviews-card-container hidden">
          <div class="reviews-main__card reviews-card js-reviewsCarousel-card">
            <div class="reviews-main__top">
                ${socialLink ? 
                 `<a class="reviews-main__social-link" target="_blank" rel='nofollow' href="${socialLink}">${picture}</a>` : 
                 picture
                 }
              <div class="reviews-main__reviewer-info">
                ${socialLink ? 
                 `<a class="reviews-main__fullname" target="_blank" rel='nofollow' href="${socialLink}">${fullname}</a>` : 
                 `<div class="reviews-main__fullname">${fullname}</div>`
                 }
                <div class="wrapp-specialty">
                ${position.link ? 
                  `<a class="reviews-main__specialty reviews-main__specialty-link" target="_blank" rel='nofollow' href="${position.link}">${position.text}</a>` : 
                  `<div class="reviews-main__specialty">${position.text}</div>`
                 }
                  , 
                ${project.link ?
                  `<a class="reviews-main__specialty reviews-main__specialty-link" target="_blank" rel='nofollow' href="${project.link}">${project.text}</a>` : 
                  `<div class="reviews-main__specialty">${project.text}</div>`
                 }  
                </div>
              </div>
            </div>
            <div class="reviews-main__content">
              <div class="reviews-main__text">${text}</div>
            </div>
            <img class="reviews-main__quotes lazyload" data-src="/i/quotes.svg" alt="quotes">
          </div>
        </div>`
      $(reviewListElement).appendTo(tempList);
  });

  return tempList;
}

function loadReviews(){
    const reviewsLine = $("#reviewsCarouselLine");

    if (isAnyPartOfElementInViewport($(reviewsLine)[0], 500) && reviewsLine.attr("data-loaded") === "false"){

        reviewsLine.attr("data-loaded", "true");

        $.ajax({
            url,
            type: "GET",
            contentType: false,
            cache: false,
            success: function(data) {
                reviewsLine.append(renderReviewCards(data));
                reviewsLine.removeClass("hidden");
                initReviewsSlider()
            },
            error: function(e) {
                console.log(e);
            },
        });
    }
}

function initReviewsSlider() {
  const elements = {
    wrapper: $('#reviewsCarouselWrapper'),
    slider: $('#reviewsCarouselLine'),
    cards: $('.reviews-card-container'),
  };

  const setWidth = () => {
    const { slider, cards } = elements;

    const screenWidth = $(window).width();
    const blockWidth = $(".section__in").width();
    const padding = screenWidth < 1152 ? 16 : 24;

    const cardWidth = screenWidth < 768
        ? blockWidth * 0.95
        : Math.max((blockWidth - padding) / 2, 480);

    cards.each(function() {
      $(this).width(cardWidth);
    })

    slider.width((cards.outerWidth() + padding) * cards.length);
  }

  new Slider({
    elements,
    onInit: setWidth,
    onResize: setWidth,
  }).init();
}

export default function() {
    $(window)
        .on("scroll", loadReviews)
        .on("resize", loadReviews);
}

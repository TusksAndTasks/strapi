export default function() {
    const reviewsLine = $(".technologies__list");

    $.ajax({
        url: '/tech-api',
        type: "GET",
        contentType: false,
        cache: false,
        success: function(data) {
            reviewsLine.append(constructPartners(data));
        },
        error: function(e) {
            console.log(e);
        },
    });

}

function constructLogos(logos){
    return `
     <li class="technologies__inner-subitem">
                  <picture>
                    <source type="image/webp" srcset="${process.env.API_HOST + logos.url}" >
                    <img class=" lazyloaded" src="${process.env.API_HOST + logos.url}">
                  </picture>
                </li>
    `
}

function constructStack(stack){
    return `
        <li class="technologies__inner-item">
              <h4 class="technologies__item-subtitle">${stack.title}</h4>
              <ul class="technologies__inner-sublist">
                ${stack.logos.reduce((accum,elem) => (accum + constructLogos(elem)), '')}
              </ul>
            </li>
    `
}


function constructPartners(data){
    const tempList = document.createDocumentFragment();
    data.section.forEach((item) => {
        const dataElement = `
        <li class="technologies__item">
          <h3 class="technologies__item-title">${item.title}</h3>
          <ul class="technologies__inner-list">
              ${item.stack.reduce((accum,elem) => (accum + constructStack(elem)), '')}
          </ul>
        </li>
      `
        $(dataElement).appendTo(tempList);
    })

    return tempList;
}
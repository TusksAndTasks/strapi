export default function() {
    const reviewsLine = $(".features__list");

    $.ajax({
        url: '/features-api',
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

function constructPartners(data){
    const tempList = document.createDocumentFragment();

    data.forEach((item) => {
        const url = process.env.API_HOST + item.icon.url

        const dataElement = `
      <li class="features__item">
        <img src="${url}" class="features__item-img" alt="alt text">
        <h3 class="features__item-title">${item.title}</h3>
        <p class="features__item-desc">${item.description}</p>
      </li>`

        $(dataElement).appendTo(tempList);
    })

    return tempList;
}
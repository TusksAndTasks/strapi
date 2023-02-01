export default function() {
    const reviewsLine = $(".numbers-data");

    $.ajax({
        url: '/data-numbers-api',
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

        const dataElement = `
      <li class="about__item">
        <div class="about__item-title">${item.number}</div>
        <div class="about__item-desc">${item.description}</div>
      </li>`

        $(dataElement).appendTo(tempList);
    })

    return tempList;
}
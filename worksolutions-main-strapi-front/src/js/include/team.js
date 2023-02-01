export default function() {
    const reviewsLine = $(".teamCarousel__line");

    $.ajax({
        url: '/team-api',
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
        const { photo, name, position, experience, skills, text } = item
        const dataElement =  `
        <div class="teamCard js-teamCarousel-card">
            <div class="teamCard__view">
                <picture>
                    <img src="${process.env.API_HOST + photo.url}" class="teamCard__image ls-is-cached lazyloaded">
                </picture>
            </div>
            <div class="teamCard__info">
                <div class="personalCard">
                    <div class="js-personalCard-animate">
                        <div class="personalCard__name">
                            ${name}
                        </div>
                        <div class="personalCard__employment">
                            ${position}
                        </div>
                    </div>
                    ${experience ? `
                          <div class="personalCard__experience js-personalCard-animate">
                            <p>
                                <strong>Опыт:</strong>
                                <span>${experience}</span>
                            </p> ${skills ? `
                                <p>
                                    <strong class="stack">
                                        ${skills}
                                    </strong> 
                                </p>` : ''}    
                          </div>` : ''}
                     ${text ? `
                            <div class="personalCard__comment js-personalCard-animate">
                                   ${text}
                            </div>` : ''}
                </div>
            </div>
        </div>
    `
        $(dataElement).appendTo(tempList);
    })

    return tempList;
}
export default function() {
    const reviewsLine = $(".team-grid");

    $.ajax({
        url: '/devs-api',
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

function createPhotoList(photo){
    const url = process.env.API_HOST + photo.url
    return `
    <div class="team-grid__image-wrapper">
            <div class="team-grid__image-wrapper">
                <picture>
                    <img class="team-grid__image ls-is-cached lazyloaded" alt="" src="${url}"/>
                </picture>  
            </div>
        </div>
    `
}

function constructPartners(data){
    const tempList = document.createDocumentFragment();

        const dataElement = `
          <div class="team-grid__block team-grid__block_text team-grid__block_text_top">
            <div class="team-grid__icon-wrapper">
             <div class="team-grid__icon"></div>
            </div>
            <div class="team-grid__text">Два отдела разработки со специалистами разных грейдов</div>
          </div>
          <div class="team-grid__block team-grid__block_staff team-grid__block_staff_top">
             <h3 class="team-grid__headline">Frontend</h3>
             <div class="team-grid__images-block">
              ${data.frontend.reduce((accum, elem) =>(accum + createPhotoList(elem)), '')}
             </div>
          </div>
          <div class="team-grid__block team-grid__block_staff team-grid__block_staff_bottom">
          <div class="team-grid__icon-wrapper">
             <div class="team-grid__icon"></div>
            </div>
            <div class="team-grid__text">Мы не используем ГПХ, ИП и режим самозанятого. Всех оформляем в штат на полный день по ТК РФ</div>
          </div>
          <div class="team-grid__block team-grid__block_text team-grid__block_text_bottom">
           <h3 class="team-grid__headline">Backend</h3>
             <div class="team-grid__images-block">
                ${data.backend.reduce((accum, elem) =>(accum + createPhotoList(elem)), '')}
             </div>
          </div>
        `

        $(dataElement).appendTo(tempList);

    return tempList;
}
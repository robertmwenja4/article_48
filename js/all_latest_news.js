const container = document.getElementById('news-cards');

newsData.forEach(item => {
    const col = document.createElement('div');
    col.className = "col-lg-4 col-md-6 col-12 mb-4";
    col.innerHTML = `
        <div class="custom-block-wrap">
            <img src="${item.image}" class="custom-block-image img-fluid" alt="">
            <div class="custom-block">
                <div class="custom-block-body">
                    <h5 class="mb-3">${item.title}</h5>
                    <p>${item.summary}</p>
                </div>
                <a href="gender_disability.html?id=${item.id}" class="custom-btn btn">Read More</a>
            </div>
        </div>
    `;
    container.appendChild(col);
});
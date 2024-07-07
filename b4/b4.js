var articles = [
    {
        img: "https://i.pinimg.com/564x/80/42/3b/80423b3c0022c8a6c8efcc00fb9a6a51.jpg",
        title: "Article 1",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        distinctio, perferendis commodi iusto dignissimos, qui, rem dolor iste
        rerum esse consectetur sint tempore tempora quo culpa? Dolorum in
        exercitationem temporibus!.`,
    },
    {
        img: "https://i.pinimg.com/564x/80/42/3b/80423b3c0022c8a6c8efcc00fb9a6a51.jpg",
        title: "Article 2",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        distinctio, perferendis commodi iusto dignissimos, qui, rem dolor iste
        rerum esse consectetur sint tempore tempora quo culpa? Dolorum in
        exercitationem temporibus!.`,
    },
    {
        img: "https://i.pinimg.com/564x/80/42/3b/80423b3c0022c8a6c8efcc00fb9a6a51.jpg",
        title: "Article 3",
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        distinctio, perferendis commodi iusto dignissimos, qui, rem dolor iste
        rerum esse consectetur sint tempore tempora quo culpa? Dolorum in
        exercitationem temporibus!.`,
    },
];

var renderArticles = function () {
    var articleList = document.getElementById("article-list");
    articleList.innerHTML = articles
        .map(function (article, index) {
            if (index % 2 === 0) {
                return `
                <div class="article" style="display: flex;">
                    <img src="${article.img}" alt="${article.title}" style="flex: 1;">
                    <div class="content" style="flex: 1; padding-left: 20px;">
                        <h2>${article.title}</h2>
                        <p>${article.content}</p>
                    </div>
                </div>
                `;
            } else {
                return `
                <div class="article" style="display: flex;">
                    <div class="content" style="flex: 1; padding-right: 20px;">
                        <h2>${article.title}</h2>
                        <p>${article.content}</p>
                    </div>
                    <img src="${article.img}" alt="${article.title}" style="flex: 1;">
                </div>
                `;
            }
        })
        .join("");
};

window.onload = renderArticles;

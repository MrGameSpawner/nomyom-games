function createGameCard(game){

    return `

    <article class="game-card">

        <div class="game-thumb">

            ${game.image || "Coming Soon"}

        </div>

        <div class="game-info">

            <span class="game-category">

                ${game.category}

            </span>

            <h3>

                ${game.title}

            </h3>

            <div class="rating">

                ⭐ ${game.rating}

            </div>

            <a href="${game.url}" class="play-btn">

                ▶ Play

            </a>

        </div>

    </article>

    `;

}

function renderFeaturedGames(){

    const container = document.getElementById("featured-games");

    container.innerHTML = featuredGames
        .map(createGameCard)
        .join("");

}

renderFeaturedGames();
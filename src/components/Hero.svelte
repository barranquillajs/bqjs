<div class="hero-container">
	<div class="hero">
		<div class="text-container">
			<div class="text">
				<p>
					Este es un grupo para todos los desarrolladores, entusiastas y apasionados por JavaScript en Barranquilla y la Costa Atlántica.
				</p>
				<a class="baq-button" target="_blank" href="https://www.meetup.com/es-ES/BarranquillaJS/">
					Únete
				</a>
			</div>
		</div>
		<div class="map">
			<img src="/b2.svg" alt="Mapa de Barranquilla" />
		</div>
	</div>
</div>

<style>
  .hero-container {
    display: grid;
    grid-template-columns: minmax(auto, 1124px);
    justify-content: center;
  }
  .hero {
    color: #233034;
    line-height: 1.36;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  .text-container {
    padding: 16px;
  }
  .text {
    font-weight: 300;
    font-size: 1.4rem;
  }
  .baq-button {
    background: #ffd121;
    height: 53px;
    padding: 0 25px;
    line-height: 36px;
    display: inline-block;
    text-decoration: none;
    color: #233034;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    max-width: 120px;
    justify-content: center;
    text-transform: uppercase;
    transition: all 0.2s ease-in;
    letter-spacing: 1px;
  }

  .baq-button:hover {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in;
  }

  .map {
    text-align: center;
  }

  .map img {
    max-width: 80%;
  }

  @media (max-width: 1064px) {
    .hero {
      grid-template-columns: 1fr;
    }
    .map img {
      width: 90%;
    }
  }

  @media screen and (min-width: 620px) {
    .text {
      font-size: 2rem;
    }
  }
</style>

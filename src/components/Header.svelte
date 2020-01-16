<header>
	<div class="header-container">
		<div class="title-area header-order-1">
			<img class="logo" src="/BAQJS-02.png" alt="BarranquillaJS logo">
			<h1 class="title">
				BarranquillaJS
			</h1>
		</div>
		<a class="header-icon header-order-2" target="_blank" href="https://www.instagram.com/barranquillajs/"><svg class="icon icon-instagram">
				<use xlink:href="#icon-instagram"></use>
			</svg></a>
		<a class="header-icon header-order-3" target="_blank" href="https://twitter.com/baq_js"><svg class="icon icon-twitter">
				<use xlink:href="#icon-twitter"></use>
			</svg></a>
		<a class="header-icon header-order-4" target="_blank" href="https://github.com/barranquillajs"><svg class="icon icon-github">
				<use xlink:href="#icon-github"></use>
			</svg></a>
		<a class="header-icon header-order-5" target="_blank" href="https://barranquillajs.slack.com/join/shared_invite/enQtNDI1OTYwOTE2MjQwLTJhYWIzOGJhZDQ3NDljYmMyZjNiMzUwYWM0ZGMwYTliMWRhYmQ2ZjVhODM4MjE2OTg4YTEwYTQzMjAzMzA1Mzc"><svg
			 class="icon icon-slack">
				<use xlink:href="#icon-slack"></use>
			</svg></a>
	</div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #f2d903;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .header-container {
    max-width: 1124px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-order-1 {
    order: 3;
  }
  .header-order-2 {
    order: 2;
  }
  .header-order-3 {
    order: 1;
  }
  .header-order-4 {
    order: 4;
  }
  .header-order-5 {
    order: 5;
  }
  .title-area {
    display: flex;
    align-items: center;
  }
  .title {
    font-weight: 600;
    margin: 0;
    font-size: 1px;
    position: absolute;
    opacity: 0;
  }
  .logo {
    width: 60px;
    height: 60px;
  }
  .header-icon {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.7);
    transition: 0.3s ease;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-icon:hover {
    color: rgb(0, 0, 0);
  }

  @media (min-width: 630px) {
    .header-container {
      justify-content: flex-end;
    }
    .title {
      font-size: 1.6rem;
      position: relative;
      opacity: 1;
    }
    .title-area {
      margin-right: auto;
    }
    .header-order-1 {
      order: 1;
    }
    .header-order-2 {
      order: 2;
    }
    .header-order-3 {
      order: 3;
    }
    .header-order-4 {
      order: 4;
    }
    .header-order-5 {
      order: 5;
    }
  }
</style>
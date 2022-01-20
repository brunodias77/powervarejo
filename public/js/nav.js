const nav = document.querySelector(".navbar");
nav.innerHTML = `
<div class="line-1">
<div class="content-line-1">
  <span>grande oportunidade no liquida total!</span>
  <span
    >produtos com ate
    <span class="style-span-line-1">50% off</span>
  </span>
  <button class="btn">aproveite</button>
</div>
</div>

<div class="line-2">
<div class="content-line-2">
  <div class="logo">
    <span>power<span class="style-span-line-2">varejo</span> </span>
  </div>
  <div class="search-navbar">
    <input
      type="text"
      id="search-home"
      placeholder="O que você esta buscando ? "
    />
    <i class="fas fa-search"></i>
  </div>
  <div class="nav-cart">
    <div class="icon-navbar">
      <i class="fas fa-box-open fa-2x"></i>
      <span>Rastreie </br> seu pedido</span>
    </div>
    <div class="icon-navbar">
      <i class="fas fa-user fa-2x"></i>
      <span>Entre ou <br> Cadastre-se</span>
    </div>
    <div class="icon-navbar cart">
      <i class="fas fa-shopping-cart fa-2x"></i>
    </div>
  </div>
</div>
</div>

<div class="line-3">

<div class="content-line-3">
  <div class="all-categories">

    <div class="all-categories-icon">
      <i class="fas fa-bars fa-lg"></i>
      <span>todas as <br> categorias </span>
    </div>

    <ul class="all-categories-dropdown">
      <li>Playstation</li>
      <li>X-box</li>
    </ul>

  </div>
  <nav class="other-categories">
    <ul>
      <li>utilidade doméstica</li>
      <li>brinquedos</li>
      <li>cama mesa e banho</li>
      <li>eletroportateis</li>
      <li>decoração e móveis</li>
      <li>informática</li>
    </ul>
  </nav>
</div>

</div>

<div class="line-4">
<div class="content-line-4">
  <div class="icon-line4">
    <i class="fas fa-credit-card fa-sm"></i>
    <span>parcelamento em até 12x sem juros</span>
  </div>
  <div class="icon-line4">
    <i class="fas fa-truck fa-sm"></i>
    <span>frete grátis acima de R$ 99,00</span>
  </div>
  <div class="icon-line4">
    <i class="fas fa-hand-holding fa-sm"></i>
    <span>compre e retire na loja</span>
  </div>
</div>
</div>


`;

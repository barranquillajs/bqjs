<script>
  export let role = "";
  export let photo = "";
  export let name = "";

  $: isMember = role == "member";
  $: isOrganizer = role == "organizer";
  $: userPhoto =
    photo || `https://api.adorable.io/avatars/120/${name}@adorable.png`;
</script>

<style>
  .aspect-ratio {
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 100%;
  }
  .aspect-ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .item {
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }
  .member-item {
    max-width: 33.33333%;
  }
  .organizer-item {
    max-width: 50%;
  }
  .item-inner {
    padding: 1rem;
  }
  .item-image-container {
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0 4px rgba(240, 189, 64, 1);
  }
  .member-image-container {
    text-align: center;
  }
  .organizer-image-container {
    text-align: center;
    margin: 0 auto;
  }
  .member-photo {
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .member-name {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    line-height: 1.3;
  }
  @media screen and (min-width: 620px) {
    .member-item {
      max-width: 16.6666667%;
    }
    .organizer-item {
      max-width: 20%;
    }
  }
</style>

<li
  class:member-item={isMember}
  class:organizer-item={isOrganizer}
  class="item">
  <div class="item-inner">
    <div
      class:member-image-container={isMember}
      class:organizer-image-container={isOrganizer}
      class="item-image-container">
      <div class="aspect-ratio">
        <div>
          <img
            src={userPhoto}
            alt="foto de {name}"
            title={name}
            class="member-photo" />
        </div>
      </div>
    </div>
  </div>
  <div class="member-name">{name}</div>
</li>

<script>
  import MemberItem from "./MemberItem.svelte";

  export let members = [];

  $: organizers = members.filter(
    member => typeof member.group_profile.role !== "undefined"
  );
  $: regularMembers = members.filter(
    member => typeof member.group_profile.role == "undefined"
  );
</script>

<style>
  .members-container {
    position: relative;
  }
  .members-wrapper {
    margin: auto;
    max-width: 1124px;
  }
  .list {
    list-style-type: none;
  }
  .text-center {
    text-align: center;
  }
  .flex-container {
    margin: 0 0 2rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    color: #393939;
  }
  .flex-container-organizers {
    justify-content: space-around;
  }
  .flex-container-members {
    justify-content: space-between;
  }
  .page-title {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>

<div class="members-container">
  <div class="members-wrapper">
    <div class="text-center">
      <h2 class="page-title">¿Quiénes somos?</h2>
    </div>
    <ul class="flex-container text-center flex-container-organizers list">
      {#each organizers as member (member.id)}
        <MemberItem
          name={member.name}
          role="organizer"
          photo={member.photo ? member.photo.photo_link : undefined} />
      {/each}
    </ul>
    <ul class="flex-container text-center flex-container-members list">
      {#each regularMembers as member (member.id)}
        <MemberItem
          name={member.name}
          role="member"
          photo={member.photo ? member.photo.photo_link : undefined} />
      {/each}
    </ul>
  </div>
</div>

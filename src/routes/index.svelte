<script context="module">
  export function preload({ params, query }) {
    return this.fetch("members.json")
      .then(res => res.json())
      .then(res => {
        return {
          members: res
        };
      })
      .catch(err => {
        console.warn(err);
      });
  }
</script>

<script>
  import Header from "../components/Header.svelte";
  import Hero from "../components/Hero.svelte";
  import Members from "../components/Members.svelte";

  let members = [];
</script>

<svelte:head>
  <title>BarranquillaJS: Comunidad de javascript Barranquillera</title>
</svelte:head>

<Header />
<Hero />
<Members {members} />

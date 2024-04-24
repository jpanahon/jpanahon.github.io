<script>
    import "../app.css";
    import { base } from "$app/paths";
    let year = new Date().getFullYear();

    let showNavBar = false;
</script>

<header class="z-1 flex items-center justify p-4 border-[#a85fff] border-b-2 fixed w-full bg-black">
    <button class="text-6xl text-left fixed" on:click={() => (showNavBar = !showNavBar)}> &equiv; </button>
    <h1 class="m-auto text-6xl font-bold"><a href={base}>Jovic's Space</a></h1>
    {#if showNavBar}
        <nav class="z-2 text-3xl fixed border-black border-r-2">
            <ul class="mt-16 fixed h-screen bg-[#a85fff] p-4">
                <li class="mb-8"><a href="{base}/">Home</a></li>
                <li class="mb-8"><a href="{base}/projects">Projects</a></li>
                <li class="mb-8"><a href="/jovic-panahon-resume.pdf" target="_blank">Resume</a></li>
                <li class="mb-8"><a href="{base}/about">About</a></li>
                <li class="mb-8"><a href="{base}/contact">Contact</a></li>
            </ul>
        </nav>
    {/if}
</header>

<slot />

<footer class="text-center text-xl p-5 bg-[#a85fff] mt-full w-full mt-16">
    Copyright &copy; {year} Jovic Panahon
</footer>

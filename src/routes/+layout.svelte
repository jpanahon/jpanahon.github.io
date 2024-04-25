<script>
    import "../app.css";
    import { base } from "$app/paths";
    let year = new Date().getFullYear();

    let showNavBar = false;
</script>

<header class="z-10 justify p-4 border-[#a85fff] border-b-2 sticky w-full bg-black">
    <button class="text-6xl text-left fixed" on:click={() => (showNavBar = !showNavBar)}> &equiv; </button>
    <h1 class="text-center text-6xl font-bold"><a href={base}>Jovic's Space</a></h1>
    {#if showNavBar}
        <nav class="z-20 text-3xl h-full fixed bg-[#a85fff] border-black border-r-2">
            <ul class="mt-16 p-4">
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

<footer class="text-center text-xl p-5 bg-[#a85fff] mt-auto w-full">
    Copyright &copy; {year} Jovic Panahon
</footer>

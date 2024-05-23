<script>
    import { base } from "$app/paths";
</script>

<title> Jovic's Space </title>
<section class="flex h-screen justify-center items-center">
    <div class="text-center">
        <h1 class="text-6xl">I write very persuasive essays to computers.</h1>
        <sub class="text-3xl">Welcome to my website, I hope you enjoy your stay.</sub> <br />
        <sub class="text-6xl"><a href="#notable-projects">&vee;</a></sub>
    </div>
</section>
<div class="w-1/2 m-auto mb-16">
    <h1 class="text-6xl text-center" id="notable-projects">Notable Projects</h1>
    <section>
        <h1 class="text-3xl text-center">Adrenaline Engine</h1>
        <p>
            My open source game engine. This project is still under heavy development but has the capability to render
            complex 3D scenes in a few seconds, since going to university I was able to make my codebase more
            maintainable. <br />
            <a href="{base}/projects/adrenaline-engine">Learn more</a>
        </p>
    </section>
    <br /> <br />
    <section>
        <h1 class="text-3xl text-center">What's Up With This Water?</h1>
        <p>
            An open source project I worked on with <b
                ><a href="https://www.linkedin.com/in/ahmadmunim">Ahmad Munim</a></b
            >,
            <b><a href="https://www.linkedin.com/in/altumiasma">Asma Altumi</a></b>,
            <b><a href="https://www.linkedin.com/in/isteyak-409578230">Isteyak Isteyak</a></b>,
            <b><a href="https://www.linkedin.com/in/rocio-rueda-705a4a26a">Rocio Rueda</a></b>, and
            <b><a href="https://www.linkedin.com/in/umayerk">Umayer Khan</a></b> for the NASA Space Apps Challenge
            Hackathon. We created a web application powered by Django and StreamLit showcase endangered species and
            water quality information since the year 2000. <br />
            <a href={base}>Learn more</a>
        </p>
    </section>
    <br /> <br />
    <section>
        <h1 class="text-3xl text-center">Xeno: Area 51</h1>
        <p>
            An open source video game project I worked on with
            <b><a href="https://www.linkedin.com/in/adnan-naeem-5b609623a">Adnan Naeem</a></b>,
            <b><a href="https://www.linkedin.com/in/joe-elson">Joe Elson</a></b>,
            <b><a href="https://www.linkedin.com/in/mark-zayat-b627b014a">Mark Zayat</a></b>,
            <b><a href="https://www.linkedin.com/in/matthewconnell-123456">Matthew Connell</a></b>, and
            <b><a href="https://www.linkedin.com/in/nickboisclair">Nick Boisclair</a></b>. We created an alien invasion
            themed campaign game with RPG and tower defense elements using the Unity Game Engine.
            <br /> <a href={base}>Learn more</a>
        </p>
    </section>
    <br /> <br />
    <section>
        <h1 class="text-3xl text-center">The UWindsor Board Games Club Suite</h1>
        <p>
            An open source web app and discord bot for the University of Windsor Board Games Club. Serving over 300 club
            members on our discord where we host online events. <br /> <a href={base}>Learn more</a>
        </p>
    </section>
</div>

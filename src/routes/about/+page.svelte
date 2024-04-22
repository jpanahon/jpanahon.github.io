<script>
    const today = new Date();
    const birthday = new Date("2003-05-03");

    let age = today.getFullYear() - birthday.getFullYear();

    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    let ageMessage = "";
    if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
        ageMessage = `Today is my birthday, I turned ${age}`;
    } else {
        ageMessage = `I am currently ${age} years old`;
    }
</script>

<title>About Me</title>

<section class="m-auto w-1/2 text-2xl">
    <h1 class="text-3xl text-center font-bold">About Me</h1>

    <p class="indent-10">
        My name is Jovic Panahon, {ageMessage}. I am an international third year computer science major studying at the
        University of Windsor. I got into computer science because I was fascinated with computers, and had the grateful
        opportunity to learn Python in middle school. Learning Python kickstarted my interest in working with computers
        and learning how they work. Since then I have learned many languages and started projects in various aspects of
        computer science.
    </p>
    <br />
    <p class="indent-10">
        Outside of studying computer science and working on software, I enjoy playing video games, cooking, and graphic
        design.
    </p>
</section>

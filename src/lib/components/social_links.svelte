<script>
    let links=[
        {
            title:"Github",
            img:"/github.svg",
            url:"https://github.com/Blackytuvavwene"
        },
        {
            title:"Twitter",
            img:"/twitter.svg",
            url:"https://twitter.com/Blackytubabwene"
        },
        {
            title:"LinkedIn",
            img:"/linkedin.svg",
            url:"https://www.linkedin.com/in/boitumelo-tubabwene-7894b8192/"
        },
        {
            title:"Facebook",
            img:"/facebook.svg",
            url:"https://www.facebook.com/boitumelo.blacky"
        },
        {
            title:"Instagram",
            img:"instagram.svg",
            url:"https://www.instagram.com/tubabweneb/"
        }
    ];
</script>

<div class="flex flex-col-reverse items-center justify-center md:flex md:flex-row md:items-center md:justify-between
            my-6 ">
    <div class="flex w-fit flex-col-reverse ml-12 sm:flex-col sm:mr-28">
        <h2 class="text-center text-white font-bold">Boitumelo Tubabwene</h2>
        <div class="flex flex-col items-center justify-center h-full w-full">
            <img src="/pic.png" alt="me" class="p-4 w-1/2 h-1/2 rounded-full ">
            <div class="p-2">
                <p class="text-lg font-bold">Contact : <a href="tel:+26773449299" class="text-center text-blue-600 hover:border-2 hover:bg-white
                  hover:rounded-lg hover:p-2 hover:-translate-x-4  ">+267 73 449 299</a></p>
            </div>
        </div>

    </div>
    <div class="flex flex-col w-full items-center justify-center md:items-center">
        <h2 class="text-cyan-50 top-0 font-extrabold">Reach me on social</h2>
        <div class="flex flex-row items-end justify-between p-2">
            {#each links as link}
            <a href={link.url} class="hover:scale-150">
                <img src={link.img} alt={link.title} class="h-10 w-20 m-4"/></a>
                {/each}
        </div>
    </div>
</div>
const worksCardEl = document.getElementById("worksCard")

const projectsInfo = [
    {
        id: "1",
        year: "2020",
        title: "Real Project",
        subTitle: "Website Development",
    },
    {
        id: "1",
        year: "2020",
        title: "Real Project",
        subTitle: "Website Development",
    }
]

function renderWorks() {
    let worksDOM = ''
    for (let i = 0; i < projectsInfo.length; i++) {
        worksDOM += `
        <div class="col-md-6">
            <a href="" class="card">
                <p class="subH">
                    ${projectsInfo[i].year}
                </p>
                <h3 class="smallH">
                    ${projectsInfo[i].title} - ${projectsInfo[i].subTitle}
                </h3>
            </a>
        </div>`
        worksCardEl.innerHTML = worksDOM

    }
}
// <span>View Project</span>
renderWorks()
const newsItems = [
    {
        id: 1,
        title: "GENDER AND DISABILITY",
        image: "images/causes/gender_and_disability.png",
        summary: "A48 addresses matters of intersectionality particular discrimination faced at the intersection of gender, sexuality and disability. Being a woman in the Kenyan traditional ...",
        content: "Intersectionality in Gender, Disability, and Justice <br> A48 actively addresses intersectional discrimination faced by women and girls with disabilities—particularly at the crossroads of gender, sexuality, and disability. In Kenyan society, being a woman already exposes one to systemic discrimination. For women with disabilities, these challenges are compounded by attitudinal, communication, legal, and physical barriers that significantly limit access to justice. <br><br>On March 8, 2023—International Women’s Day—A48 launched a report titled 'Warigia Speaks', which documents the experiences of women and girls with multiple disabling conditions during the COVID-19 pandemic in Kenya and Uganda. The report has been instrumental in informing law and policy reforms, especially in shaping Kenya’s Maternal, Newborn and Child Health Bill and the Primary Healthcare Act of 2023, to improve healthcare access for persons with disabilities. <br><br> A poignant example of intersectionality in action involves a 17-year-old girl who was wrongfully incarcerated for five years in an adult prison, originally classified as a child in need of care and protection. Her file indicated a neurodevelopmental condition, estimated her age as a teenager, and noted minimal cognitive recovery. A48 encountered her during a menstrual health legal aid session. She was later released through the Chief Magistrate’s Court. However, post-release, she faced complete systemic neglect. With no reintegration plan, she lacked access to education, shelter, family, or support for training or employment. Without any formal records or registration, she could not acquire a national ID—rendering her legally invisible in Kenya. A48 successfully traced her family and facilitated a reunion, restoring her sense of identity and belonging.",
    },
    {
        id: 2,
        title: "ACCESS TO JUSTICE",
        image: "images/causes/access_to_justice.png",
        summary: "A48 defines access to justice as removal of all barriers that can hinder persons with disabilities from seeking redress once an unlawful or wrong act has been done to them...",
        content: "A48 defines <strong>access to justice</strong> as the removal of all barriers—whether legal, procedural, social, or institutional—that prevent persons with disabilities from seeking redress when their rights are violated. As a fundamental human right, access to justice should be guaranteed for all individuals, regardless of race, health status, gender, cultural background, or socio-economic class.<br><br>" +
            "Laws and policies—whether procedural, administrative, or substantive—must be inclusive of persons with disabilities. Yet, the current legal framework in Kenya often fails to accommodate their unique needs.<br><br>" +
            "A48 actively works to change this. We provide training to <strong>Court Users Committees (CUCs)</strong> on implementing reasonable and procedural accommodations for persons with disabilities in the criminal justice system. These trainings are essential because the justice system frequently becomes a <em>vehicle for the denial of liberty</em> on the basis of disability—especially when courts mandate mental assessment reports.<br><br>" +
            "The process itself is discriminatory. Court-ordered assessments must be conducted at <strong>Mathare Maximum Security Prison</strong>, regardless of whether the person has committed a crime. In addition, there are no formal legal or procedural accommodations available for persons with disabilities navigating the criminal justice system.<br><br>" +
            "The <strong>Legal Aid Act of 2016</strong>, particularly Sections 35 and 36, also fails to recognize persons with disabilities as indigent, denying them access to essential legal aid services.<br><br>" +
            "A48 is an active member of the Court Users Committees—multi-agency forums led by the Presiding Judges—to advocate for the rights of persons with disabilities. These committees are uniquely positioned to monitor conditions within prisons and address systemic challenges. Because access to justice and the right to liberty for persons with disabilities intersect across numerous government agencies—including <strong>Mathare National Hospital</strong>, the <strong>Ministry of Health</strong>, the <strong>Council of Governors</strong>, the <strong>Commissioner of Prisons</strong>, the <strong>National Police</strong>, the <strong>Office of the Ombudsman</strong>, the <strong>Directorate of Public Prosecutions</strong>, the <strong>National Council for Persons with Disabilities</strong>, the <strong>Office of the President</strong>, the <strong>Directorate of Social Services</strong>, and the <strong>Kenya National Commission on Human Rights</strong>—CUCs serve as an effective platform to coordinate law and policy reform."
    },
    {
        id: 3,
        title: "INCLUSION IN THE COMMUNITY",
        image: "images/causes/inclusion_in_community.png",
        summary: "At A48, we believe that true inclusion in the community begins with removing the economic and social barriers that prevent persons with disabilities from accessing justice...",
        content: "At A48, we believe true community inclusion begins with removing the <strong>economic and social barriers</strong> that persons with disabilities face in accessing justice. We use <strong>advocacy</strong> and <strong>strategic litigation</strong> as key tools to challenge systemic exclusion and promote equality.<br><br>" +
            "Our process starts with <strong>research and training</strong>. We equip caregivers, support persons, and womn with disabilities with knowledge of their rights and basic <em>paralegal skills</em> before they interact with the justice system. For persons with disabilities already in the criminal justice system, we offer personalized legal aid and targeted one-on-one training.<br><br>" +
            "As we celebrate each success, we document every <strong>release</strong>—a reminder that inclusion and acceptance are essential for persons with <em>psychosocial and intellectual disabilities</em>.<br><br>" +
            "Despite progress, significant challenges remain. Currently, <strong>Presidential pardons</strong> for persons with disabilities are handled through the <strong>Department of Probation and Aftercare Services</strong>. However, the process imposes additional requirements not placed on others:<br><br>" +
            "<ul>" +
            "<li><strong>Family consent for release</strong> – Unlike other prisoners, persons with disabilities must be released into the custody of a family member. If rejected, they cannot be freed.</li>" +
            "<li><strong>Two-year supervision</strong> – Once released, they must remain under the department’s care for two years.</li>" +
            "<li><strong>Conditional terms</strong> – Conditions include adhering to prescribed medication and monthly check-ins with a probation officer. Yet, there are no provisions for housing, employment, or access to medication—creating barriers to successful reintegration.</li>" +
            "</ul><br>" +
            "These systemic failures contribute to <strong>recidivism</strong>, as many individuals cannot meet the strict terms due to a lack of support."
    }
];

const container = document.getElementById('news-cards');

newsItems.forEach(item => {
    const col = document.createElement('div');
    col.className = "col-lg-4 col-md-6 col-12 mb-4";

    col.innerHTML = `
                <div class="custom-block-wrap">
                    <img src="${item.image}" class="custom-block-image img-fluid" alt="">
                    <div class="custom-block">
                    <div class="custom-block-body">
                        <h5 class="mb-3">${item.title}</h5>
                        <p>${item.summary}</p>
                    </div>
                    <a href="gender_disability.html" class="custom-btn btn" onclick="viewNews(${item.id})">Read More</a>
                    </div>
                </div>
                `;

    container.appendChild(col);
});

function viewNews(id) {
    const selectedItem = newsItems.find(item => item.id === id);
    localStorage.setItem('selectedNews', JSON.stringify(selectedItem));
}
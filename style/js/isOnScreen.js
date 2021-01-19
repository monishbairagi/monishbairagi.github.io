function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const home =  document.querySelector('#Home');
const about = document.querySelector('#About');
const education = document.querySelector('#Education');
const skills = document.querySelector('#Skills');
const internships = document.querySelector('#Internships');
const projects = document.querySelector('#Projects');
const contact = document.querySelector('#Contact');

document.querySelector('#Ho').style.color = "white";
document.querySelector('#Ho').style.fontWeight = "bold";

document.addEventListener("scroll", function () {
    if(isInViewport(home)){
        document.querySelector('#Ho').style.color = "white";
        document.querySelector('#Ho').style.fontWeight = "bold";

        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";

    }else if(isInViewport(about)){
        document.querySelector('#Ab').style.color = "white";
        document.querySelector('#Ab').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";
    }else if(isInViewport(education)){
        document.querySelector('#Ed').style.color = "white";
        document.querySelector('#Ed').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";
    }else if(isInViewport(skills)){
        document.querySelector('#Sk').style.color = "white";
        document.querySelector('#Sk').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";
    }else if(isInViewport(internships)){
        document.querySelector('#In').style.color = "white";
        document.querySelector('#In').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";
    }else if(isInViewport(projects)){
        document.querySelector('#Pr').style.color = "white";
        document.querySelector('#Pr').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Co').style.color = "#149ddd";
        document.querySelector('#Co').style.fontWeight = "unset";
    }else if(isInViewport(contact)){
        document.querySelector('#Co').style.color = "white";
        document.querySelector('#Co').style.fontWeight = "bold";

        document.querySelector('#Ho').style.color = "#149ddd";
        document.querySelector('#Ho').style.fontWeight = "unset";
        document.querySelector('#Ab').style.color = "#149ddd";
        document.querySelector('#Ab').style.fontWeight = "unset";
        document.querySelector('#Ed').style.color = "#149ddd";
        document.querySelector('#Ed').style.fontWeight = "unset";
        document.querySelector('#Sk').style.color = "#149ddd";
        document.querySelector('#Sk').style.fontWeight = "unset";
        document.querySelector('#In').style.color = "#149ddd";
        document.querySelector('#In').style.fontWeight = "unset";
        document.querySelector('#Pr').style.color = "#149ddd";
        document.querySelector('#Pr').style.fontWeight = "unset";
    }
}, {
    passive: true
});
(function() {
    "use strict";

    // Instant Direct Loader without waiting
    const loadFormInstantly = function() {
        const vismeDiv = document.querySelector(".visme_d");
        if (!vismeDiv) return;

        const formUrl = vismeDiv.getAttribute("data-url");
        const domain = vismeDiv.getAttribute("data-domain") || "forms";
        
        const iframe = document.createElement("IFRAME");
        iframe.className = "vismeForms";
        iframe.setAttribute("src", `https://${domain}.visme.co/formsPlayer/_embed/${formUrl}`);
        iframe.setAttribute("webkitallowfullscreen", "true");
        iframe.setAttribute("mozallowfullscreen", "true");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("scrolling", "yes");
        iframe.setAttribute("title", vismeDiv.getAttribute("data-title"));

        vismeDiv.parentNode.replaceChild(iframe, vismeDiv);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
        loadFormInstantly();
    } else {
        window.addEventListener("DOMContentLoaded", loadFormInstantly);
    }
})();
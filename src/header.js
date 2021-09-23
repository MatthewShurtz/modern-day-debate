function createHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('img');
    logo.src = "/src/img/mdd-logo-w-text.jpeg"
    logo.alt = "Modern Day Logo, a neutral debate platform on science, religion, and politics"
    logo.id = "header-logo"
    header.appendChild(logo)
    

    return header
}

export default createHeader
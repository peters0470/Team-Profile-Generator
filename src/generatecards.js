const generateCards = (employees) => {
    console.log('employees:', employees);

    const createManager = (manager) => {
        return `
        <div class="col s4">
            <div class="card deep-orange accent-3">
                <div class="card content teal lighten-3 center-align">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h5><span class="icon icons"><i class="fas fa-briefcase"></i></span>${manager.getRole()}</h5>
                </div>
                <div class="card-content">
                    <div class="card-content">
                        <span>ID:${manager.getId()}</span>
                    </div>
                    <div class="card-content">
                        <span>Email:<a class='black-text' href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span>
                    </div>
                    <div class="card-content">
                        <span>Office Number: ${manager.officeNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

    
}
module.exports = (employeeHtml) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <header class='deep-orange accent-3'>
        <div class='deep-orange accent-3'>
            <h1 class='center-align'>My Team</h1>
        </div>
    </header>
    <main>
        <section class='row'>
            ${generateCards(employeeHtml)}
        </section>
    </main>
</body>
</html>
`;
}
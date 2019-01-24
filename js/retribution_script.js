//////////////////////
// Coded By Davoleo //
//////////////////////

function calculate() {

    var salary = 1200; //Base salary

    var title = $("[name='title']:checked").val();
    var experience = $("[name='experience']:checked").val();

    //Senza espressione condizionale
    if (title === "diploma")
        salary += 100;
    else
        salary += 300;

    if (experience === "less")
        salary += 200;
    else
        salary += 400;

    $("#retribution1").val(salary);
//--------------------------------------------------------------
    //salary reset
    salary = 1200;

    salary += title==="diploma" ? 100 : 300;
    salary += experience==="less" ? 200 : 400;
    $("#retribution2").val(salary);
//--------------------------------------------------------------
    //salary reset
    salary = 1200;

    //Espressioni condizionali annidate? Esagerate e illeggibili? Sì
    salary += (title==="diploma" ? 100 + (experience==="meno" ? 200 : 400) : 300 + (experience==="meno" ? 200 : 400));

//--------------------------------------------------------------
    //salary reset
    salary = 1200;

    var linguaggio = $("[name='language']:checked").val();

    switch (linguaggio) {
        case "C": salary +=100; break;
        case "C++": salary +=200; break;
        case "PHP": case "Javascript" : salary +=250; break;
        case "Java": salary += 150; break;
        default: salary -= 50; break;
    }


}
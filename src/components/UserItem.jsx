
// Intotdeauna importam React, pentru a putea folosi JSX (JS combinat cu HTML).
import React from "react";


// Pentru o componenta care nu se schimba din momentul afisarii
// este de ajuns sa facem o functie care returneaza un div.
function UserItem(props){
    console.log(props);
// ATENTIE! props este un obiect creat de REACT care are chei 'atributele' de HTML
    // folosite la crearea componentei UserItem (vezi in App.js)
    // pentru a extrage atributele obiectului props, folosim object destructuring (vezi Recapitulare)
const {name, email, salary, img, isGoldClient} = props;
 // ATENTIE! intotdeauna este returnat un singur element HTML
    // (de obicei un div), care le contine pe celelalte!
    return(
     <div>
       <p>{name}</p>
       <p>{email}</p>
       <p>{salary}</p>
       <img src={img}/>
       
       {isGoldClient
       ? <p>Client Gold</p>
       :null
       }

     </div>
    );

    
}
// Pentru a putea fi utilizata in alte locuri, componenta trebuie exportata.
export default UserItem;
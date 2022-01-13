import React from "react";
import './UserAddForm.css'



class UserAddForm extends React.Component {
    // UserAddForm primeste props ca parametru pentru constructor si ii paseaza ca parametru pentru super.
constructor(props){
    super(props);
    // Daca utilizatorul ar da submit la formular, fara sa completeze nimic,
        // acestea ar fi valorile trimise.
        this.state = {
            name: '',
            email: '',
            salary:'',
            img:'',
            isGoldClient: false
};

}

 // NU UITATI ca metodele apelate la declansarea unui event primesc automat ca parametru event-ul respectiv.
updateName(event){
    //in campul din state corespunzator se stocheaza valoarea introdusa de utilizator.
this.setState({name:event.target.value});
}

updateEmail(event){
    this.setState({email:event.target.value});
}

updateSalary(event){
    this.setState({salary:event.target.value});
}

updateImg(event){
    this.setState({img:event.target.value});
}


updateIsGoldClient(event){
    console.log(event.target.checked);

 // ATENTIE! Niciodata nu includ this.state in interiorul lui this.setState()
        // this.setState({isGoldClient: !this.state.isGoldClient}) NU!
    this.setState({isGoldClient: event.target.checked});
}


render(){
 //Destructuring-ul se face inainte de return! Ne ajuta sa scriem mai putin cand apelam
// submitAddForm mai jos!
const {name, email,salary, img, isGoldClient} = this.state;
const {submitAddForm} = this.props;

return(

    <form
    className="user-add-form"
    // Ce se intampla la submiterea datelor din formular? Trebuie adaugat un nou user in lista
                // de useri afisata. Unde este instantiata componenta care afiseaza userii? In App.js!
                // Deci trebuie ca UserAddForm sa ii trimita datele lui App, pentru ca App sa isi actualizeze state-ul,
                // care este ulterior pasat catre componenta UserListItem.
                // Cum comunica componentele intre ele? De sus in jos. De la parinte la copil. Adica App.js
                // va trimite o functie catre UserAddForm, iar cand functia va fi executata din UserAddForm, va modifca
                // state-ul din App.js! Cum? this e cheia! (SFAT: consultati teoria la partea asta)
                // ALSO: functia submitAddForm va fi apelata doar la submit! (Din nou, teoria e importanta) Si
                // pentru a folosi evenimentul de submit, trebuie pasat ca parametru!

    onSubmit={(event) => submitAddForm(event, name, email, salary, img, isGoldClient) }
        >
    <h2>Adauga utilizatori</h2>
   <label htmlFor="name">Nume</label>
   <input type= "text" name="name"
    // Cand utilizatorul va tasta ceva nou, se va declansa eventul onChange.
   // La declansare, se va executa metoda updateName.
   onChange={(event) => this.updateName(event)}/>

<label htmlFor="email">Email</label>
   <input type= "text" name="email"
  onChange={(event) => this.updateEmail(event)}/>

<label htmlFor="name">Salariu</label>
   <input type= "text" name="salary"
    onChange={(event) => this.updateSalary(event)}/>

<label htmlFor="name">Imagine</label>
   <input type= "text" name="img"
    onChange={(event) => this.updateImg(event)}/>

<label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

<input type ="submit" value= " Introdu utilizatorul"/>
   
    </form>
)

}
}
export default UserAddForm;
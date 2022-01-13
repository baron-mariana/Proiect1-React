
//import './App.css';
import React from 'react';
//mport UserItem from './components/UserItem';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';



//Initial aplicatia este o functie pt Hooks
//App este o componenta complexa, al carei componente se vor modifica pe parcurs=>trebuei sa fie clasa

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }


class App extends React.Component{
//In constructor este apelat super, iar apoi este initializat state-ul
  constructor(){
    // MOUNTING: cand componenta este montata(incarcata), prima metoda apelata este constructor
    console.log('Constructor called!');
    super();//adu ce am in component

    this.state =
  {
      backgroundColor:'white',
      textColor:'black',
      checked: false,
     
      users:[
//   {
//   name :'Mohamed Salah',
//   email :'mohamed.salah@gmail.com',
//   salary : '3000',
//   isGoldClient: false,
//   img :Img1
//   },
    
  ],

    posts: [],
   
   };//va reprezenta starea initiala
}

//Ciclu de viata
// MOUNTING: Cand componenta se termina de montat(a rulat render() pentru prima oara) este apelata
  // metoda componentDidMount.

  componentDidMount(){
    console.log('App component finished mounting');
    // ATENTIE! De cele mai multe ori, vom primi datele despre userii nostri de la un API. Daca vrem doar
    // sa afisam niste date primite in pagina, am vrea sa le cerem o singura data: cand montam pagina. Mai
    // precis, cand terminam de montat pagina, vrem sa si aducem datele de la API(backend).


  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    const filteredJson = data.filter(user =>user.id <4);//pt filtrare Json
     // Dupa ce transformam rezultatul request-ului in JSON, putem sa actualizam state-ul cu datele primite.
     filteredJson.forEach(user => {
      //modifica array initial
      user.salary = 300;
      user.img = Img1;
      user.isGoldClient = true;
     })
     this.setState({users: filteredJson});
  })


  //preluare json pt posts
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
   .then(data => {
    this.setState({posts:data });
    })
  
}
   
  
  

// UPDATING: de fiecare data cand o componenta este actualizata (i se schimba state-ul cu un apel de
  // setState() sau primeste din exterior props-uri diferite), pe langa reapelarea metodei render(),
  // la finalul actualizarii este apelata metoda componentDidUpdate.
  componentDidUpdate(){
    console.log('App component was updated')
  }



 // changeColor e o metoda a clasei, care primeste ca parametru un event.
  handleBackgroundChange(event){
    // o eroare sau o nelamurire in legatura cu datele prelucrate. În cazul.valoare.țintă
    // vedem ca avem culoarea selectata de utilizator, in format hexazecimal. Vom atribui
    // aceasta culoare background-ului aplicatiei.
    console.log(event.target.value);
    // ATENTIE! niciodata nu schimbam state-ul direct! (this.state = ...)
    // Pentru a schimba state-ul, folosim metoda setState, care primeste ca parametru un obiect/functie.
    // In cazul in care a primit un obiect, cheile obiectului sunt cheile state-ului ale
    // caror valori se doresc a fi actualizate.
    const userBackground = event.target.value;
   // event.target.value;
   // background : userBackground
    this.setState({backgroundColor: userBackground});

  }

  changeText(event){
    console.log(event.target.value);
    const userText = event.target.value;
    this.setState({textColor:userText});

  }
  changeUsers(event){
    console.log(event.target.value);
    const postUsers = event.target.value;
    this.setState({users:[postUsers]});
  }

 changePosts = (event) => {
    // console.log(event.target.value);
    // this.setState({checked: event.target.value});
    // this.state.checked = !this.state.checked
    this.setState({checked: !this.state.checked})
    console.log("AICI")
    console.log(this.state.checked);
    // return div(this.state.checked ? <PostList posts={this.state.posts}/> : null)
    return (<div>SALUT</div>)
    // this.setState({});
    
  }


  //apelata de react cand creem un nou obiect..decide ce se afiseaza pe ecran
 render(){
   console.log(this.state.users);
  //  console.log(this.state.posts);
   console.log("AICI");
    // MOUNTNG: Cand componenta este montata, dupa constructor() este apelata metoda render
    // UPDATING: Cand componenta este actualizata, este apelata metoda render
    // Asadar, tineti minte: render este o metoda care face parte atat din ciclul de montare,
    // cat si din cel de actualizare.
    console.log('App component rendered');


  return (
    // Prin style putem trimite CSS catre componenta.
      // ATENTIE! style este un obiect JS (primele acolade sunt de la sintaxa JSX).
      // Tot din cauza JSX, nu putem avea atributul de HTML 'class'. In React e className.
        <div className="App" style={{background: this.state.backgroundColor}}>
        <div className="App" style={{color: this.state.textColor}}>
        
       
          

      
          {/* Componenta UserItem este "instantiata"(creata).
        In fisierul UserItem.jsx ea este doar declarata!! */}
        {/* Atributele name si email sunt puse intr-un obiect (DE CATRE REACT!!)
        si trimise catre componenta UserItem.jsx */}
{/*         
         < UserItem 
         name = {this.state.users[0].name} 
         email = {this.state.users[0].email} 
         salary = {this.state.users[0].salary} 
         isGoldClient= {this.state.users[0].isGoldClient} 
         img = {this.state.users[0].img} 
         
         
         />

         < UserItem 
         
         name = {this.state.users[1].name} 
         email = {this.state.users[1].email} 
         salary = {this.state.users[1].salary} 
         isGoldClient= {this.state.users[1].isGoldClient} 
         img = {this.state.users[1].img} 
         />

        < UserItem 
          name = {this.state.users[2].name} 
          email = {this.state.users[2].email} 
          salary = {this.state.users[2].salary} 
          isGoldClient= {this.state.users[2].isGoldClient} 
          img = {this.state.users[2].img} 
         />
 */}
          
         {/* De data asta, avand o lista de useri, ne vom crea comonenta UserList,
        careia ii vom pasa ca props informatiile din state-ul curent. */}
        {/* Am adaugat si o conditie suplimentara: lista de useri va fi afisata
        doar daca utilizatorul nu selecteaza culoarea de fundal negru. Conditia e adaugata
        pentru a intelege componentWillUnmount. Detalii in componenta UserList. */}
         {this.state.background !== '#000000'
         ?<UserList users={this.state.users}/>
        :null}
        <PostList posts = {this.state.posts}/>
        

        

        {/* input type color ne permite sa selectam o culoare. Cand selectam noua culoare
        se declanseaza evenimentul onChange, echivalent evenimentului onchange din HTML, sau
        a lui change, folosit de addEventListener. Functia executata atunci este changeColor,
        din clasa in care ne aflam. */}
        {/* AVEM NEVOIE DE ARROW FUNCTION! De ce? Altfel cand se apeleaza changeColor,
        this-ul nu mai este intreaga clasa! Vom discuta la cursul 4 mai multe despre this
        in React.
        De asemenea, trebuie sa pasam EVENTUL functiei changeColor, pentru a putea
        ulterior sa prelucram valoarea selectata de utilizator.
        Foarte important este sa realizam ca lui onChange ii trimitem o functie(metoda),
        nu un apel de functie! onChange va apela el respectiva functie cand se va schimba 
        ceva! */}
         <input type= "color" onChange={(event)=>this.handleBackgroundChange(event)}/>

         <input type= "color" onChange={(event)=>this.changeText(event)}/>
         
         <input type= "button" value = "Afiseaza useri " onClick={(event)=>this.changeUsers(event)}/>

         <input type= "button" value = " Afiseaza postari" onClick={(event)=>this.changePosts(event)}/>

        </div>
        </div>
        
        
      );
 }
}

export default App;

import react from "react";

const Home = () =>{
    return(
<div className="container">
    <h1>Ajouter vos Idees</h1>
    <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" aria-label="Prenom" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" aria-label="Nom" />
        </div>
      </div>
      <div>

        <div classname="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Veuillez saisir votre Email, SVP" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Votre Idee</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <div className="col-auto">
          <button classname="ui button blue">Ajouter votre idee</button>
        </div>
      </div>
</div>
    );
}

export default Home;
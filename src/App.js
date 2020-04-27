import React,{Fragment, useState, useEffect} from "react";
import firebase from 'firebase';
import FileUpload from './components/FileUpload'

export default function App() {

const [user, setUser] = useState([])

const handlerAuth = ()=>{
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    setUser(result.user)
     console.log(' ha iniciado session');
  })
  .catch(function(error){
       console.log(error.code , error.message)
  })
  
}



useEffect(()=>{
  firebase.auth().onAuthStateChanged(user=>{
    setUser(user)
  })
 
},[])

const renderLoginButton = ()=>{
    if(user){
        return (
          <div>
            <img src={user.photoURL} className="img-fluid" width="100" alt=""/>
            <p>welcome {user.displayName}</p>
            <button className="btn btn-success" onClick={handlerlogout}>salir</button>
            <FileUpload />
          </div>
        )
    }else {
     return  <button onClick={handlerAuth} className="btn btn-primary">Login with google</button>
    }
}

const handlerlogout = ()=>{
   firebase.auth().signOut()
   .then(function(result) {
    console.log(' ha salido session');
 })
 .catch(function(error){
      console.log(error)
 })
} 

return (
    <Fragment>
       <div className="container">
         <div className="row mt-3">
           <div className="col-md-6 mx-auto">
               <h3>Pseudogram</h3>
             <div className="card card-body text-center">
                
                 {renderLoginButton()}
             </div>
           </div>
         </div>
       </div>
    </Fragment>
  );
}

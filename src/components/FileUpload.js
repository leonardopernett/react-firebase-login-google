import React,{Fragment , useState} from 'react'
import firebase  from 'firebase';

export default function FileUpload(props) {

const [uploadValue, setuploadValue] = useState(0)
const [picture, setPicture] = useState(null);

const handlerUpload = (e)=>{
    //cargar la imagen 
  const file = e.target.files[0];
  const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
  const task  = storageRef.put(file)

  //progreso de la subida
   task.on('state_changed', snapshot =>{
       let porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes)*100
       setuploadValue(porcentaje)
   }, error => {
       console.log(error.message)

  },()=>{
      setuploadValue(100)
      setPicture(task.snapshot.downloadURL)
  });
}

return (
    <Fragment>
    
        <div className="form-group mt-2">
            <progress  value={uploadValue} max="100"></progress>
            <input type="file" onChange={handlerUpload}  className="form-control" />
            <img src={picture} width="300" alt=""/>
        </div>
    
    </Fragment>
    )
}

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  
   //const [name, setName] = useState('');
   //const [pwd, setPwd] = useState('');
   const [user, setUser] = useState({
      name: '',
      pwd: ''
   });

   const changeHandler = e => {
      setUser({...user, [e.target.name]: e.target.value})
   }

   const handle = () => {
    //TODO 1: Tulis kode untuk menyimpan nama dan password dalam local storage.
    localStorage.setItem('name',user.name)
    localStorage.setItem('pwd',user.pwd)
   };
   const remove = () => {
    //TODO 2: Tulis kode untuk menghapus nama dan password dalam local storage.
    localStorage.removeItem('name')
    localStorage.removeItem('pwd')
   };
   const show = () => {
      var temp = "<table><tr><th><h5>Key</h5></th><th><h5>Value</h5></th></tr>";
      for (let i = 0; i < 2; i++) {
         console.log(localStorage.key(i));
         temp += "<tr><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "</td></tr>";
      }
      temp += "</table>";
      document.getElementById('table').innerHTML = temp;
   }
   
   return (
      <div className="container-md m-5 d-flex flex-column justify-content-around" style={{ width: '40rem'}}>
        <div className='mb-5'>
         <h3>Input Nama:</h3>
         <input
            placeholder="Name"
            value={user.name}
            name='name'
            onChange={changeHandler}
         />
         <h3>Input Password:</h3>
         <input
            type="password"
            placeholder="Password"
            value={user.pwd}
            name='pwd'
            onChange={changeHandler}
         />
         <div className='mt-3'>
            <button onClick={handle}>Selesai</button>
         </div>

        </div>

        <h4>Isi dari Local Storage</h4>
        <div className='mt-3'>
            <button onClick={show}>Show</button>
         </div>
        {/* TODO 3: Tambahkan kode untuk menampilkan nama dan password yang tersimpan dalam local storage. */}
        <div id='table'>
        </div>
         <br/>
         <div>
            <button onClick={remove}>Hapus</button>
         </div>
      </div>


   );
};
export default App;

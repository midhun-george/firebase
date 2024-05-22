        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
        import { getFirestore, setDoc, doc, addDoc, collection, getDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
        const firebaseConfig = {
            apiKey: "AIzaSyBHAonDkMlYKot0oXLjwJbE5ap9oi4n2Lc",
            authDomain: "portfolioapp-e26c6.firebaseapp.com",
            projectId: "portfolioapp-e26c6",
            storageBucket: "portfolioapp-e26c6.appspot.com",
            messagingSenderId: "968203103517",
            appId: "1:968203103517:web:7f8ddf8c4f249b4d9845f4"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app)
        console.log(db)
        let add = document.getElementById("Add");
        let get = document.getElementById("Get");
        add.addEventListener('click', function(e){
            e.preventDefault();
            addDoc(collection(db, "contact"),{
                "name":"Divya",
                "email":"divya@stepingstones.com"
            })
        })  
        
        get.addEventListener('click', function(e){
            e.preventDefault();
            getDoc(doc(db, "contact", "yGJzsl34pMote3N1wgQs")).then(function(resp){
                console.log(resp.data());
            })
        })  

    const q = query(collection(db, 'contact'));
    getDocs(q).then(function(resp){
        let contacts = [];
        resp.forEach((item)=>{
            contacts.push({...item.data(), id:item.id})
        })
        console.log(contacts);
    })
// The core Firebase JS SDK is always required and must be listed first-- >
// <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-firestore.js"></script>

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfqdOA71uspm8JxIjCy2EZeoqpUV8oM-k",
    authDomain: "portfolio-website-94b6e.firebaseapp.com",
    databaseURL: "https://portfolio-website-94b6e.firebaseio.com",
    projectId: "portfolio-website-94b6e",
    storageBucket: "portfolio-website-94b6e.appspot.com",
    messagingSenderId: "57652820739",
    appId: "1:57652820739:web:08fd698af1a08cb55c8736",
    measurementId: "G-QG4JRP788H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

const afterMessageSent = () => {
    const form = document.querySelector(".sendEmail");
    form.innerHTML = "";
    const sent = document.createElement('h2');
    sent.innerText = "Message Sent";
    form.appendChild(sent);
}

const contactMessage = (e) => {
    e.preventDefault();
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;

    const currentDate = new Date();
    const formatDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const formatTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    db.collection("contactMessages").add({
        name: name,
        email: email,
        message: message,
        date: formatDate,
        time: formatTime
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        afterMessageSent();
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });
}
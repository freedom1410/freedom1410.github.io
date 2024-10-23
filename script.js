const students = [
    { name: "Hina", info: "", image: "hina.jpg", video: "video1.mp4", link: "https://drive.google.com/file/d/1kE3gAx6Pvc3iYSO4xIq9xsuZjq4WpWW4/view?usp=drive_link" },
    { name: "Hoshino", info: "", image: "hoshino.jpg", video: "video2.mp4", link: "https://example.com/student2" },
    { name: "Nonomi", info: "", image: "nonomi.jpg", video: "video3.mp4", link: "https://example.com/student3" },
    { name: "Student 4", info: "", image: "image4.jpg", video: "video4.mp4", link: "https://example.com/student4" },
    { name: "Student 5", info: "", image: "image5.jpg", video: "video5.mp4", link: "https://example.com/student5" },
    { name: "Student 6", info: "", image: "image6.jpg", video: "video6.mp4", link: "https://example.com/student6" },
    { name: "Student 7", info: "", image: "image7.jpg", video: "video7.mp4", link: "https://example.com/student7" },
    { name: "Student 8", info: "", image: "image8.jpg", video: "video8.mp4", link: "https://example.com/student8" },
    { name: "Student 9", info: "", image: "image9.jpg", video: "video9.mp4", link: "https://example.com/student9" },
    { name: "Student 10", info: "", image: "image10.jpg", video: "video10.mp4", link: "https://example.com/student10" },
];



const cardContainer = document.querySelector('.card-container');

students.forEach(student => {
    const card = document.createElement('a'); // Create an anchor element
    card.className = 'card';
    card.href = student.link; // Set the link for the card
    card.target = "_blank"; // Open link in a new tab
    card.innerHTML = `
        <img src="${student.image}" alt="${student.name}" class="student-image">
        <h3>${student.name}</h3>
        <p>${student.info}</p>
        <video autoplay muted loop class="student-video">
            <source src="${student.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    cardContainer.appendChild(card);
});
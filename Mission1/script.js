document.getElementById('qcmForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Parcourez toutes les questions du QCM
    const questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        const correctAnswer = question.querySelector('.correct input');
        const userAnswer = question.querySelector('input:checked');

        if (correctAnswer === userAnswer) {
            // Réponse correcte, vous pouvez appliquer un style ou une classe CSS
            question.style.color = 'green'; // Par exemple, mettez le texte en vert
        } else {
            // Réponse incorrecte, appliquez un style différent ou une classe CSS
            question.style.color = 'red'; // Par exemple, mettez le texte en rouge
        }
    });
});
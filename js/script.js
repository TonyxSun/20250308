document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-button');
    const downloadButton = document.getElementById('download-button');
    const landingPage = document.querySelector('.landing-page');
    const imagePage = document.querySelector('.image-page');
    
    // Show image page when next button is clicked
    nextButton.addEventListener('click', function() {
        landingPage.style.display = 'none';
        imagePage.style.display = 'flex';
    });
    
    // Download image when download button is clicked
    downloadButton.addEventListener('click', function() {
        const imageUrl = document.getElementById('display-image').src;
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = '0308_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
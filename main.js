const logo = document.querySelector('.logo');
        logo.addEventListener('mouseover', () => {
            logo.style.animation = 'bounce 0.5s';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.animation = 'spin 2s linear infinite';
        });
        const texts = ["Welcome To Malowa Beauty Collections!",  "Join Us Today"];
        let index = 0;
        const typingText = document.getElementById('typing-text');
    
        function typeText() {
            typingText.textContent = '';
            let text = texts[index];
            let i = 0;
    
            function type() {
                if (i < text.length) {
                    typingText.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(() => {
                        index = (index + 1) % texts.length;
                        typeText();
                    }, 2000);
                }
            }
            type();
        }
    
        function slideShow() {
            const slides = document.querySelector('.slides');
            let currentIndex = 0;
    
            setInterval(() => {
                currentIndex = (currentIndex + 1) % 3;
                slides.style.transform = `translateX(-${currentIndex * 100}vw)`;

            }, 5000);
        }
    
        typeText();
        slideShow();
        function zoomImage(img) {
            const zoomedImg = document.createElement('img');
            zoomedImg.src = img.src;
            zoomedImg.style.position = 'fixed';
            zoomedImg.style.top = '50%';
            zoomedImg.style.left = '50%';
            zoomedImg.style.transform = 'translate(-50%, -50%)';
            zoomedImg.style.width = '80%';
            zoomedImg.style.height = 'auto';
            zoomedImg.style.zIndex = '1000';
            zoomedImg.onclick = function() {
                document.body.removeChild(zoomedImg);
            };
            document.body.appendChild(zoomedImg);
        }
        document.querySelectorAll('#cart-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                alert('Product added to cart!');
            });
        });
    
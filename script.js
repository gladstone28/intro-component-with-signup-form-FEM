function validateForm(event) {
    event.preventDefault(); 
    
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((errorMessage) => {
      errorMessage.classList.remove('active');
    });
    
    const firstName = document.getElementById('f-name').value.trim();
    const lastName = document.getElementById('l-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    let isValid = true;
    
    if (firstName === '') {
      document.querySelector('.f-name__error').classList.add('active');
      isValid = false;
    }
    
    if (lastName === '') {
      document.querySelector('.l-name__error').classList.add('active');
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.querySelector('.email__error').classList.add('active');
      isValid = false;
    }
    
    if (password === '') {
      document.querySelector('.password__error').classList.add('active');
      isValid = false;
    }

    if (isValid) {
      document.querySelector('.My-Form').submit();
      alert("Done");
    }
  }

  /* Animations */
  gsap.from('.form', {duration: 1, delay: 2, ease:'bounce', x: '-100vw'});
  gsap.from('.text', {duration: 1, delay:1, ease: 'bounce', y : '-100vh'});

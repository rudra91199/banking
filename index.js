document.getElementById('login').addEventListener('click', function ()
{
    const emailValue = document.getElementById('email').value;
    const passValue = document.getElementById('password').value;
    if (emailValue == 'rskrrudra9111999@gmail.com' && passValue == 'Rudra123' || emailValue== 'aarpon207@gmail.com' && passValue == 'Arpon123') {   
        window.location.href = 'banking.html';
    }
    else {
        const p = document.createElement('p');
        p.innerText = 'Invalid credentials';
        document.getElementById('btn-container').appendChild(p);
        
    }

})


document.addEventListener('DOMContentLoaded', () => {

  
    // Signup Functionality
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        if (name && email && password) {
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const userExists = users.some((user) => user.email === email);
  
          if (userExists) {
            alert('User already exists!');
          } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully!');
            window.location.href = 'login.html';
          }
        }
      });
    }
  
    // Login Functionality
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);
  
        if (user) {
          alert(`Welcome, ${user.name}!`);
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          window.location.href = 'index.html';
        } else {
          alert('Invalid credentials!');
        }
      });
    }
  });
  const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


  // Store car details
const cars = {
  sedan: {
      name: 'Sedan',
      price: 50,
      description: 'A comfortable sedan for your daily needs.',
      image: 'https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=60',
  },
  suv: {
      name: 'SUV',
      price: 80,
      description: 'A spacious SUV for family trips.',
      image: 'https://via.placeholder.com/150',
  },
  convertible: {
      name: 'Convertible',
      price: 120,
      description: 'A stylish convertible for a fun ride.',
      image: 'https://via.placeholder.com/150',
  },
};

let selectedCar = null;

// Show car details
function showCarDetails(carType) {
  selectedCar = cars[carType];
  document.getElementById('car-list').classList.add('hidden');
  document.getElementById('car-details').classList.remove('hidden');

  const carInfo = `
      <img src="${selectedCar.image}" alt="${selectedCar.name}">
      <h3>${selectedCar.name}</h3>
      <p>${selectedCar.description}</p>
      <p>Price: $${selectedCar.price}/day</p>
  `;
  document.getElementById('car-info').innerHTML = carInfo;
}

// Handle rental form submission
document.getElementById('rental-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const rentalPeriod = document.getElementById('rental-period').value;
  const pickupDate = document.getElementById('pickup-date').value;
  const returnDate = document.getElementById('return-date').value;

  const totalCost = selectedCar.price * rentalPeriod;
  const cartSummary = `
      <h3>${selectedCar.name}</h3>
      <p>Rental Period: ${rentalPeriod} day(s)</p>
      <p>Total Cost: $${totalCost}</p>
      <p>Pickup Date: ${pickupDate}</p>
      <p>Return Date: ${returnDate}</p>
  `;
  
  document.getElementById('cart-summary').innerHTML = cartSummary;
  document.getElementById('checkout-btn').classList.remove('hidden');
  document.getElementById('cart').classList.remove('hidden');
  document.getElementById('car-details').classList.add('hidden');
});
  
// api 
var model = 'camry' 
async function fetchdata(){
  try {
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model
    const response = await fetch(url)
    console.log(response)
    
  } catch (error) {
    console.error("failed" , error)
    
  }
}




document.querySelector("#search-form").addEventListener("submit", function(event){
  event.preventDefault()
});

const query = document.querySelector("#search-input").value

// var model = 'camry'                                          
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    
//     headers: { 'X-Api-Key': 'C3bVOkN3Z4avRjl0XI3vPA==x13xxM3KXNJovKn4'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });



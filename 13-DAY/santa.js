let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(name) {

  const customer = customerData[name];

  if (!customer) {
    return 'Welcome to the North Pole Café! Is this your first time? ❄️';
  }
  if (customer.visits === 1) {
    return `Ho ho ho! Welcome back, ${name}! We’re glad you enjoyed your first visit! 🎅`;
  }
  return `Merry greetings, ${name}! So wonderful to see you again! 🎄`;
}


console.log(greetCustomer('Joe'));     
console.log(greetCustomer('Carol'));    
console.log(greetCustomer('Sam'));    
console.log(greetCustomer('Carrie'));   
console.log(greetCustomer('Howard')); 

var request = require('request');

request.post('https://textbelt.com/text', {
  form: {
    phone: '5555555555',
    message: 'Hello world',
    key: 'textbelt',
  },
}, function(err, httpResponse, body) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(JSON.parse(body));
})

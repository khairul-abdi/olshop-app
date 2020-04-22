const functions = require('firebase-functions')
// var stripe = require('stripe')('sk_test_nXrKRC2gR0XKfWcUg6OWitrs00OlKtKikP')
// const cors = require('cors')({origin: true})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// exports.CheckoutSession = functions.https.onRequest((req, res) => {

//   return cors(req, res, () => {

//     stripe.checkout.sessions.create(
//       {
//         success_url: 'https://example.com/success',
//         cancel_url: 'https://example.com/cancel',
//         payment_method_types: ['card'],
//         line_items: [
//           {
//             name: 'T-shirt',
//             description: 'Comfortable cotton t-shirt',
//             amount: 1500,
//             currency: 'usd',
//             quantity: 2,
//           },
//         ],
//       },
//       function(err, session) {
//         res.send(session)
//       }
//     );
//   });

// })
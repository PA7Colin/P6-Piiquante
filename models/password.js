const passwordValidator = require('password-validator');

// Create a schema
const pwdSchema = new passwordValidator();

// Add properties to it
pwdSchema
  .is()
  .min(8) // Minimum  8
  .is()
  .max(26) // Maximum  26
  .has()
  .uppercase() 
  .has()
  .lowercase() 
  .has()
  .digits(2) 
  .has()
  .not()
  .spaces() // Pas d'espace
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']);

module.exports = pwdSchema;
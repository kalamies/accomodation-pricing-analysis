/*
 * Helpers
*/

// Firebase case sensitive, query with Capitalized format
module.exports = {
  capitalizeString: (string) => {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
  }
}

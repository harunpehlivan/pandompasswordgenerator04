(function() {
  // PW Types
  /*
   * Copies the password to an alert so that
   * the user can copy it. This is the most
   * secure way I can think to do it. 
   */
  /*
   * Generate an ascii pw
   */
  /*
   * Generate an alpha numeric or hex pw
   */
  var charset, charset_alpha, charset_hex, copy, generateAsciiPwd, generatePwd, len, pwType;

  pwType = null;

  len = null;

  charset = null;

  // Charsets except ascii
  charset_alpha = 'abcdefghijklnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';

  charset_hex = '0123456789ABCDEF';

  // Select a password type
  $('.pw-select').on('click', function() {
    pwType = $(".pw-select option:selected").attr('val');
  });

  // Select length
  $('.pw-len').on('click', function() {
    len = $(".pw-len option:selected").attr('val');
  });

  // Submit request for password
  $('.submit').click(function() {
    if (pwType === 'alpha') {
      charset = charset_alpha;
      generatePwd(len);
    }
    if (pwType === 'hex') {
      charset = charset_hex;
      generatePwd(len);
    }
    if (pwType === 'ascii') {
      generateAsciiPwd(len);
    }
  });

  // Copy to clipboard 
  $('.clip').on('click', function() {
    copy($('.password').text());
  });

  generatePwd = function(length) {
    var i, n, retVal;
    retVal = '';
    i = 0;
    n = charset.length;
    while (i < length) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
      ++i;
    }
    if (retVal !== '') {
      return $('.password').text(retVal);
    }
  };

  generateAsciiPwd = function(length) {
    var i, n, offset, random, retVal;
    retVal = '';
    i = 0;
    offset = 33;
    n = 92;
    while (i < length) {
      random = Math.floor(Math.random() * n);
      retVal += String.fromCharCode(random + offset);
      ++i;
    }
    if (retVal !== '') {
      return $('.password').text(retVal);
    }
  };

  copy = function(text) {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
  };

  
  // Prompt blinking cursor animation
  $('.prompt').css('animation', 'blinker 1.5s ease-in-out infinite');

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVU7RUFBQTs7Ozs7Ozs7Ozs7O0FBQUEsTUFBQSxPQUFBLEVBQUEsYUFBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsZ0JBQUEsRUFBQSxXQUFBLEVBQUEsR0FBQSxFQUFBOztFQUNWLE1BQUEsR0FBUzs7RUFDVCxHQUFBLEdBQU07O0VBQ04sT0FBQSxHQUFVLEtBSEE7OztFQU1WLGFBQUEsR0FDRSwyQkFBQSxHQUNBLDRCQURBLEdBRUE7O0VBQ0YsV0FBQSxHQUFjLG1CQVZKOzs7RUFhVixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsUUFBQSxDQUFBLENBQUE7SUFDMUIsTUFBQSxHQUFTLENBQUEsQ0FBRSw0QkFBRixDQUFnQyxDQUFDLElBQWpDLENBQXNDLEtBQXRDO0VBRGlCLENBQTVCLEVBYlU7OztFQWtCVixDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixRQUFBLENBQUEsQ0FBQTtJQUN2QixHQUFBLEdBQU0sQ0FBQSxDQUFFLHlCQUFGLENBQTZCLENBQUMsSUFBOUIsQ0FBbUMsS0FBbkM7RUFEaUIsQ0FBekIsRUFsQlU7OztFQXVCVixDQUFBLENBQUUsU0FBRixDQUFZLENBQUMsS0FBYixDQUFtQixRQUFBLENBQUEsQ0FBQTtJQUNqQixJQUFJLE1BQUEsS0FBVSxPQUFkO01BQ0UsT0FBQSxHQUFVO01BQ1YsV0FBQSxDQUFZLEdBQVosRUFGRjs7SUFHQSxJQUFJLE1BQUEsS0FBVSxLQUFkO01BQ0UsT0FBQSxHQUFVO01BQ1YsV0FBQSxDQUFZLEdBQVosRUFGRjs7SUFHQSxJQUFJLE1BQUEsS0FBVSxPQUFkO01BQ0UsZ0JBQUEsQ0FBaUIsR0FBakIsRUFERjs7RUFQaUIsQ0FBbkIsRUF2QlU7OztFQW1DVixDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsRUFBWCxDQUFjLE9BQWQsRUFBdUIsUUFBQSxDQUFBLENBQUE7SUFDckIsSUFBQSxDQUFLLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxJQUFmLENBQUEsQ0FBTDtFQURxQixDQUF2Qjs7RUFPQSxXQUFBLEdBQWMsUUFBQSxDQUFDLE1BQUQsQ0FBQTtBQUNkLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQTtJQUFFLE1BQUEsR0FBUztJQUNULENBQUEsR0FBSTtJQUNKLENBQUEsR0FBSSxPQUFPLENBQUM7QUFDWixXQUFNLENBQUEsR0FBSSxNQUFWO01BQ0UsTUFBQSxJQUFVLE9BQU8sQ0FBQyxNQUFSLENBQWUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsQ0FBM0IsQ0FBZjtNQUNWLEVBQUU7SUFGSjtJQUdBLElBQUksTUFBQSxLQUFVLEVBQWQ7YUFDRSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsSUFBZixDQUFvQixNQUFwQixFQURGOztFQVBZOztFQWFkLGdCQUFBLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDbkIsUUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUE7SUFBRSxNQUFBLEdBQVM7SUFDVCxDQUFBLEdBQUk7SUFDSixNQUFBLEdBQVM7SUFDVCxDQUFBLEdBQUk7QUFDSixXQUFNLENBQUEsR0FBSSxNQUFWO01BQ0UsTUFBQSxHQUFVLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWUsQ0FBMUI7TUFDVixNQUFBLElBQVUsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsTUFBQSxHQUFPLE1BQTNCO01BQ1YsRUFBRTtJQUhKO0lBSUEsSUFBSSxNQUFBLEtBQVUsRUFBZDthQUNFLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLE1BQXBCLEVBREY7O0VBVGlCOztFQWlCbkIsSUFBQSxHQUFPLFFBQUEsQ0FBQyxJQUFELENBQUE7SUFDTCxNQUFNLENBQUMsTUFBUCxDQUFjLGtDQUFkLEVBQWtELElBQWxEO0VBREssRUF4RUc7Ozs7RUE2RVYsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLEdBQWIsQ0FBaUIsV0FBakIsRUFDQSxtQ0FEQTtBQTdFVSIsInNvdXJjZXNDb250ZW50IjpbIiMgUFcgVHlwZXNcbnB3VHlwZSA9IG51bGxcbmxlbiA9IG51bGxcbmNoYXJzZXQgPSBudWxsXG5cbiMgQ2hhcnNldHMgZXhjZXB0IGFzY2lpXG5jaGFyc2V0X2FscGhhID0gXG4gICdhYmNkZWZnaGlqa2xub3BxcnN0dXZ3eHl6JyArIFxuICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgXG4gICcwMTIzNDU2Nzg5J1xuY2hhcnNldF9oZXggPSAnMDEyMzQ1Njc4OUFCQ0RFRidcblxuIyBTZWxlY3QgYSBwYXNzd29yZCB0eXBlXG4kKCcucHctc2VsZWN0Jykub24gJ2NsaWNrJywgLT5cbiAgcHdUeXBlID0gJChcIi5wdy1zZWxlY3Qgb3B0aW9uOnNlbGVjdGVkXCIgKS5hdHRyKCd2YWwnKVxuICByZXR1cm5cblxuIyBTZWxlY3QgbGVuZ3RoXG4kKCcucHctbGVuJykub24gJ2NsaWNrJywgLT5cbiAgbGVuID0gJChcIi5wdy1sZW4gb3B0aW9uOnNlbGVjdGVkXCIgKS5hdHRyKCd2YWwnKVxuICByZXR1cm5cblxuIyBTdWJtaXQgcmVxdWVzdCBmb3IgcGFzc3dvcmRcbiQoJy5zdWJtaXQnKS5jbGljayAtPlxuICBpZiAocHdUeXBlID09ICdhbHBoYScpXG4gICAgY2hhcnNldCA9IGNoYXJzZXRfYWxwaGFcbiAgICBnZW5lcmF0ZVB3ZChsZW4pXG4gIGlmIChwd1R5cGUgPT0gJ2hleCcpXG4gICAgY2hhcnNldCA9IGNoYXJzZXRfaGV4XG4gICAgZ2VuZXJhdGVQd2QobGVuKVxuICBpZiAocHdUeXBlID09ICdhc2NpaScpXG4gICAgZ2VuZXJhdGVBc2NpaVB3ZChsZW4pXG4gIHJldHVyblxuXG4jIENvcHkgdG8gY2xpcGJvYXJkIFxuJCgnLmNsaXAnKS5vbiAnY2xpY2snLCAtPlxuICBjb3B5KCQoJy5wYXNzd29yZCcpLnRleHQoKSlcbiAgcmV0dXJuXG5cbiMjI1xuIyBHZW5lcmF0ZSBhbiBhbHBoYSBudW1lcmljIG9yIGhleCBwd1xuIyMjXG5nZW5lcmF0ZVB3ZCA9IChsZW5ndGgpIC0+XG4gIHJldFZhbCA9ICcnXG4gIGkgPSAwXG4gIG4gPSBjaGFyc2V0Lmxlbmd0aFxuICB3aGlsZSBpIDwgbGVuZ3RoXG4gICAgcmV0VmFsICs9IGNoYXJzZXQuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pKVxuICAgICsraVxuICBpZiAocmV0VmFsICE9ICcnKVxuICAgICQoJy5wYXNzd29yZCcpLnRleHQocmV0VmFsKVxuXG4jIyNcbiMgR2VuZXJhdGUgYW4gYXNjaWkgcHdcbiMjI1xuZ2VuZXJhdGVBc2NpaVB3ZCA9IChsZW5ndGgpIC0+XG4gIHJldFZhbCA9ICcnXG4gIGkgPSAwXG4gIG9mZnNldCA9IDMzXG4gIG4gPSA5MiBcbiAgd2hpbGUgaSA8IGxlbmd0aFxuICAgIHJhbmRvbSA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKm4pXG4gICAgcmV0VmFsICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocmFuZG9tK29mZnNldClcbiAgICArK2lcbiAgaWYgKHJldFZhbCAhPSAnJylcbiAgICAkKCcucGFzc3dvcmQnKS50ZXh0KHJldFZhbClcblxuIyMjXG4jIENvcGllcyB0aGUgcGFzc3dvcmQgdG8gYW4gYWxlcnQgc28gdGhhdFxuIyB0aGUgdXNlciBjYW4gY29weSBpdC4gVGhpcyBpcyB0aGUgbW9zdFxuIyBzZWN1cmUgd2F5IEkgY2FuIHRoaW5rIHRvIGRvIGl0LiBcbiMjI1xuY29weSA9ICh0ZXh0KSAtPlxuICB3aW5kb3cucHJvbXB0ICdDb3B5IHRvIGNsaXBib2FyZDogQ3RybCtDLCBFbnRlcicsIHRleHRcbiAgcmV0dXJuXG4gIFxuIyBQcm9tcHQgYmxpbmtpbmcgY3Vyc29yIGFuaW1hdGlvblxuJCgnLnByb21wdCcpLmNzcyAnYW5pbWF0aW9uJywgXG4nYmxpbmtlciAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlJ1xuXG5cblxuIl19
//# sourceURL=coffeescript
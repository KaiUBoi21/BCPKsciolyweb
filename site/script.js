// Replace the static date in the folio with a day count until the invitational.
(function () {
  var el = document.getElementById('countdown');
  if (!el) return;
  var event = new Date(2027, 0, 9);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var days = Math.round((event - today) / 86400000);
  if (days > 1) el.textContent = days + ' days until the Invitational, Jan. 9';
  else if (days === 1) el.textContent = 'The Invitational is tomorrow, Jan. 9';
  else if (days === 0) el.textContent = 'The Invitational is today';
})();

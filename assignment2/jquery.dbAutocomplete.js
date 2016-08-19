(function($)
{
  var cache = {};

  $.widget('custom.dbAutocomplete', $.ui.autocomplete, {
    options: {
      minLength: 2,
      source: function (req, res) {
        var term = req.term;

        if (term in cache) {
          return res(cache[term]);
        }

        $.ajax({
          url: 'https://www.deskbookers.com/en-gb/sa2.json',
          data: {q: term},
          dataType: 'json',
          success: function (data) {
            res(cache[term] = data.map(function (item) {
              return {id: item.id, value: item.full};
            }));
          },
          error: function () {
            res([]);
          }
        });
      }
    }
  });
})(jQuery);

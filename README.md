# Deskbookers Front-end Developer Trial

Hi Front-ender!

Great that you're interested in this exercise! Thanks a lot for making it. The exercise exists of two parts. They are related to the Deskbookers way of working. Good luck and we are looking forward to hearing from you soon!

To complete these assignments you need to fork this repo. When you're done you can push your changes to your own repo (and let us know where to find it ofcourse).

It is possible that these assignments don't work directly from your local hard drive in some browsers. In that case you can use your own web server (if you have one) or use XAMP (https://www.apachefriends.org/index.html) to install your own.

## Assignment 1: Responsive Widget

For this assignment you need to implement a responsive mini widget. A design is already made using Adobe Fireworks: [mini-widget.png](assignment1/mini-widget.png).
The widget has to work in two modes: vertical and horizontal. See the design for two examples. The widget will be placed on websites of venues using an iframe.

The widget shows the review score in max 5 stars (rounded up). For the stars you use an image or a font, what ever you think is best.

In [index.php](assignment1/index.php) you find some test data. You can pretent this information was received using an API.

You can create extra files, change the [index.php](assignment1/index.php) file. Make sure the code you write is safe, efficient and try to reuse as much code/CSS as possible.

## Assignment 2: Text Field Autocompletion

Make a reusable jQuery plugin (jQuery.fn.dbAutocomplete) which adds auto completion functionality to an input field like on the home page of Airbnb (https://www.airbnb.com/).
The server side URL where you can retrieve the autocompletion is https://www.deskbookers.com/en-gb/sa2.json?q=X where X can be replaced with the value of the input field.

Write the plugin in the [jquery.dbAutocomplete.js](assignment2/jquery.dbAutocomplete.js) file. Additional CSS can be added to [dbAutocomplete.css](assignment2/dbAutocomplete.css).

Don't focus too much on how it looks but makes sure it looks a little bit professional. Make sure the plugin is efficient (speed, no unneeded AJAX calls, etc.).

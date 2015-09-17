# donaldtrunc
jQuery plugin that allow you to truncate a string in the browser.

## Getting Started
In order to use it, you just have to include the js file into your html page. Becareful to do it after your jquery instance :
	
	<script src="/path/to/jquery.js"></script>
    <script src="/path/to/donaldtrunc.js"></script>
    
### Bower
Install and manage donadtrunc using Bower.
	
	$ bower install donaldtrunc

	
## Usage
Using donaldtrunc is pretty simple. For that you just need to activate it on any jquery selector you want like this
 
	$('.selector').donaldtrunc();

This will simply truncate the content inside your `.selector` element and display only the 10 first caracters of your string.

Be careful and use `.donaldtrunc();` on DOM elements which contains no childrens, elements like `span` sounds perfect for this usage.

### Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-trunc`.

| Name           | Type    | Default         | Description|
| :------------- |:--------| :---------------| :----------|
| trunc          | int     | 10              | number of caracters displayed after the truncate|
| trunctoggle    | boolean | false           | make display or not a button that will allow the user to toggle the truncate|
| toggleLabelIn  | string  | '... Read more' | when trunctoggle is set to true, this set the button label when the truncate is effective|
| toggleLabelOut | string  | 'Show less' | when trunctoggle is set to true, this set the button label when the truncate is not effective|
| toggleClass | string  | 'trunc-toggle' | when trunctoggle is set to true, this set the class for the toggle button|

### Methods
####`.donaldtrunc('hide');`
	$('.selector').donaldtrunc('hide');
Activate the truncate on the element

####`.donaldtrunc('show');`
	$('.selector').donaldtrunc('show');
Disactivate the truncate on the element

####`.donaldtrunc('trunctoggle');`
	$('.selector').donaldtrunc('trunctoggle');
Activate or Disactivate the truncate depending of the element's state


## Notice
This repository do have nothing in common with Mr Donald John Trump and do not support him. Mr Donald John Trump do not recommand this github repository. The name of this repository was just choosen for the joke.

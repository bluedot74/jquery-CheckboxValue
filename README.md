# Checkbox Value

Checkbox value is a simple jquery plugin that adds value a value to an unchecked checkbox. By default an unchecked checkbox will be unset in the POST/GET array. This plugin adds the unchecked checkbox to the array and (by default) adds a "false" value.

To use the plugin include the file in your footer just above the </body> tag and call it on the form.

```html
<script type="text/javascript" src="js/jquery.checkboxvalue.min.js"></script>
<script type="text/javascript">
    // default
    $("#myForm").checkboxvalue();

    // with options
    $("#myForm").checkboxvalue({
        unchecked_vlaue: "unchecked"
    });
</script>
```

odoo.define('volunteer_skills.Many2many_tag',
 function (require) { 
    var PublicWidget = require('web.public.widget'); 
    var NewData = PublicWidget.Widget.extend({     
        selector: '.new-get_data',     
        start: function () 
        {            
             $('.js-example-basic-multiple').select2();    
             }, }); 
        PublicWidget.registry.Many2many_tag = NewData; 
        return NewData; });

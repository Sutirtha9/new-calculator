document.querySelectorAll('button').forEach(e =>
{
    e.addEventListener('click',()=>
    {
        var input=e.value;

        if(input.match('[/*+.-]'))
        {
            if(!document.querySelector('#inputbox').value[document.querySelector('#inputbox').value.length-1].match('[/*+.-]'))
            {
                document.querySelector('#inputbox').value+=input;
            }
        }
        else
        {
            document.querySelector('#inputbox').value+=input;
        }

        if(e.id == 'equals')
        {
            document.querySelector('#inputbox').value = eval(document.querySelector('#inputbox').value);
        }

        if(e.id == 'del')
        {
            document.querySelector('#inputbox').value = document.querySelector('#inputbox').value.substring(0,document.querySelector('#inputbox').value.length-1)
        }

        if(e.id == 'clear')
        {
            document.querySelector('#inputbox').value = '';
        }
    });
});
function changeMode(){   
    const body = document.getElementsByTagName('BODY')[0];    
    const hrs = document.querySelectorAll('hr');      
    const button = document.getElementById('button_mode');  
    const text = document.getElementById('mode_text');

    if (body.classList.contains('dark_mode')){
        body.classList.replace('dark_mode','bright_mode');

        text.innerText = "dark mode";  

        const fields = document.querySelectorAll('.dark_field');
        fields.forEach(field => {
            field.classList.replace('dark_field','bright_field');
        });
        const cards = document.querySelectorAll('.card_dark');
        cards.forEach(card => {
            card.classList.replace('card_dark','card_bright');
        });
        var bars = document.querySelectorAll('.bar_dark');
        bars.forEach(bar => {
            bar.classList.replace('bar_dark','bar_bright');
        });
        bars = document.querySelectorAll('.bar_change_dark');
        bars.forEach(bar => {
            bar.classList.replace('bar_change_dark','bar_change_bright');
        });

        hrs.forEach(element => {
            element.style.borderColor = '#252422'; 
        });

        borders = document.querySelectorAll('.border_dark');
        borders.forEach(border=> {
            border.classList.replace('border_dark','border_bright');
        });

        button.style.backgroundColor = '#252422';
        button.innerHTML = `<i class="fa-solid fa-sun translate-x-[50px]" style="color: #DCDCDD"></i>`;

    }else if (body.classList.contains('bright_mode')){
        body.classList.replace('bright_mode','dark_mode');  

        text.innerText = "light mode";        

        const fields = document.querySelectorAll('.bright_field');
        fields.forEach(field => {
            field.classList.replace('bright_field','dark_field');
        });
        const cards = document.querySelectorAll('.card_bright');
        cards.forEach(card => {
            card.classList.replace('card_bright','card_dark');            
        });    
        var bars = document.querySelectorAll('.bar_bright');
        bars.forEach(bar => {
            bar.classList.replace('bar_bright','bar_dark');
        }); 
        bars = document.querySelectorAll('.bar_change_bright');
        bars.forEach(bar => {
            bar.classList.replace('bar_change_bright','bar_change_dark');
        });

        hrs.forEach(element => {
            element.style.borderColor = '#DCDCDD'; 
        });

        borders = document.querySelectorAll('.border_bright');
        borders.forEach(border=> {
            border.classList.replace('border_bright','border_dark');
        });

        button.style.backgroundColor = '#DCDCDD';
        button.innerHTML = `<i class="fa-solid fa-moon translate-x-[0px]" style="color: #252422;"></i>`;
    }                 
}
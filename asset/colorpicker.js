$(document).ready(function () {
    //$('.box-area').css({
    //     background: localStorage.getItem('color')
    //});
    $('.colorpicker').css({
        background: localStorage.getItem('color')
    });
    $(".search-box input[type='text']").css({
        '--box-shadow-color': '' + localStorage.getItem('colorSearch'),
        'border': '0px ' + localStorage.getItem('colorSearch'),
    });
    $(".box-area li").css({
        'background': '' + localStorage.getItem('colorSearch')
    });

});

function update(picker) {
    localStorage.setItem(
        'color',
        'rgba(' + Math.round(picker.rgb[0]) +
        ', ' +
        Math.round(picker.rgb[1]) +
        ', ' +
        Math.round(picker.rgb[2]) +
        ', 0.5)'
    );
    localStorage.setItem('colorSearch', picker.toRGBString());
    /*$('.box-area').css({
        background: localStorage.getItem('color')
    });*/
    $('.colorpicker').css({
        background: localStorage.getItem('color')
    });
    $(".search-box input[type='text']").css({
        '--box-shadow-color': '' + localStorage.getItem('colorSearch'),
        'border': '0px ' + localStorage.getItem('colorSearch'),
    });
    $(".box-area li").css({
        'background': '' + localStorage.getItem('colorSearch')
    });

}
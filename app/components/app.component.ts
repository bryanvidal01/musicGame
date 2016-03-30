import {Component} from 'angular2/core';

@Component({
    selector: 'musiquegame',
    templateUrl: 'app/templates/app.html'
})
export class AppComponent {

    addLibrary(key) {
        jQuery('input').val("");
        jQuery('video').removeClass('not-remove');
        jQuery('.libraries--new').fadeOut();
        jQuery('.key-content').addClass('is-open');
        jQuery('.loader').fadeIn();
        setTimeout(function(){
            jQuery('.loader').fadeOut();
            jQuery('video').addClass('not-remove');
            jQuery('.libraries--new').fadeIn();
            jQuery('.key-content').removeClass('is-open');
        }, 30000);
        jQuery.get( "https://api.spotify.com/v1/search?q="+ key +"&type=artist&market=US", function( data ) {

            idArtist = data['artists']['items'][0]['id'];

            jQuery.get( "https://api.spotify.com/v1/artists/"+ idArtist +"/top-tracks?country=SE", function( data ) {
                dataSong = data['tracks'][0]['preview_url'];
                jQuery('#preview').attr('src', dataSong);
                jQuery('#preview').attr('autoplay', 'autoplay');
                var playerPreview = document.getElementById('preview');
                playerPreview.volume = 0.4;
            });
        });
    }

}

jQuery(window).load(function(){
    jQuery('.controls a').click(function(event){
        event.preventDefault();
        jQuery('.loader').fadeOut();
        jQuery('video').addClass('not-remove');
        jQuery('.libraries--new').fadeIn();
        jQuery('.key-content').removeClass('is-open');
    })
})


jQuery('body').keypress(function(event){
    let key = event.keyCode;
    console.log(key);

    if(key == 99){
        var player = document.getElementById('clap');
        player.currentTime = 0;
        player.play();
        jQuery('.key-2').addClass('active');
        setTimeout(function(){
            jQuery('.key-2').removeClass('active');
        }, 200);

    }

    if(key == 116){
        var player = document.getElementById('triangle');
        player.currentTime = 0;
        player.play();

        jQuery('.key-3').addClass('active');
        setTimeout(function(){
            jQuery('.key-3').removeClass('active');
        }, 200);
    }

    if(key == 104){
        var player = document.getElementById('hithat');
        player.currentTime = 0;
        player.play();

        jQuery('.key-4').addClass('active');
        setTimeout(function(){
            jQuery('.key-4').removeClass('active');
        }, 200);
    }

    if(key == 107){
        var player = document.getElementById('kick');
        player.currentTime = 0;
        player.play();

        jQuery('.key-1').addClass('active');
        setTimeout(function(){
            jQuery('.key-1').removeClass('active');
        }, 200);
    }

    if(key == 38){

        jQuery('video').fadeOut(0);
        jQuery('video.1').fadeIn(0);
        jQuery('video.1').addClass('clicked');
        setTimeout(function(){
            jQuery('video.1').removeClass('clicked');
        }, 200);

        jQuery('.clip-key .key').removeClass('active')
        jQuery('.key-c-1').addClass('active');

    }
    if(key == 233){
        jQuery('video').fadeOut(0);
        jQuery('video.2').fadeIn(0);
        jQuery('video.2').addClass('clicked');
        setTimeout(function(){
            jQuery('video.2').removeClass('clicked');
        }, 200);

        jQuery('.clip-key .key').removeClass('active')
        jQuery('.key-c-2').addClass('active');
    }
    if(key == 34){
        jQuery('video').fadeOut(0);
        jQuery('video.3').fadeIn(0);
        jQuery('video.3').addClass('clicked');
        setTimeout(function(){
            jQuery('video.3').removeClass('clicked');
        }, 200);

        jQuery('.clip-key .key').removeClass('active')
        jQuery('.key-c-3').addClass('active');
    }
})

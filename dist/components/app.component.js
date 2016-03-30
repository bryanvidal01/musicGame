System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.addLibrary = function (key) {
                    jQuery('input').val("");
                    jQuery('video').removeClass('not-remove');
                    jQuery('.libraries--new').fadeOut();
                    jQuery('.key-content').addClass('is-open');
                    jQuery('.loader').fadeIn();
                    setTimeout(function () {
                        jQuery('.loader').fadeOut();
                        jQuery('video').addClass('not-remove');
                        jQuery('.libraries--new').fadeIn();
                        jQuery('.key-content').removeClass('is-open');
                    }, 30000);
                    jQuery.get("https://api.spotify.com/v1/search?q=" + key + "&type=artist&market=US", function (data) {
                        idArtist = data['artists']['items'][0]['id'];
                        jQuery.get("https://api.spotify.com/v1/artists/" + idArtist + "/top-tracks?country=SE", function (data) {
                            dataSong = data['tracks'][0]['preview_url'];
                            jQuery('#preview').attr('src', dataSong);
                            jQuery('#preview').attr('autoplay', 'autoplay');
                            var playerPreview = document.getElementById('preview');
                            playerPreview.volume = 0.4;
                        });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'musiquegame',
                        templateUrl: 'app/templates/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            jQuery(window).load(function () {
                jQuery('.controls a').click(function (event) {
                    event.preventDefault();
                    jQuery('.loader').fadeOut();
                    jQuery('video').addClass('not-remove');
                    jQuery('.libraries--new').fadeIn();
                    jQuery('.key-content').removeClass('is-open');
                });
            });
            jQuery('body').keypress(function (event) {
                var key = event.keyCode;
                console.log(key);
                if (key == 99) {
                    var player = document.getElementById('clap');
                    player.currentTime = 0;
                    player.play();
                    jQuery('.key-2').addClass('active');
                    setTimeout(function () {
                        jQuery('.key-2').removeClass('active');
                    }, 200);
                }
                if (key == 116) {
                    var player = document.getElementById('triangle');
                    player.currentTime = 0;
                    player.play();
                    jQuery('.key-3').addClass('active');
                    setTimeout(function () {
                        jQuery('.key-3').removeClass('active');
                    }, 200);
                }
                if (key == 104) {
                    var player = document.getElementById('hithat');
                    player.currentTime = 0;
                    player.play();
                    jQuery('.key-4').addClass('active');
                    setTimeout(function () {
                        jQuery('.key-4').removeClass('active');
                    }, 200);
                }
                if (key == 107) {
                    var player = document.getElementById('kick');
                    player.currentTime = 0;
                    player.play();
                    jQuery('.key-1').addClass('active');
                    setTimeout(function () {
                        jQuery('.key-1').removeClass('active');
                    }, 200);
                }
                if (key == 38) {
                    jQuery('video').fadeOut(0);
                    jQuery('video.1').fadeIn(0);
                    jQuery('video.1').addClass('clicked');
                    setTimeout(function () {
                        jQuery('video.1').removeClass('clicked');
                    }, 200);
                    jQuery('.clip-key .key').removeClass('active');
                    jQuery('.key-c-1').addClass('active');
                }
                if (key == 233) {
                    jQuery('video').fadeOut(0);
                    jQuery('video.2').fadeIn(0);
                    jQuery('video.2').addClass('clicked');
                    setTimeout(function () {
                        jQuery('video.2').removeClass('clicked');
                    }, 200);
                    jQuery('.clip-key .key').removeClass('active');
                    jQuery('.key-c-2').addClass('active');
                }
                if (key == 34) {
                    jQuery('video').fadeOut(0);
                    jQuery('video.3').fadeIn(0);
                    jQuery('video.3').addClass('clicked');
                    setTimeout(function () {
                        jQuery('video.3').removeClass('clicked');
                    }, 200);
                    jQuery('.clip-key .key').removeClass('active');
                    jQuery('.key-c-3').addClass('active');
                }
            });
        }
    }
});

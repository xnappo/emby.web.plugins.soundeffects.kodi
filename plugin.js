define([], function () {

    return function () {

        var self = this;

        self.name = 'Kodi';
        self.type = 'soundeffects';
        self.id = 'kodisoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    }
});

define([], function () {

    return function () {

        var self = this;

        self.name = 'Plink';
        self.type = 'soundeffects';
        self.id = 'plinksoundeffects';

        self.getEffects = function () {
            return {
                navigation: 'navigation.wav',
                select: 'select.wav'
            };
        };
    }
});

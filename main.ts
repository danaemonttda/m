input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        `)
    music.ringTone(784)
    music.setVolume(255)
    basic.showString("se esta contactando a tu medico")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # #
        . # . . .
        . # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        . # # # .
        `)
})
basic.showString("¿u are ok?")

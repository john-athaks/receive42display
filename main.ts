radio.onReceivedNumber(function (receivedNumber) {
    music.playTone(294, music.beat(BeatFraction.Eighth))
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        `)
})
radio.setGroup(42)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    . . . . .
    `)
basic.forever(function () {
	
})

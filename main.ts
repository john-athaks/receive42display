radio.onReceivedNumber(function (receivedNumber) {
    music.ringTone(294)
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

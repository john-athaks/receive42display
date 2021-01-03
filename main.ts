radio.onReceivedNumber(function (receivedNumber) {
    if (δύναμη != receivedNumber) {
        music.ringTone(294)
        basic.showString("Hello!")
        δύναμη = receivedNumber
    }
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
let δύναμη = 0
radio.setGroup(42)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    . . . . .
    `)
δύναμη = -81
basic.forever(function () {
	
})

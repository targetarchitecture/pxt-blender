RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    spinPercent += -1 * change
})
RotaryEncoder.onPressEvent(function () {
    spinPercent = center
})
input.onButtonPressed(Button.A, function () {
    spinPercent += -1 * change
})
input.onButtonPressed(Button.B, function () {
    spinPercent += change
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    spinPercent += change
})
let spinPercent = 0
let center = 0
let change = 0
RotaryEncoder.init(Pins.P16, Pins.P15, Pins.P14)
change = 20
center = 1390
spinPercent = center
basic.forever(function () {
    spinPercent = Math.constrain(spinPercent, 0.5 * center, 1.5 * center)
    servos.P0.setPulse(spinPercent)
    serial.writeValue("x", spinPercent)
    basic.pause(100)
})

RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    spinPercent += -100
})
RotaryEncoder.onPressEvent(function () {
	
})
input.onButtonPressed(Button.A, function () {
    spinPercent += -10
    serial.writeValue("x", spinPercent)
})
input.onButtonPressed(Button.B, function () {
    spinPercent += 10
    serial.writeValue("x", spinPercent)
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    spinPercent += 100
})
let spinPercent = 0
RotaryEncoder.init(Pins.P14, Pins.P14, Pins.P13)
spinPercent = 1490
basic.forever(function () {
    servos.P0.setPulse(spinPercent)
    basic.pause(100)
})

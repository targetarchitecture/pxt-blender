RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    spinPercent += -1
    led.plotBarGraph(
    spinPercent,
    100
    )
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    spinPercent += 1
    led.plotBarGraph(
    spinPercent,
    100
    )
})
let spinPercent = 0
RotaryEncoder.init(Pins.P14, Pins.P14, Pins.P13)
servos.P0.stop()
spinPercent = 0
serial.writeNumber(spinPercent)
led.plotBarGraph(
50,
100
)
basic.forever(function () {
	
})

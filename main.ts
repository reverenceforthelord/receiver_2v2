input.onButtonPressed(Button.A, function () {
    speed = speed + 100
    if (speed > 1000) {
        speed = 338
    }
    pins.analogWritePin(AnalogPin.P0, speed)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showIcon(IconNames.Heart)
        Start = 1
    } else {
        basic.showIcon(IconNames.SmallHeart)
        Start = 0
    }
})
let speed = 0
let Start = 0
radio.setGroup(1)
Start = 0
speed = 450
pins.analogWritePin(AnalogPin.P0, speed)
basic.forever(function () {
    while (Start == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
    }
})

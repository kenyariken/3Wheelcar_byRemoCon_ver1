radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        pins.servoWritePin(AnalogPin.P0, 70)
        pins.servoWritePin(AnalogPin.P1, 110)
    } else if (receivedString == "back") {
        pins.servoWritePin(AnalogPin.P0, 110)
        pins.servoWritePin(AnalogPin.P1, 70)
    } else if (receivedString == "left") {
        pins.servoWritePin(AnalogPin.P0, 82)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (receivedString == "right") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 99)
    } else if (receivedString == "stop") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    }
})
radio.setGroup(1)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)

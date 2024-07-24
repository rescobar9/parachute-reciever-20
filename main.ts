input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
radio.onReceivedString(function (receivedString) {
    data = receivedString
})
let data = ""
radio.setGroup(1)
datalogger.setColumnTitles(
"acceleration X",
"acceleration Y",
"acceleration Z",
"acceleration S"
)
basic.forever(function () {
    while (data == "start") {
        datalogger.log(
        datalogger.createCV("acceleration X", input.acceleration(Dimension.X)),
        datalogger.createCV("acceleration Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("acceleration Z", input.acceleration(Dimension.Z)),
        datalogger.createCV("acceleration S", input.acceleration(Dimension.Strength))
        )
        radio.sendNumber(input.acceleration(Dimension.Strength))
    }
})

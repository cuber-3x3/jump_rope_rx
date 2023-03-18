radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 跳绳个数) {
        跳绳个数 = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    跳绳个数 = 0
    正在跳绳 = 1
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        # # # # #
        `)
    radio.sendString("START")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FINISH") {
        正在跳绳 = 0
        basic.showNumber(跳绳个数)
    }
})
let 正在跳绳 = 0
let 跳绳个数 = 0
跳绳个数 = 0
正在跳绳 = 0
radio.setGroup(31)
basic.forever(function () {
    if (正在跳绳 == 1) {
        serial.writeValue("x", 跳绳个数)
        basic.pause(200)
    }
})

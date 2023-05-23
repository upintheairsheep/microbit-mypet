music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
music.playMelody("- - - - - - - - ", 120)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})

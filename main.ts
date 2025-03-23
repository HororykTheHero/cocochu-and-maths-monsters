namespace SpriteKind {
    export const Box = SpriteKind.create()
    export const Box0 = SpriteKind.create()
    export const Box1 = SpriteKind.create()
    export const Box2 = SpriteKind.create()
    export const Box3 = SpriteKind.create()
    export const Box4 = SpriteKind.create()
    export const Box5 = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const logo = SpriteKind.create()
    export const Hazard = SpriteKind.create()
}
function cleanUp () {
    sprite_list = sprites.allOfKind(SpriteKind.Hazard)
    for (let value of sprite_list) {
        value.destroy()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doJump()
})
function destroyMonsters () {
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list) {
        value.destroy()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.say(sum, 2000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    doJump()
})
function chooseSum () {
    remaining = sum_list.length
    if (remaining == 0) {
        level += 1
        game.splash("Level " + convertToText(level), " complete")
        drawLevel(level)
        startLevel()
    } else {
        remaining += -1
        current = randint(0, remaining)
        sum = sum_list[current]
        hero.say(sum, 3000)
        correct_box = box_list[current]
        box_list.removeAt(current)
        answer_list.removeAt(current)
        sum_list.removeAt(current)
    }
}
function gameComplete () {
    music.powerUp.play()
    effects.hearts.startScreenEffect()
    pause(5000)
    game.splash("Congratulations! ", "You have finished the game")
    game.splash("You collected " + convertToText(info.score()) + "coins.")
    effects.hearts.endScreenEffect()
    game.reset()
}
function killMonsters () {
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list) {
        value.startEffect(effects.disintegrate)
        value.destroy()
    }
}
function newGame () {
    scene.setTileMap(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff99999999999999999999fffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff99999999999999999999999fffffffffffff9999999999ffff9999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff99999999999999999999999999fffffffffff999999999999ff99999999999999ffffffffffffff999999999ffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffff
        ffffff9999999999999fff999999999999fffffffff9999999999999ff999999999999999ffffffffff9999999999999ffffff99999999999ffffff99999ffffffffffffffffffffffffffffffffffff
        fffff99999999999fffffffff9999999999fffffff99999999999999f9999999999999999ffffffff999999999999999ffffff99999999999ffffff99999ffffffffffffffffffffffffffffffffffff
        ffff99999999999ffffffffffff99999999ffffff999999999999999f9999999999999999ffffffff9999999999999999fffff99999999999ffffff99999ffffffffffffffffffffffffffffffffffff
        fff9999999999fffffffffffffff99999999fffff99999999ff99999f999999ffff999999ffffffff9999999999999999ffff999999999999ffffff99999ffffffffffffffffffffffffffffffffffff
        fff99999999ffffffffffffffffff99999999ffff9999999fff99999f999999fffff99999fffffff9999999999f999999ffff999999999999ffffff99999ffffffffffffffffffffffffffffffffffff
        fff9999999ffffffffffffffffffff99999999ff9999999ffff99999f999999fffffffffffffffff9999999ffff999999ffff999999ffffffffffff99999ffffffffffffffffffffffffffffffffffff
        fff999999fffffffffffffffffffff99999999ff999999fffff99999f999999fffffffffffffffff999999ffffff99999ffff999999ffffffffffff99999ffffffffffffffffffffffffffffffffffff
        fff99999fffffffffffffffffffffff9999999ff999999fffff99999f999999fffffffffffffffff999999ffffff99999ffff99999fffffffffffff99999ffffffffffffffffffffffffffffffffffff
        fff99999ffffffffffffffffffffffff999999ff999999fffff99999f999999fffffffffffffffff99999fffffff99999ffff99999fffffffffffff99999ffffffffffffffffffff99999fffffffffff
        fff999999ffffffffffffffffffffffff99999ff99999ffffff99999ff99999fffffffffffffffff99999fffffff99999ffff99999fffffffffffff99999ffffffffffffffffffff99999fffffffffff
        fff999999fffffffffffffffffffffffffffffff99999ffffff99999ff999999ffffffffffffffff999999fffff999999fff999999fffffffffffff99999ffffffffffffffffffff99999fffffffffff
        fff9999999ffffffffffffffffffffffffffffff99999ffffff99999ff999999ffffffffffffffff999999fffff999999fff999999ffffffffffff999999ffffffffffffffffffff99999fffffffffff
        fff9999999ffffffffffffffffffffffffffffff99999ffffff99999ff999999ffffffffffffffff999999fffff999999fff999999ffffffffffff999999fffffffffffffffffff999999fffff99999f
        ffff999999ffffffffffffffffffffffffffffff99999ffffff99999ff999999ffffffffffffffff999999fffff999999fff999999ffffffffffff999999fffffffffffffffffff999999ffff999999f
        ffff999999ffffffffffffffffffffffffffffff999999fffff99999fff99999fffffffffffffffff99999fffff999999fff99999fffffffffffff999999fffffffffffffffffff999999fff9999999f
        fffff999999fffffffffffffffffffffffffffff999999fffff99999fff99999fffffffffffffffff99999fffff999999fff99999fffffffffffff99999fff999999999ffffffff999999fff99999999
        fffff9999999ffffffffffffffffffffffffffff9999999ffff99999fff999999ffffffffffffffff99999fffff999999fff99999fffffffffffff99999ff99999999999fffffff99999ffff99999999
        fffff9999999ffffffffffffffffffffffffffff9999999ffff99999fff9999999fffffffffffffff99999fffff999999ff999999fffffffffffff999999999999999999fffffff99999ffff99999999
        fffff9999999fffffffffffffffffffffffffffff999999ffff99999fff99999999ffffff99999fff99999ffffff99999ff999999fffffffffffff99999999999999999999fffff99999ffff99999999
        ffffff9999999ffffffffffffffffffffffffffff9999999f9999999fff999999999ffff999999fff99999ffffff99999f9999999fffffffffffff999999999999999999999ffff99999ffff99999999
        fffffff9999999fffff9999999999fffffffffffff99999999999999ffff999999999ff9999999fff99999fffff999999f9999999fffffffffffff99999999999999999999999ff99999ffff99999999
        fffffff99999999ff999999999999fffffffffffff99999999999999fffff99999999999999999fff9999999fff999999f999999ffffffffffffff99999999999ff9999999999ff999999fff99999999
        fffffff9999999999999999999999fffffffffffff99999999999999ffffff9999999999999999fff9999999999999999f999999ffffffffffffff999999999fffff999999999ff999999fff99999999
        ffffffff999999999999999999999ffffffffffffff9999999999999fffffff99999999999999ffff9999999999999999f99999ffff9999999ffff99999999ffffffff9999999ff999999fff9999999f
        ffffffff999999999999999999999fffffffffffffff999999999fffffffffff999999999999ffffff99999999999999ff99999ffff9999999ffff9999999ffffffffff999999ff999999fff9999999f
        ffffffffff99999999999999ffffffffffffffffffff999999999ffffffffffff9999999999fffffff99999999999999ff99999fff99999999ffff999999fffffffffff99999ffff99999fff9999999f
        ffffffffff99999999999fffffffffffffffffffffffffff99999fffffffffffff999999999ffffffff999999999999fff99999fff99999999ffff999999fffffffffff99999ffff99999fff9999999f
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999fffff9999999999999999ffff999999fffffffffff99999ffff99999f999999999f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999fffffff99999fffffffffff99999ffff999999999999999f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999ffffffff99999fffffffffff99999ffff999999999999999f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999ffffffff99999ffffffffffffffffffff9999999999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999fffffffff99999ffffffffffffffffffff9999999999999999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999fff99999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffff99999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbfffbbbbbffbbbbbfffffffbbbbbbfbbfffbbffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbfffbffffffffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbfffbbfffffffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbfffbbfffffffbbfffbbbbbbbfbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbfbbfffbbfbbfffbbfffffffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbfffbbfffffffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbfffbffffffffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffbbfbbfffbbfbbbbbfffffffffbbfffbbfffbbffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffbbffbbbbbffbbbbbbfbbfffbbffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1ffffffff1ffffffffffffffbbbfffbbbfbbfffbbfffbbfffbbfffbbfbbffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff1ffffffffff1fffffffffffffbbfbfbfbbfbbfffbbfffbbfffbbfffbbfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffbbffbffbbfbbfffbbfffbbfffbbbbbbbffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff1ffffffffffff1ffffffffffffbbfffffbbfbbbbbbbfffbbfffbbfffbbffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff11ff222222ff11ffffffffffffbbfffffbbfbbfffbbfffbbfffbbfffbbffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff112222222211fffffffffffffbbfffffbbfbbfffbbfffbbfffbbfffbbfbffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff221f21f222ffffffffffffffbbfffffbbfbbfffbbfffbbfffbbfffbbffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff22ff2ff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffeee111ffffffffff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffeeee1111effffffff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffeeeee1111bb1ffffff2222222222ffffffffffffffbbfffffbbffbbbbbfffbbbbbfffbbbbbffbbbbbbbbffbbbbbbfbbbbbbfffbbbbbfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffeeeee1111bee1fffff2222222222ffffffffffffffbbbfffbbbfbbfffbbfbbfffbbfbbffffbffffbbffffbbffffffbbfffbbfbbffffbffffffffffffffffffffffffffffffffff
        fffffffffffffffffeeeeee1111eeedfffff2222222222ffffffffffffffbbfbfbfbbfbbfffbbfbbfffbbfbbfffffffffbbffffbbffffffbbfffbbfbbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffeeeeee111f1eedfffff2222222222ffffffffffffffbbffbffbbfbbfffbbfbbfffbbffbbbbbfffffbbffffbbbbffffbbfffbbffbbbbbfffffffffffffffffffffffffffffffffff
        fffffffffffffffffeeeee1111ffeedfffff2222222222ffffffffffffffbbfffffbbfbbfffbbfbbfffbbffffffbbffffbbffffbbffffffbbbbbbfffffffbbffffffffffffffffffffffffffffffffff
        ffffffffffffffffffeeee1111eeeeffffff2222222222ffffffffffffffbbfffffbbfbbfffbbfbbfffbbffffffbbffffbbffffbbffffffbbfffbbffffffbbffffffffffffffffffffffffffffffffff
        fffffffffffffffffffbfe1fbfeeefffffffffffffffffffffffffffffffbbfffffbbfbbfffbbfbbfffbbfbffffbbffffbbffffbbffffffbbfffbbfbffffbbffffffffffffffffffffffffffffffffff
        fffffffffffffffffffbbfffbbffffffffffffffffffffffffffffffffffbbfffffbbffbbbbbffbbfffbbffbbbbbfffffbbfffffbbbbbbfbbfffbbffbbbbbfffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(5000)
    game.splash("Solve the sum and", "collect the correct box.")
    game.splash("Beware! Choosing the wrong", "box releases a monster...")
    game.splash("Button A to jump", "B to see the sum again")
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(3)
    info.setScore(0)
    info.setLife(3)
    controller.moveSprite(hero, 100, 0)
    scene.cameraFollowSprite(hero)
    hero.ay = 300
    RightIdle()
    facing_right = false
    facing_left = false
    level = 0
    drawLevel(0)
    startLevel()
}
function LeftIdle () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
function walkRight () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
function drawLevel (level: number) {
    cleanUp()
    if (level == levelmaps.length) {
        gameComplete()
    } else if (level < levelmaps.length) {
        scene.setTileMap(levelmaps[level])
        scene.setTile(14, img`
            b b b 3 d d b b 3 b b b b 3 d b 
            b b b 3 d b b b 3 b b b c 3 b b 
            b c c 3 b b b 3 3 b b c c 3 3 b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 d d b b 3 b b b b b 3 d b b 3 
            3 b b b b 3 b b b b c 3 d b b b 
            3 3 b b b 3 b b b c 3 3 b b b b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            b 3 d b b b b 3 d b b b 3 d d b 
            b 3 b b b b c 3 b b b b 3 b b b 
            c 3 b b b c c 3 b b b 3 3 b b b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            d b b b 3 d d b b 3 3 3 d b b 3 
            d b b c 3 d b b b b 3 b b b b 3 
            b b b c 3 b b b c c 3 b b b c 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, true)
        scene.setTile(7, img`
            d d d d d d d d d d d d d d d d 
            d b d d b d d d d d b d d d d b 
            b c c 3 b b b 3 3 b b c c 3 3 b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 d d b b 3 b b b b b 3 d b b 3 
            3 b b b b 3 b b b b c 3 d b b b 
            3 3 b b b 3 b b b c 3 3 b b b b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            b 3 d b b b b 3 d b b b 3 d d b 
            b 3 b b b b c 3 b b b b 3 b b b 
            c 3 b b b c c 3 b b b 3 3 b b b 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            d b b b 3 d d b b 3 3 3 d b b 3 
            d b b c 3 d b b b b 3 b b b b 3 
            b b b c 3 b b b c c 3 b b b c 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, true)
        scene.setTile(8, img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 b 3 b 3 3 3 3 3 3 
            3 3 3 3 3 b b b 3 b b b 3 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            3 3 3 3 b b b b 3 b b b b 3 3 3 
            `, false)
        scene.setTile(12, img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 c c c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 c c c 3 3 3 3 3 3 3 
            3 3 3 c c 3 c c c 3 3 3 3 3 3 3 
            3 3 3 c c 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 c c 3 c c c c c 3 3 3 3 3 
            3 3 3 c c 3 c c c c c 3 3 3 3 3 
            3 3 3 c c 3 c c c c c 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, false)
        scene.setTile(10, img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 c c c 3 3 3 3 3 3 3 3 3 
            3 3 3 3 c c c 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 c c 3 3 3 3 
            3 3 c c c c c c c 3 c c 3 3 3 3 
            3 3 c c c c c c c 3 c c 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 c c 3 3 3 3 
            3 3 3 3 3 3 c c c 3 c c 3 3 3 3 
            3 3 3 3 3 3 c c c 3 c c 3 3 3 3 
            3 3 3 3 3 3 c c c 3 c c 3 3 3 3 
            3 3 3 3 3 3 c c c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, false)
        scene.setTile(3, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(13, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(5, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(4, img`
            3 3 3 3 3 3 4 5 4 2 3 3 3 3 3 3 
            3 3 3 3 3 2 5 4 5 5 2 3 3 3 3 3 
            3 3 3 3 d d d d d d d b 3 3 3 3 
            3 3 3 3 3 b b b b b c 3 3 3 3 3 
            3 3 3 3 3 3 b b b c 3 3 3 3 3 3 
            3 3 3 3 3 3 3 b c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 b c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 b c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 c c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 c c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 c c 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, false)
        torch_list = scene.getTilesByType(4)
        for (let value of torch_list) {
            torch = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Hazard)
            scene.place(value, torch)
            torch.y += -12
            torch.startEffect(effects.fire)
        }
        scene.placeOnRandomTile(hero, 13)
        answer_list = []
        sum_list = []
        box_list = []
        tile_list = scene.getTilesByType(5)
        for (let myTile of tile_list) {
            found_unique = false
            while (found_unique == false) {
                i = randint(2, 9)
                j = randint(2, 9)
                answer = convertToText(i * j)
                if (answer_list.indexOf(answer) == -1) {
                    found_unique = true
                }
                sum = "" + convertToText(i) + "x" + convertToText(j) + "="
            }
            mySprite = simpleText.createTextSprite(
            answer,
            15,
            5,
            SpriteKind.Box
            )
            scene.place(myTile, mySprite)
            box_list.push(mySprite)
            answer_list.push(answer)
            sum_list.push(sum)
        }
    }
}
function walkLeft () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Box, function (sprite, otherSprite) {
    if (otherSprite == correct_box) {
        otherSprite.setKind(SpriteKind.Coin)
        otherSprite.setImage(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `)
        otherSprite.setVelocity(0, -200)
        otherSprite.setFlag(SpriteFlag.Ghost, true)
        coinAnimation(otherSprite)
        music.magicWand.play()
        info.changeScoreBy(1)
        killMonsters()
        pause(1000)
        chooseSum()
        otherSprite.destroy()
    } else {
        music.powerDown.play()
        otherSprite.setFlag(SpriteFlag.Ghost, true)
        pause(1000)
        otherSprite.setFlag(SpriteFlag.Ghost, false)
        monster = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        monster.setPosition(otherSprite.x, otherSprite.y)
        monster.follow(hero, 50)
    }
})
function RightIdle () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e 1 1 1 . . . . . 
        . . . . e e e e 1 1 1 1 e . . . 
        . . . e e e e e 1 1 1 1 b b 1 . 
        . . . e e e e e 1 1 1 1 b e e 1 
        . . e e e e e e 1 1 1 1 e e e d 
        . . e e e e e e 1 1 1 f 1 e e d 
        . . e e e e e 1 1 1 1 f f e e d 
        . . . e e e e 1 1 1 1 e e e e . 
        . . . . b . e 1 . b . e e e . . 
        . . . . b b . . . b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
function doJump () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -175
    }
}
function startLevel () {
    pause(500)
    chooseSum()
}
function coinAnimation (mySprite: Sprite) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    music.wawawawaa.play()
    pause(500)
    destroyMonsters()
    info.changeLifeBy(-1)
})
let monster: Sprite = null
let mySprite: Sprite = null
let answer = ""
let j = 0
let i = 0
let found_unique = false
let tile_list: tiles.Tile[] = []
let torch: Sprite = null
let torch_list: tiles.Tile[] = []
let facing_left = false
let facing_right = false
let answer_list: string[] = []
let box_list: Sprite[] = []
let correct_box: Sprite = null
let current = 0
let level = 0
let sum_list: string[] = []
let remaining = 0
let sum = ""
let sprite_list: Sprite[] = []
let levelmaps: Image[] = []
let hero: Sprite = null
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
levelmaps = [
img`
    e e e e e e e e e e e e e e e e 
    e d . . . . . . . . . . . . . e 
    e . a . 8 . . 8 . . 8 . . 8 . e 
    e . . . . . . . . . . . . . . e 
    e . . . 5 . . . 5 . . c 5 . . e 
    e . . . . . . . . . . a . . . e 
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 
    e e e e e e e e e e e e e e e e 
    `,
img`
    e e e e e e e e e e e e e e e e 
    e d . 5 . . . . . . 5 . . . . e 
    e . a . . . . 8 . . . . . . . e 
    e 7 7 7 7 7 . . . 7 7 7 7 7 7 e 
    e . . . 5 . . . 5 . . . . . . e 
    e . . . . . . . . . . c a . . e 
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e 
    e e e e e e e e e e e e e e e e 
    `,
img`
    e e e e e e e e e e e e e e e e 
    e . . . . 8 . . . . . 5 . . . e 
    e . a . . . . . . . . . . . . e 
    e 7 7 7 7 7 . . . . . 7 7 7 7 e 
    e . . 5 . . . . 5 . . . . . . e 
    e . . . . . . . . . . . a c . e 
    e . . 7 7 7 7 7 7 7 7 . . . . e 
    e . c . . . . . . d . . . . . e 
    e . . . . . . a . . . . . . . e 
    e 7 7 7 . 4 . . . 7 7 7 7 7 7 e 
    e . . . . . . 5 . . . . 5 . . e 
    e . . . . . . . . . . . . . . e 
    e . 7 7 7 7 7 7 . . 7 7 7 7 7 e 
    e . . . 5 . . . 8 . . . . . . e 
    e . . . . . . . . . . a . . . e 
    e e e e e e e e e e e e e e e e 
    `,
img`
    ed.eeeeeeeeeeeeeeeeeeeeeeeeeeeee
    e..............................e
    e..a.........c.5...............e
    e.....................4..4..4..e
    e7777777.....7777..............e
    e......e7...........5..........e
    e......ee7.....................e
    e..5...eee7777777.....7777.....e
    e...............e7...........5.e
    e.777...........ee7............e
    e.....5...a.....eee7777777..777e
    e..............................e
    e....777....c............7777..e
    e.................5.5...7....c.e
    e......................7.......e
    e777777777777777777777777777777e
    `,
img`
    ..........
    ..........
    7.757.7..7
    e7e7e7e7.e
    e........e
    e........e
    e...77777e
    e7.......e
    ee7......e
    eee7..44.e
    eeee7....e
    e.......ce
    e5.......e
    e77777..5e
    e........e
    e.a......e
    e777..777e
    e........e
    e........e
    e5..77..5e
    e.......ae
    e........e
    e777..777e
    e.......5e
    ec.......e
    e..777777e
    e........e
    e........e
    e777777.ce
    ed...5...e
    e........e
    e77777777e
    `
]
newGame()
game.onUpdate(function () {
    if (hero.vx > 0 && facing_right == false) {
        walkRight()
        facing_right = true
    }
    if (hero.vx < 0 && facing_left == false) {
        walkLeft()
        facing_left = true
    }
    if (hero.vx == 0 && facing_right == true) {
        facing_right = false
        RightIdle()
    }
    if (hero.vx == 0 && facing_left == true) {
        facing_left = false
        LeftIdle()
    }
})

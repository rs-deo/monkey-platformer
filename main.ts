controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.z += 1
})
let hero: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero, 100, 0)
hero.ay = 250
scene.cameraFollowSprite(hero)

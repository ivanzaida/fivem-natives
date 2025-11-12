/**
 * GRAPHICS:DRAW_SPRITE_NAMED_RENDERTARGET
 *
 * 0xF13626F74924F72A

 * 
 * Similar to _DRAW_SPRITE, but seems to be some kind of "interactive" sprite, at least used by render targets.
 * These seem to be the only dicts ever requested by this native:
 * 
 * prop_screen_biker_laptop
 * Prop_Screen_GR_Disruption
 * Prop_Screen_TaleOfUs
 * prop_screen_nightclub
 * Prop_Screen_IE_Adhawk
 * prop_screen_sm_free_trade_shipping
 * prop_screen_hacker_truck
 * MPDesktop
 * Prop_Screen_Nightclub
 * And a few others
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textureDictionaryName
 * @param {string} textureName
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} useNearest
 */
export function drawSpriteNamedRendertarget(textureDictionaryName: string, textureName: string, centreX: number, centreY: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number, useNearest: boolean = false): void {
	const drawSpriteNamedRendertarget_result = Citizen.invokeNative<void>('0xF13626F74924F72A', textureDictionaryName, textureName, centreX, centreY, width, height, rotation, r, g, b, a, useNearest);
	return drawSpriteNamedRendertarget_result;
}
import { BlipIndex, EBlipSprite } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SPRITE
 *
 * 0x4C905FB262965D5D

 * 
 * Sets the displayed sprite for a specific blip..
 * 
 * You may have your own list, but since dev-c didn't show it I was bored and started looking through scripts and functions to get a presumable almost positive list of a majority of blip IDs
 * https://pastebin.com/Bpj9Sfft
 * 
 * Blips Images + IDs:
 * https://gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {EBlipSprite} sprite
 */
export function setBlipSprite(blip: BlipIndex, sprite: EBlipSprite | number): void {
	const setBlipSprite_result = Citizen.invokeNative<void>('0x4C905FB262965D5D', blip, sprite);
	return setBlipSprite_result;
}
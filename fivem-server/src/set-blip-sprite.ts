import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_BLIP_SPRITE
 *
 * 0x8DBBB0B9

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
 * @param {BlipIndex} blip The blip to change.
 * @param {number} spriteId The sprite ID to set.
 */
export function setBlipSprite(blip: BlipIndex, spriteId: number): void {
	const setBlipSprite_result = Citizen.invokeNative<void>('0x8DBBB0B9', blip, spriteId);
	return setBlipSprite_result;
}
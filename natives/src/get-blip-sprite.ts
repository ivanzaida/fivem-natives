import { BlipIndex, EBlipSprite } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_SPRITE
 *
 * 0x8FACE824AEC046E8

 * 
 * Blips Images + IDs:
 * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {EBlipSprite}  
 */
export function getBlipSprite(blip: BlipIndex): EBlipSprite {
	const getBlipSprite_result = Citizen.invokeNative<EBlipSprite>('0x8FACE824AEC046E8', blip);
	return getBlipSprite_result;
}
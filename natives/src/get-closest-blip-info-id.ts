import { EBlipSprite, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_CLOSEST_BLIP_INFO_ID
 *
 * 0xB981254932E1095E

 * 
 * ------------------------------------------------------------------
 * @param {EBlipSprite} blipSprite
 * @returns {BlipIndex}  
 */
export function getClosestBlipInfoId(blipSprite: EBlipSprite | number): BlipIndex {
	const getClosestBlipInfoId_result = Citizen.invokeNative<BlipIndex>('0xB981254932E1095E', blipSprite);
	return getClosestBlipInfoId_result;
}
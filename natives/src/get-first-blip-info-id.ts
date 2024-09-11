import { EBlipSprite, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_FIRST_BLIP_INFO_ID
 *
 * 0xD56419CB9E15983F

 * 
 * ------------------------------------------------------------------
 * @param {EBlipSprite} blipSprite
 * @returns {BlipIndex}  
 */
export function getFirstBlipInfoId(blipSprite: EBlipSprite | number): BlipIndex {
	const getFirstBlipInfoId_result = Citizen.invokeNative<BlipIndex>('0xD56419CB9E15983F', blipSprite);
	return getFirstBlipInfoId_result;
}
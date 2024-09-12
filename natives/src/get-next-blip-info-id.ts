import { EBlipSprite, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_NEXT_BLIP_INFO_ID
 *
 * 0xA3F6143A8F610118

 * 
 * ------------------------------------------------------------------
 * @param {EBlipSprite} blipSprite
 * @returns {BlipIndex}  
 */
export function getNextBlipInfoId(blipSprite: EBlipSprite | number): BlipIndex {
	const getNextBlipInfoId_result = Citizen.invokeNative<BlipIndex>('0xA3F6143A8F610118', blipSprite);
	return getNextBlipInfoId_result;
}
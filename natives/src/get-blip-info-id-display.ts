import { BlipIndex, EBlipDisplay } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_INFO_ID_DISPLAY
 *
 * 0xC4BDFF590B6DE7A5

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blipId
 * @returns {EBlipDisplay}  
 */
export function getBlipInfoIdDisplay(blipId: BlipIndex): EBlipDisplay {
	const getBlipInfoIdDisplay_result = Citizen.invokeNative<EBlipDisplay>('0xC4BDFF590B6DE7A5', blipId);
	return getBlipInfoIdDisplay_result;
}
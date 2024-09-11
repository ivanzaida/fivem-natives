import { BlipIndex, EHudColours } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_HUD_COLOUR
 *
 * 0x2B91B956D741B8CE

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {EHudColours}  
 */
export function getBlipHudColour(blip: BlipIndex): EHudColours {
	const getBlipHudColour_result = Citizen.invokeNative<EHudColours>('0x2B91B956D741B8CE', blip);
	return getBlipHudColour_result;
}
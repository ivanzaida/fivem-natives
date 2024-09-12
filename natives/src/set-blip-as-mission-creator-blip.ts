import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_AS_MISSION_CREATOR_BLIP
 *
 * 0xEDFFFD65B4603707

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} value
 */
export function setBlipAsMissionCreatorBlip(blip: BlipIndex, value: boolean): void {
	const setBlipAsMissionCreatorBlip_result = Citizen.invokeNative<void>('0xEDFFFD65B4603707', blip, value);
	return setBlipAsMissionCreatorBlip_result;
}
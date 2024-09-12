import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:IS_MISSION_CREATOR_BLIP
 *
 * 0xBA5BA0D4E8539C9C

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function isMissionCreatorBlip(blip: BlipIndex): boolean {
	const isMissionCreatorBlip_result = Citizen.invokeNative<boolean>('0xBA5BA0D4E8539C9C', blip);
	return isMissionCreatorBlip_result;
}
import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_SET_BLIP_NAME
 *
 * 0xFB605529038475D2

 * 
 * Finalizes a text command started with BEGIN_TEXT_COMMAND_SET_BLIP_NAME, setting the name of the specified blip.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 */
export function endTextCommandSetBlipName(blip: BlipIndex): void {
	const endTextCommandSetBlipName_result = Citizen.invokeNative<void>('0xFB605529038475D2', blip);
	return endTextCommandSetBlipName_result;
}
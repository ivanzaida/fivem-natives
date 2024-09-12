import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:PULSE_BLIP
 *
 * 0x26D449828A6673C7

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 */
export function pulseBlip(blip: BlipIndex): void {
	const pulseBlip_result = Citizen.invokeNative<void>('0x26D449828A6673C7', blip);
	return pulseBlip_result;
}
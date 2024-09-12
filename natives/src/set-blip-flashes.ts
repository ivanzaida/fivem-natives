import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_FLASHES
 *
 * 0x861AC9C2D48CEA7F

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipFlashes(blip: BlipIndex, onOff: boolean): void {
	const setBlipFlashes_result = Citizen.invokeNative<void>('0x861AC9C2D48CEA7F', blip, onOff);
	return setBlipFlashes_result;
}
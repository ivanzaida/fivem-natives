import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_AS_SHORT_RANGE
 *
 * 0x360B279488A775FC

 * 
 * Sets whether or not the specified blip should only be displayed when nearby, or on the minimap.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipAsShortRange(blip: BlipIndex, onOff: boolean): void {
	const setBlipAsShortRange_result = Citizen.invokeNative<void>('0x360B279488A775FC', blip, onOff);
	return setBlipAsShortRange_result;
}
import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_MARKER_LONG_DISTANCE
 *
 * 0xD54D26545A07FB31

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipMarkerLongDistance(blip: BlipIndex, onOff: boolean): void {
	const setBlipMarkerLongDistance_result = Citizen.invokeNative<void>('0xD54D26545A07FB31', blip, onOff);
	return setBlipMarkerLongDistance_result;
}
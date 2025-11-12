import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_ROUTE
 *
 * 0xBC64B805EE071A37

 * 
 * Enable / disable showing route for the Blip-object.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipRoute(blip: BlipIndex, onOff: boolean): void {
	const setBlipRoute_result = Citizen.invokeNative<void>('0xBC64B805EE071A37', blip, onOff);
	return setBlipRoute_result;
}
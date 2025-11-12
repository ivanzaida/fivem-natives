import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_ROTATION
 *
 * 0x0C4EDD88E2185B8F

 * 
 * After some testing, looks like you need to use CEIL() on the rotation (vehicle/ped heading) before using it there.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} degrees
 */
export function setBlipRotation(blip: BlipIndex, degrees: number): void {
	const setBlipRotation_result = Citizen.invokeNative<void>('0x0C4EDD88E2185B8F', blip, degrees);
	return setBlipRotation_result;
}
import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_ROTATION_WITH_FLOAT
 *
 * 0xA1BA8AD71EF8F11A

 * 
 * Does not require whole number/integer rotations.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} degrees
 */
export function setBlipRotationWithFloat(blip: BlipIndex, degrees: number): void {
	const setBlipRotationWithFloat_result = Citizen.invokeNative<void>('0xA1BA8AD71EF8F11A', blip, degrees);
	return setBlipRotationWithFloat_result;
}
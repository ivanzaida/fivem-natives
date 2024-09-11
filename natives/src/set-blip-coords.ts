import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_COORDS
 *
 * 0xDABC73EF230B6665

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function setBlipCoords(blip: BlipIndex, coorsX: number, coorsY: number, coorsZ: number): void {
	const setBlipCoords_result = Citizen.invokeNative<void>('0xDABC73EF230B6665', blip, coorsX, coorsY, coorsZ);
	return setBlipCoords_result;
}
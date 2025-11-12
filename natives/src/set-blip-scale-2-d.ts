import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SCALE_2D
 *
 * 0xF7323733F48D067F

 * 
 * See https://imgur.com/a/lLkEsMN
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} scaleX
 * @param {number} scaleY
 */
export function setBlipScale_2D(blip: BlipIndex, scaleX: number, scaleY: number): void {
	const setBlipScale_2D_result = Citizen.invokeNative<void>('0xF7323733F48D067F', blip, scaleX, scaleY);
	return setBlipScale_2D_result;
}
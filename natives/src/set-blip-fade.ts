import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_FADE
 *
 * 0xDA2127CA9B43A877

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} destinationAlpha
 * @param {number} fadeDurationInMilliseconds
 */
export function setBlipFade(blip: BlipIndex, destinationAlpha: number, fadeDurationInMilliseconds: number): void {
	const setBlipFade_result = Citizen.invokeNative<void>('0xDA2127CA9B43A877', blip, destinationAlpha, fadeDurationInMilliseconds);
	return setBlipFade_result;
}
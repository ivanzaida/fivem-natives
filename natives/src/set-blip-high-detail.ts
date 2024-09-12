import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_HIGH_DETAIL
 *
 * 0x3C6F00DDEA51A2DA

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} value
 */
export function setBlipHighDetail(blip: BlipIndex, value: boolean): void {
	const setBlipHighDetail_result = Citizen.invokeNative<void>('0x3C6F00DDEA51A2DA', blip, value);
	return setBlipHighDetail_result;
}
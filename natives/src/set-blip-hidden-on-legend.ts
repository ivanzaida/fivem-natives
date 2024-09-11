import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_HIDDEN_ON_LEGEND
 *
 * 0xA1DFF583C8070610

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} value
 */
export function setBlipHiddenOnLegend(blip: BlipIndex, value: boolean): void {
	const setBlipHiddenOnLegend_result = Citizen.invokeNative<void>('0xA1DFF583C8070610', blip, value);
	return setBlipHiddenOnLegend_result;
}
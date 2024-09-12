import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_FLASHES_ALTERNATE
 *
 * 0xAB1FFF93A0BBFCDB

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipFlashesAlternate(blip: BlipIndex, onOff: boolean): void {
	const setBlipFlashesAlternate_result = Citizen.invokeNative<void>('0xAB1FFF93A0BBFCDB', blip, onOff);
	return setBlipFlashesAlternate_result;
}
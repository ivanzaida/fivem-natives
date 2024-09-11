import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_BRIGHT
 *
 * 0xEE0DD5760A017C08

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} onOff
 */
export function setBlipBright(blip: BlipIndex, onOff: boolean): void {
	const setBlipBright_result = Citizen.invokeNative<void>('0xEE0DD5760A017C08', blip, onOff);
	return setBlipBright_result;
}
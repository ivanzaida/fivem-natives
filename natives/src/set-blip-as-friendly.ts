import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_AS_FRIENDLY
 *
 * 0x6A52036D51C7E18E

 * 
 * false for enemy
 * true for friendly
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} friendly
 */
export function setBlipAsFriendly(blip: BlipIndex, friendly: boolean): void {
	const setBlipAsFriendly_result = Citizen.invokeNative<void>('0x6A52036D51C7E18E', blip, friendly);
	return setBlipAsFriendly_result;
}
import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_GOLD_TICK_ON_BLIP
 *
 * 0xDE551C7F0C84F5D5

 * 
 * Adds a orange checkmark on top of a given blip handle: https://imgur.com/a/aw5OTMF
 * _SHOW_FRIEND_INDICATOR_ON_BLIP - _SHOW_HEADING_INDICATOR_ON_BLIP
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} showGoldTick
 */
export function showGoldTickOnBlip(blip: BlipIndex, showGoldTick: boolean): void {
	const showGoldTickOnBlip_result = Citizen.invokeNative<void>('0xDE551C7F0C84F5D5', blip, showGoldTick);
	return showGoldTickOnBlip_result;
}
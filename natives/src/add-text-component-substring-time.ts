import { ETextComponentTimeFormat } from '@ivanzaida/structures'

/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_TIME
 *
 * 0xBD34A69071611974

 * 
 * Adds a timer (e.g. "00:00:00:000"). The appearance of the timer depends on the flags, which needs more research.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} timeInMillseconds
 * @param {ETextComponentTimeFormat} timeFormat
 */
export function addTextComponentSubstringTime(timeInMillseconds: number, timeFormat: ETextComponentTimeFormat | number): void {
	const addTextComponentSubstringTime_result = Citizen.invokeNative<void>('0xBD34A69071611974', timeInMillseconds, timeFormat);
	return addTextComponentSubstringTime_result;
}
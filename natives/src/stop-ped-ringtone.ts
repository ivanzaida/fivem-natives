import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:STOP_PED_RINGTONE
 *
 * 0x92187CF73A8D1B96

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} ped
 */
export function stopPedRingtone(ped: EntityIndex): void {
	const stopPedRingtone_result = Citizen.invokeNative<void>('0x92187CF73A8D1B96', ped);
	return stopPedRingtone_result;
}
import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_PED_RINGTONE_PLAYING
 *
 * 0x129DE7ED6456C4CA

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} ped
 * @returns {boolean}  
 */
export function isPedRingtonePlaying(ped: EntityIndex): boolean {
	const isPedRingtonePlaying_result = Citizen.invokeNative<boolean>('0x129DE7ED6456C4CA', ped);
	return isPedRingtonePlaying_result;
}
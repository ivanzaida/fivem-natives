import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SWEAT
 *
 * 0X44B91E94

 * A getter for [SET_PED_SWEAT](#_0x27B0405F59637D1F).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Returns ped's sweat.
 */
export function getPedSweat(ped: PedIndex): number {
	const getPedSweat_result = Citizen.invokeNative<number>('0X44B91E94', ped);
	return getPedSweat_result;
}
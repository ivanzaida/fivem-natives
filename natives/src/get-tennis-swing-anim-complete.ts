import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:GET_TENNIS_SWING_ANIM_COMPLETE
 *
 * 0xC9F6150424259965

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getTennisSwingAnimComplete(ped: PedIndex): boolean {
	const getTennisSwingAnimComplete_result = Citizen.invokeNative<boolean>('0xC9F6150424259965', ped);
	return getTennisSwingAnimComplete_result;
}
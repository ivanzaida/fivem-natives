import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:GET_TENNIS_SWING_ANIM_SWUNG
 *
 * 0x812812F60647A0F8

 * 
 * If the swing anim has reached the interruptible point.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getTennisSwingAnimSwung(ped: PedIndex): boolean {
	const getTennisSwingAnimSwung_result = Citizen.invokeNative<boolean>('0x812812F60647A0F8', ped);
	return getTennisSwingAnimSwung_result;
}
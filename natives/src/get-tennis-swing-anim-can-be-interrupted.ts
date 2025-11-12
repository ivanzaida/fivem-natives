import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:GET_TENNIS_SWING_ANIM_CAN_BE_INTERRUPTED
 *
 * 0xD4DBCC67CA333F7D

 * 
 * If the swing anim has reached the interruptible point.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function getTennisSwingAnimCanBeInterrupted(ped: PedIndex): boolean {
	const getTennisSwingAnimCanBeInterrupted_result = Citizen.invokeNative<boolean>('0xD4DBCC67CA333F7D', ped);
	return getTennisSwingAnimCanBeInterrupted_result;
}
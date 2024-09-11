import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_PHONE_GESTURE_ANIM_CURRENT_TIME
 *
 * 0x51495BC78F70B066

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPhoneGestureAnimCurrentTime(ped: PedIndex): number {
	const getPhoneGestureAnimCurrentTime_result = Citizen.invokeNative<number>('0x51495BC78F70B066', ped);
	return getPhoneGestureAnimCurrentTime_result;
}
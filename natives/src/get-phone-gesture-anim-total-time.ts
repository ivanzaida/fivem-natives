import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_PHONE_GESTURE_ANIM_TOTAL_TIME
 *
 * 0x7B426C13A6E40397

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPhoneGestureAnimTotalTime(ped: PedIndex): number {
	const getPhoneGestureAnimTotalTime_result = Citizen.invokeNative<number>('0x7B426C13A6E40397', ped);
	return getPhoneGestureAnimTotalTime_result;
}
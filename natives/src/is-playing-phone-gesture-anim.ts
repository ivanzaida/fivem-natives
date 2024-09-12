import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PLAYING_PHONE_GESTURE_ANIM
 *
 * 0x5BBE12D14B71C12A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPlayingPhoneGestureAnim(ped: PedIndex): boolean {
	const isPlayingPhoneGestureAnim_result = Citizen.invokeNative<boolean>('0x5BBE12D14B71C12A', ped);
	return isPlayingPhoneGestureAnim_result;
}
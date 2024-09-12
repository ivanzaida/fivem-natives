import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_PLAY_GESTURE_ANIMS
 *
 * 0x47B4C8905694BBE1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowGestureAnims
 */
export function setPedCanPlayGestureAnims(ped: PedIndex, allowGestureAnims: boolean): void {
	const setPedCanPlayGestureAnims_result = Citizen.invokeNative<void>('0x47B4C8905694BBE1', ped, allowGestureAnims);
	return setPedCanPlayGestureAnims_result;
}
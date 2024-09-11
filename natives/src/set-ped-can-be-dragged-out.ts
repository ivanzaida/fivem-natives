import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_DRAGGED_OUT
 *
 * 0x1537AF7B62B52EB1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowDrag
 */
export function setPedCanBeDraggedOut(ped: PedIndex, allowDrag: boolean): void {
	const setPedCanBeDraggedOut_result = Citizen.invokeNative<void>('0x1537AF7B62B52EB1', ped, allowDrag);
	return setPedCanBeDraggedOut_result;
}
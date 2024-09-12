import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_CAN_DROP_FROM_HEIGHT
 *
 * 0x828D385CED572E95

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} drop
 */
export function setPedPathCanDropFromHeight(ped: PedIndex, drop: boolean): void {
	const setPedPathCanDropFromHeight_result = Citizen.invokeNative<void>('0x828D385CED572E95', ped, drop);
	return setPedPathCanDropFromHeight_result;
}
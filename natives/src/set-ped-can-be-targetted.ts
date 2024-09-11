import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_TARGETTED
 *
 * 0x3F58BFCF656F0DF1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowTargetted
 */
export function setPedCanBeTargetted(ped: PedIndex, allowTargetted: boolean): void {
	const setPedCanBeTargetted_result = Citizen.invokeNative<void>('0x3F58BFCF656F0DF1', ped, allowTargetted);
	return setPedCanBeTargetted_result;
}
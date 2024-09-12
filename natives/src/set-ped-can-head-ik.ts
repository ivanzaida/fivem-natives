import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_HEAD_IK
 *
 * 0x07B9040E912A4EA1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanHeadIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanHeadIk_result = Citizen.invokeNative<void>('0x07B9040E912A4EA1', ped, enableIK);
	return setPedCanHeadIk_result;
}
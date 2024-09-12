import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_LEG_IK
 *
 * 0x2270A1F43A18098E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanLegIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanLegIk_result = Citizen.invokeNative<void>('0x2270A1F43A18098E', ped, enableIK);
	return setPedCanLegIk_result;
}
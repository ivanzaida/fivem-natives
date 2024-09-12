import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_ARM_IK
 *
 * 0x59481BA67136FCF1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanArmIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanArmIk_result = Citizen.invokeNative<void>('0x59481BA67136FCF1', ped, enableIK);
	return setPedCanArmIk_result;
}
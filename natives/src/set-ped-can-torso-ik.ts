import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_TORSO_IK
 *
 * 0x0EAF677B65FA8A40

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableIK
 */
export function setPedCanTorsoIk(ped: PedIndex, enableIK: boolean): void {
	const setPedCanTorsoIk_result = Citizen.invokeNative<void>('0x0EAF677B65FA8A40', ped, enableIK);
	return setPedCanTorsoIk_result;
}
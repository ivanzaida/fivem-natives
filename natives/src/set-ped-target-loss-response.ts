import { PedIndex, ECombatTargetLossResponse } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TARGET_LOSS_RESPONSE
 *
 * 0x570AAA413775DFFB

 * 
 * enum eTargetLossResponseType
 * {
 * 	TLR_ExitTask,
 * 	TLR_NeverLoseTarget,
 * 	TLR_SearchForTarget
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatTargetLossResponse} targetLossResponse
 */
export function setPedTargetLossResponse(ped: PedIndex, targetLossResponse: ECombatTargetLossResponse | number): void {
	const setPedTargetLossResponse_result = Citizen.invokeNative<void>('0x570AAA413775DFFB', ped, targetLossResponse);
	return setPedTargetLossResponse_result;
}
import { PedIndex, ECombatMovement } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COMBAT_MOVEMENT
 *
 * 0xD0764B65C2DFEDCA

 * 
 * enum eCombatMovement // 0x4F456B61
 * {
 * 	CM_Stationary,
 * 	CM_Defensive,
 * 	CM_WillAdvance,
 * 	CM_WillRetreat
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatMovement} pedCombatMoveType
 */
export function setPedCombatMovement(ped: PedIndex, pedCombatMoveType: ECombatMovement | number): void {
	const setPedCombatMovement_result = Citizen.invokeNative<void>('0xD0764B65C2DFEDCA', ped, pedCombatMoveType);
	return setPedCombatMovement_result;
}
import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CAN_PED_IN_COMBAT_SEE_TARGET
 *
 * 0xB8CCCA6CFFCE7734

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @returns {boolean}  
 */
export function canPedInCombatSeeTarget(ped: PedIndex, targetPed: PedIndex): boolean {
	const canPedInCombatSeeTarget_result = Citizen.invokeNative<boolean>('0xB8CCCA6CFFCE7734', ped, targetPed);
	return canPedInCombatSeeTarget_result;
}
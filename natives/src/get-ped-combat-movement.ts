import { PedIndex, ECombatMovement } from '@ivanzaida/structures'

/**
 * PED:GET_PED_COMBAT_MOVEMENT
 *
 * 0x3EFB664623EEAD3F

 * 
 * See SET_PED_COMBAT_MOVEMENT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {ECombatMovement}  
 */
export function getPedCombatMovement(ped: PedIndex): ECombatMovement {
	const getPedCombatMovement_result = Citizen.invokeNative<ECombatMovement>('0x3EFB664623EEAD3F', ped);
	return getPedCombatMovement_result;
}
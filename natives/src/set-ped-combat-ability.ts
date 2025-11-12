import { PedIndex, ECombatAbilityLevel } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COMBAT_ABILITY
 *
 * 0x139711196A42A037

 * 
 * Combat ability is how quickly the ped responds in combat.
 * 
 * enum eCombatAbility // 0xE793438C
 * {
 * 	CA_Poor,
 * 	CA_Average,
 * 	CA_Professional,
 * 	CA_NumTypes
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatAbilityLevel} pedCombatAbilityType
 */
export function setPedCombatAbility(ped: PedIndex, pedCombatAbilityType: ECombatAbilityLevel | number): void {
	const setPedCombatAbility_result = Citizen.invokeNative<void>('0x139711196A42A037', ped, pedCombatAbilityType);
	return setPedCombatAbility_result;
}
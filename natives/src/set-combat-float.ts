import { PedIndex, ECombatAttributeFloats } from '@ivanzaida/structures'

/**
 * PED:SET_COMBAT_FLOAT
 *
 * 0xC3AD0E1324FB3465

 * 
 * This is the function that is used to set the majority of combat float attributes, like time between bursts in cover
 * or time betweek peeks, etc. See COMBAT_ATTRIBUTE_FLOATS for information on the default values of each combat float
 * 
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatAttributeFloats} combatAttribute
 * @param {number} newValue
 */
export function setCombatFloat(ped: PedIndex, combatAttribute: ECombatAttributeFloats | number, newValue: number): void {
	const setCombatFloat_result = Citizen.invokeNative<void>('0xC3AD0E1324FB3465', ped, combatAttribute, newValue);
	return setCombatFloat_result;
}
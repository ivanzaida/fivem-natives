import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:DAMAGE_OBJECT_FRAGMENT_CHILD
 *
 * 0x3E27C7B2037D7E8B

 * 
 * Damage one of the parts of a fragment based object.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} component
 * @param {number} newHealth
 */
export function damageObjectFragmentChild(object: ObjectIndex, component: number, newHealth: number = 0): void {
	const damageObjectFragmentChild_result = Citizen.invokeNative<void>('0x3E27C7B2037D7E8B', object, component, newHealth);
	return damageObjectFragmentChild_result;
}
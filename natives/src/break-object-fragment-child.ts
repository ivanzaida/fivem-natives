import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:BREAK_OBJECT_FRAGMENT_CHILD
 *
 * 0x8C4D4D7E3B6BC910

 * 
 * Remove one of the parts of an fragment based object.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} component
 * @param {boolean} disappear
 */
export function breakObjectFragmentChild(object: ObjectIndex, component: number, disappear: boolean): void {
	const breakObjectFragmentChild_result = Citizen.invokeNative<void>('0x8C4D4D7E3B6BC910', object, component, disappear);
	return breakObjectFragmentChild_result;
}
import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_TARGETTABLE
 *
 * 0x918FE23DCE5B8322

 * 
 * Only four objects can be targettable at any time.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {boolean} targettable
 */
export function setObjectTargettable(objectID: ObjectIndex, targettable: boolean): void {
	const setObjectTargettable_result = Citizen.invokeNative<void>('0x918FE23DCE5B8322', objectID, targettable);
	return setObjectTargettable_result;
}
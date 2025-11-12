import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_ACTIVATE_OBJECT_PHYSICS_AS_SOON_AS_IT_IS_UNFROZEN
 *
 * 0x4B46E3AF872076CE

 * 
 * his could be useful if you have created the object on a slope and you need it to lie properly on the slope rather than hover horizontally above the ground.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} activatePhysicsWhenUnfrozen
 */
export function setActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: ObjectIndex, activatePhysicsWhenUnfrozen: boolean): void {
	const setActivateObjectPhysicsAsSoonAsItIsUnfrozen_result = Citizen.invokeNative<void>('0x4B46E3AF872076CE', object, activatePhysicsWhenUnfrozen);
	return setActivateObjectPhysicsAsSoonAsItIsUnfrozen_result;
}
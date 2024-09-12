import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_TAKES_DAMAGE_FROM_COLLIDING_WITH_BUILDINGS
 *
 * 0xC0794F64BB12AAF8

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {boolean} takesDamage
 */
export function setObjectTakesDamageFromCollidingWithBuildings(object: ObjectIndex, takesDamage: boolean = true): void {
	const setObjectTakesDamageFromCollidingWithBuildings_result = Citizen.invokeNative<void>('0xC0794F64BB12AAF8', object, takesDamage);
	return setObjectTakesDamageFromCollidingWithBuildings_result;
}
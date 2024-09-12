import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:PLACE_OBJECT_ON_GROUND_OR_OBJECT_PROPERLY
 *
 * 0x711CB952E5BE087E

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @returns {boolean}  
 */
export function placeObjectOnGroundOrObjectProperly(object: ObjectIndex): boolean {
	const placeObjectOnGroundOrObjectProperly_result = Citizen.invokeNative<boolean>('0x711CB952E5BE087E', object);
	return placeObjectOnGroundOrObjectProperly_result;
}
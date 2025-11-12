import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:PLACE_OBJECT_ON_GROUND_PROPERLY
 *
 * 0x8225BA395C3FC89D

 * 
 * Used to orient an object to match the terrain. Works best if the object has a flat bottom and isn't too large with respect to the
 * local curvature.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @returns {boolean}  
 */
export function placeObjectOnGroundProperly(object: ObjectIndex): boolean {
	const placeObjectOnGroundProperly_result = Citizen.invokeNative<boolean>('0x8225BA395C3FC89D', object);
	return placeObjectOnGroundProperly_result;
}
import { ObjectIndex } from '@ivanzaida/structures'

/**
 * BRAIN:IS_OBJECT_WITHIN_BRAIN_ACTIVATION_RANGE
 *
 * 0x71C1A46B17126AA4

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @returns {boolean}  
 */
export function isObjectWithinBrainActivationRange(object: ObjectIndex): boolean {
	const isObjectWithinBrainActivationRange_result = Citizen.invokeNative<boolean>('0x71C1A46B17126AA4', object);
	return isObjectWithinBrainActivationRange_result;
}
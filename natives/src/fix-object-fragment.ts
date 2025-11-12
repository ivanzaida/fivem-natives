import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:FIX_OBJECT_FRAGMENT
 *
 * 0x30A5E8BBE5D07DE7

 * 
 * Resets an object (has to be a fragment)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function fixObjectFragment(object: ObjectIndex): void {
	const fixObjectFragment_result = Citizen.invokeNative<void>('0x30A5E8BBE5D07DE7', object);
	return fixObjectFragment_result;
}
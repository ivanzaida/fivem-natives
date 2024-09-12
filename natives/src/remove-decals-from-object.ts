import { ObjectIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_DECALS_FROM_OBJECT
 *
 * 0x73715B38A9962E7E

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function removeDecalsFromObject(object: ObjectIndex): void {
	const removeDecalsFromObject_result = Citizen.invokeNative<void>('0x73715B38A9962E7E', object);
	return removeDecalsFromObject_result;
}
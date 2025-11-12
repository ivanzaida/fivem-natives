import { IntRef } from '@ivanzaida/structures'

/**
 * OBJECT:DELETE_OBJECT
 *
 * 0x51C8BEA2005931AB

 * 
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} object [Ref]
 */
export function deleteObject(object: IntRef /* ptr */): void {
	const deleteObject_result = Citizen.invokeNative<void>('0x51C8BEA2005931AB', object.dataView);
	return deleteObject_result;
}
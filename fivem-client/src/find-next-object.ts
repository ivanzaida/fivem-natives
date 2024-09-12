import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:FIND_NEXT_OBJECT
 *
 * 0x4E129DBF

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 * @param {IntRef} outEntity [Ref]
 * @returns {boolean}  
 */
export function findNextObject(findHandle: number, outEntity: IntRef /* ptr */): boolean {
	const findNextObject_result = Citizen.invokeNative<boolean>('0x4E129DBF', findHandle, outEntity.dataView);
	return findNextObject_result;
}
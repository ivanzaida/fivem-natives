/**
 * CFX:DOOR_SYSTEM_GET_SIZE
 *
 * 0X237613B3

 * 
 * ------------------------------------------------------------------
 * @returns {number}  The number of doors registered in the system
 */
export function doorSystemGetSize(): number {
	const doorSystemGetSize_result = Citizen.invokeNative<number>('0X237613B3', );
	return doorSystemGetSize_result;
}
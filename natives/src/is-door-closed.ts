/**
 * OBJECT:IS_DOOR_CLOSED
 *
 * 0x497B2CD637A94E2A

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function isDoorClosed(doorEnumHash: number): boolean {
	const isDoorClosed_result = Citizen.invokeNative<boolean>('0x497B2CD637A94E2A', doorEnumHash);
	return isDoorClosed_result;
}
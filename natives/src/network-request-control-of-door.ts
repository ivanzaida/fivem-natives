/**
 * NETWORK:NETWORK_REQUEST_CONTROL_OF_DOOR
 *
 * 0xA6C7B9A74A74B015

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function networkRequestControlOfDoor(doorEnumHash: number): boolean {
	const networkRequestControlOfDoor_result = Citizen.invokeNative<boolean>('0xA6C7B9A74A74B015', doorEnumHash);
	return networkRequestControlOfDoor_result;
}
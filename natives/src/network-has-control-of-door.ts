/**
 * NETWORK:NETWORK_HAS_CONTROL_OF_DOOR
 *
 * 0x05C0E11904FA483A

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function networkHasControlOfDoor(doorEnumHash: number): boolean {
	const networkHasControlOfDoor_result = Citizen.invokeNative<boolean>('0x05C0E11904FA483A', doorEnumHash);
	return networkHasControlOfDoor_result;
}
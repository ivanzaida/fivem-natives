/**
 * CFX:END_FIND_PICKUP
 *
 * 0x3C407D53

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 */
export function endFindPickup(findHandle: number): void {
	const endFindPickup_result = Citizen.invokeNative<void>('0x3C407D53', findHandle);
	return endFindPickup_result;
}
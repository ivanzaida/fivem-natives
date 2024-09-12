/**
 * CFX:END_FIND_VEHICLE
 *
 * 0x9227415A

 * 
 * ------------------------------------------------------------------
 * @param {number} findHandle
 */
export function endFindVehicle(findHandle: number): void {
	const endFindVehicle_result = Citizen.invokeNative<void>('0x9227415A', findHandle);
	return endFindVehicle_result;
}
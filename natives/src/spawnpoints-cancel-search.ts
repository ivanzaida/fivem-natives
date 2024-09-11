/**
 * PED:SPAWNPOINTS_CANCEL_SEARCH
 *
 * 0xE07943643E972CC4

 * 
 * ------------------------------------------------------------------
 */
export function spawnpointsCancelSearch(): void {
	const spawnpointsCancelSearch_result = Citizen.invokeNative<void>('0xE07943643E972CC4', );
	return spawnpointsCancelSearch_result;
}
/**
 * STREAMING:LOAD_ALL_OBJECTS_NOW
 *
 * 0x12C01FC00B0CBB6B

 * 
 * ------------------------------------------------------------------
 */
export function loadAllObjectsNow(): void {
	const loadAllObjectsNow_result = Citizen.invokeNative<void>('0x12C01FC00B0CBB6B', );
	return loadAllObjectsNow_result;
}
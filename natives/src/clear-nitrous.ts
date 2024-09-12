/**
 * VEHICLE:CLEAR_NITROUS
 *
 * 0xC889AE921400E1ED

 * 
 * ------------------------------------------------------------------
 */
export function clearNitrous(): void {
	const clearNitrous_result = Citizen.invokeNative<void>('0xC889AE921400E1ED', );
	return clearNitrous_result;
}
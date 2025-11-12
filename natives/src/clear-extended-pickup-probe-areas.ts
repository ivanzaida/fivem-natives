/**
 * OBJECT:CLEAR_EXTENDED_PICKUP_PROBE_AREAS
 *
 * 0x2E42BC795274B8C1

 * 
 * Clears all areas created by ADD_EXTENDED_PICKUP_PROBE_AREA
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearExtendedPickupProbeAreas(): void {
	const clearExtendedPickupProbeAreas_result = Citizen.invokeNative<void>('0x2E42BC795274B8C1', );
	return clearExtendedPickupProbeAreas_result;
}
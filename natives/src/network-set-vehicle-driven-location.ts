/**
 * NETWORK:NETWORK_SET_VEHICLE_DRIVEN_LOCATION
 *
 * 0xA0CE91E47531D3BB

 * 
 * Sets 'loc' variable used in MetricVEHICLE_DIST_DRIVEN
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSetVehicleDrivenLocation(): void {
	const networkSetVehicleDrivenLocation_result = Citizen.invokeNative<void>('0xA0CE91E47531D3BB', );
	return networkSetVehicleDrivenLocation_result;
}
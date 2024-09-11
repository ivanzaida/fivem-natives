/**
 * STATS:PLAYSTATS_PEGASUS_AS_PERSONAL_AIRCRAFT
 *
 * 0xC08C0C34ECB97688

 * 
 * ------------------------------------------------------------------
 * @param {number} vehicleId
 */
export function playstatsPegasusAsPersonalAircraft(vehicleId: number): void {
	const playstatsPegasusAsPersonalAircraft_result = Citizen.invokeNative<void>('0xC08C0C34ECB97688', vehicleId);
	return playstatsPegasusAsPersonalAircraft_result;
}
/**
 * NETWORK:NETWORK_CLEAR_CLOCK_TIME_OVERRIDE
 *
 * 0x99599AE2C0FDB2A1

 * 
 * ------------------------------------------------------------------
 */
export function networkClearClockTimeOverride(): void {
	const networkClearClockTimeOverride_result = Citizen.invokeNative<void>('0x99599AE2C0FDB2A1', );
	return networkClearClockTimeOverride_result;
}
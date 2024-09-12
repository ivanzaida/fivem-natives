/**
 * NETWORK:NETWORK_IS_CLOCK_TIME_OVERRIDDEN
 *
 * 0x75193D36C5FA4721

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsClockTimeOverridden(): boolean {
	const networkIsClockTimeOverridden_result = Citizen.invokeNative<boolean>('0x75193D36C5FA4721', );
	return networkIsClockTimeOverridden_result;
}
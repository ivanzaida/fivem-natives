/**
 * STREAMING:ENABLE_SWITCH_PAUSE_BEFORE_DESCENT
 *
 * 0x042CE839FFCC10E9

 * 
 * sets the "pause before descent flag" - only permitted when waiting for input destination
 * 
 * 
 * ------------------------------------------------------------------
 */
export function enableSwitchPauseBeforeDescent(): void {
	const enableSwitchPauseBeforeDescent_result = Citizen.invokeNative<void>('0x042CE839FFCC10E9', );
	return enableSwitchPauseBeforeDescent_result;
}
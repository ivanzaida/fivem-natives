/**
 * GRAPHICS:SEETHROUGH_RESET
 *
 * 0x20F3F547E98C23D8

 * 
 * ------------------------------------------------------------------
 */
export function seethroughReset(): void {
	const seethroughReset_result = Citizen.invokeNative<void>('0x20F3F547E98C23D8', );
	return seethroughReset_result;
}
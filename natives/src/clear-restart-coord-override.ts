/**
 * MISC:CLEAR_RESTART_COORD_OVERRIDE
 *
 * 0x51F06E07524AD20D

 * 
 * ------------------------------------------------------------------
 */
export function clearRestartCoordOverride(): void {
	const clearRestartCoordOverride_result = Citizen.invokeNative<void>('0x51F06E07524AD20D', );
	return clearRestartCoordOverride_result;
}
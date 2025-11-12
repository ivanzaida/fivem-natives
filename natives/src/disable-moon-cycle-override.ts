/**
 * GRAPHICS:DISABLE_MOON_CYCLE_OVERRIDE
 *
 * 0x36AC7953BF22FE97

 * 
 * Resets the extra timecycle modifier strength normally set with 0x2C328AF17210F009
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableMoonCycleOverride(): void {
	const disableMoonCycleOverride_result = Citizen.invokeNative<void>('0x36AC7953BF22FE97', );
	return disableMoonCycleOverride_result;
}
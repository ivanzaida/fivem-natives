/**
 * GRAPHICS:OVERRIDE_INTERIOR_SMOKE_LEVEL
 *
 * 0xB9574E68CF98080B

 * 
 * ------------------------------------------------------------------
 * @param {number} overrideLevel
 */
export function overrideInteriorSmokeLevel(overrideLevel: number): void {
	const overrideInteriorSmokeLevel_result = Citizen.invokeNative<void>('0xB9574E68CF98080B', overrideLevel);
	return overrideInteriorSmokeLevel_result;
}
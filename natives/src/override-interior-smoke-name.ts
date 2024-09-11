/**
 * GRAPHICS:OVERRIDE_INTERIOR_SMOKE_NAME
 *
 * 0x81A1F979AAA91E2B

 * 
 * ------------------------------------------------------------------
 * @param {string} overrideName
 */
export function overrideInteriorSmokeName(overrideName: string): void {
	const overrideInteriorSmokeName_result = Citizen.invokeNative<void>('0x81A1F979AAA91E2B', overrideName);
	return overrideInteriorSmokeName_result;
}
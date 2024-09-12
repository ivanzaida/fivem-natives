/**
 * AUDIO:SCRIPT_OVERRIDES_WIND_ELEVATION
 *
 * 0x2995BB5B3AA97FE6

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 * @param {number} windElevationHashName
 */
export function scriptOverridesWindElevation(override: boolean, windElevationHashName: number): void {
	const scriptOverridesWindElevation_result = Citizen.invokeNative<void>('0x2995BB5B3AA97FE6', override, windElevationHashName);
	return scriptOverridesWindElevation_result;
}
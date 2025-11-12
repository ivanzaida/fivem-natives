/**
 * GRAPHICS:USE_SNOW_WHEEL_VFX_WHEN_UNSHELTERED
 *
 * 0xD7DE01DAA350496A

 * 
 * Forces vehicle trails on all surfaces.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function useSnowWheelVfxWhenUnsheltered(enable: boolean): void {
	const useSnowWheelVfxWhenUnsheltered_result = Citizen.invokeNative<void>('0xD7DE01DAA350496A', enable);
	return useSnowWheelVfxWhenUnsheltered_result;
}
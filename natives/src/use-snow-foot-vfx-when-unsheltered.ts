/**
 * GRAPHICS:USE_SNOW_FOOT_VFX_WHEN_UNSHELTERED
 *
 * 0x1258AD6DBC2FBAE1

 * 
 * Forces footstep tracks on all surfaces.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function useSnowFootVfxWhenUnsheltered(enable: boolean): void {
	const useSnowFootVfxWhenUnsheltered_result = Citizen.invokeNative<void>('0x1258AD6DBC2FBAE1', enable);
	return useSnowFootVfxWhenUnsheltered_result;
}
/**
 * GRAPHICS:CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE
 *
 * 0x2327CC3214428B97

 * Possible values:
 * "CSM_ST_POINT"
 * "CSM_ST_LINEAR"
 * "CSM_ST_TWOTAP"
 * "CSM_ST_BOX3x3"
 * "CSM_ST_BOX4x4"
 * "CSM_ST_DITHER2_LINEAR"
 * "CSM_ST_CUBIC"
 * "CSM_ST_DITHER4"
 * "CSM_ST_DITHER16"
 * "CSM_ST_SOFT16"
 * "CSM_ST_DITHER16_RPDB"
 * "CSM_ST_POISSON16_RPDB_GNORM"
 * "CSM_ST_HIGHRES_BOX4x4"
 * "CSM_ST_CLOUDS_SIMPLE"
 * "CSM_ST_CLOUDS_LINEAR"
 * "CSM_ST_CLOUDS_TWOTAP"
 * "CSM_ST_CLOUDS_BOX3x3"
 * "CSM_ST_CLOUDS_BOX4x4"
 * "CSM_ST_CLOUDS_DITHER2_LINEAR"
 * "CSM_ST_CLOUDS_SOFT16"
 * "CSM_ST_CLOUDS_DITHER16_RPDB"
 * "CSM_ST_CLOUDS_POISSON16_RPDB_GNORM"
 * 
 * ------------------------------------------------------------------
 * @param {string} typeStr
 */
export function cascadeShadowsSetShadowSampleType(typeStr: string): void {
	const cascadeShadowsSetShadowSampleType_result = Citizen.invokeNative<void>('0x2327CC3214428B97', typeStr);
	return cascadeShadowsSetShadowSampleType_result;
}
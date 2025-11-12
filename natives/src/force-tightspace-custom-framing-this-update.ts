/**
 * CAM:FORCE_TIGHTSPACE_CUSTOM_FRAMING_THIS_UPDATE
 *
 * 0xF009B83B5567CD93

 * 
 * Force the third person camera to use the custom tight space framing, overriding the metadata setting.
 * REMARKS: Only use this in confined situation wehere we are absolutely positive about the tight space framing of the rendered camera.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function forceTightspaceCustomFramingThisUpdate(): void {
	const forceTightspaceCustomFramingThisUpdate_result = Citizen.invokeNative<void>('0xF009B83B5567CD93', );
	return forceTightspaceCustomFramingThisUpdate_result;
}
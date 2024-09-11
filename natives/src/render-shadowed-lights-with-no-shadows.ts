/**
 * GRAPHICS:RENDER_SHADOWED_LIGHTS_WITH_NO_SHADOWS
 *
 * 0x4DA9E018E2F3A01C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} render
 */
export function renderShadowedLightsWithNoShadows(render: boolean): void {
	const renderShadowedLightsWithNoShadows_result = Citizen.invokeNative<void>('0x4DA9E018E2F3A01C', render);
	return renderShadowedLightsWithNoShadows_result;
}
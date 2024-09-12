/**
 * HUD:THEFEED_FORCE_RENDER_ON
 *
 * 0x787E27CA7632AC90

 * 
 * ------------------------------------------------------------------
 */
export function thefeedForceRenderOn(): void {
	const thefeedForceRenderOn_result = Citizen.invokeNative<void>('0x787E27CA7632AC90', );
	return thefeedForceRenderOn_result;
}
/**
 * HUD:THEFEED_ONLY_SHOW_TOOLTIPS
 *
 * 0xD3D5E152F6D9A5F6

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onlyToolTips
 */
export function thefeedOnlyShowTooltips(onlyToolTips: boolean): void {
	const thefeedOnlyShowTooltips_result = Citizen.invokeNative<void>('0xD3D5E152F6D9A5F6', onlyToolTips);
	return thefeedOnlyShowTooltips_result;
}
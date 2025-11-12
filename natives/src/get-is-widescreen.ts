/**
 * GRAPHICS:GET_IS_WIDESCREEN
 *
 * 0x485ADB2D2728D748

 * 
 * Setting Aspect Ratio Manually in game will return:
 * 
 * false - for Narrow format Aspect Ratios (3:2, 4:3, 5:4, etc. )
 * true - for Wide format Aspect Ratios (5:3, 16:9, 16:10, etc. )
 * 
 * Setting Aspect Ratio to "Auto" in game will return "false" or "true" based on the actual set Resolution Ratio.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsWidescreen(): boolean {
	const getIsWidescreen_result = Citizen.invokeNative<boolean>('0x485ADB2D2728D748', );
	return getIsWidescreen_result;
}
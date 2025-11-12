/**
 * GRAPHICS:TERRAINGRID_ACTIVATE
 *
 * 0x3DA00A8D58908B2C

 * 
 * This native enables/disables the gold putting grid display (https://i.imgur.com/TC6cku6.png).
 * This requires these two natives to be called as well to configure the grid: `TERRAINGRID_SET_PARAMS` and `TERRAINGRID_SET_COLOURS`.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function terraingridActivate(enable: boolean): void {
	const terraingridActivate_result = Citizen.invokeNative<void>('0x3DA00A8D58908B2C', enable);
	return terraingridActivate_result;
}
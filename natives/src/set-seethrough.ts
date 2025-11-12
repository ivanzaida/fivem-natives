/**
 * GRAPHICS:SET_SEETHROUGH
 *
 * 0x29D3BA4C46972A1C

 * 
 * Toggles Heatvision on/off.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setSeethrough(onOff: boolean): void {
	const setSeethrough_result = Citizen.invokeNative<void>('0x29D3BA4C46972A1C', onOff);
	return setSeethrough_result;
}
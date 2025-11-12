/**
 * CFX:DRAW_LIGHT
 *
 * 0x374E5298

 * Draw the prepared light.
 * 
 * ------------------------------------------------------------------
 */
export function drawLight(): void {
	const drawLight_result = Citizen.invokeNative<void>('0x374E5298', );
	return drawLight_result;
}
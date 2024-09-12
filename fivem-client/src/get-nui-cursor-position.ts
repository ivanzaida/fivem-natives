import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_NUI_CURSOR_POSITION
 *
 * 0XBDBA226F

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} x [Ref]
 * @param {IntRef} y [Ref]
 */
export function getNuiCursorPosition(x: IntRef /* ptr */, y: IntRef /* ptr */): void {
	const getNuiCursorPosition_result = Citizen.invokeNative<void>('0XBDBA226F', x.dataView, y.dataView);
	return getNuiCursorPosition_result;
}
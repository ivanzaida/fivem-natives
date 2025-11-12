import { EEMousePointerStyle } from '@ivanzaida/structures'

/**
 * HUD:SET_MOUSE_CURSOR_STYLE
 *
 * 0x30EBBB1D4EDC8FE4

 * 
 * Changes the mouse cursor's sprite.
 * 1 = Normal
 * 6 = Left Arrow
 * 7 = Right Arrow
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEMousePointerStyle} style
 */
export function setMouseCursorStyle(style: EEMousePointerStyle | number): void {
	const setMouseCursorStyle_result = Citizen.invokeNative<void>('0x30EBBB1D4EDC8FE4', style);
	return setMouseCursorStyle_result;
}
import { EUiAlignment } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCRIPT_GFX_ALIGN
 *
 * 0x9A122D542F2BB60E

 * Sets the alignment type to the safezone
 * alignX : UI_ALIGN_LEFT, UI_ALIGN_RIGHT, UI_ALIGN_IGNORE
 * alignY : UI_ALIGN_TOP, UI_ALIGN_BOTTOM, UI_ALIGN_IGNORE
 * horizontalAlign: The horizontal alignment. This can be 67 ('C'), 76 ('L'), or 82 ('R').
 * verticalAlign: The vertical alignment. This can be 67 ('C'), 66 ('B'), or 84 ('T').
 * This function anchors script draws to a side of the safe zone. This needs to be called to make the interface independent of the player's safe zone configuration.
 * These values are equivalent to alignX and alignY in common:/data/ui/frontend.xml, which can be used as a baseline for default alignment.
 * Using any other value (including 0) will result in the safe zone not being taken into account for this draw. The canonical value for this is 'I' (73).
 * For example, you can use SET_SCRIPT_GFX_ALIGN(0, 84) to only scale on the Y axis (to the top), but not change the X axis.
 * To reset the value, use RESET_SCRIPT_GFX_ALIGN.
 * 
 * ------------------------------------------------------------------
 * @param {EUiAlignment} alignX
 * @param {EUiAlignment} alignY
 */
export function setScriptGfxAlign(alignX: EUiAlignment | number, alignY: EUiAlignment | number): void {
	const setScriptGfxAlign_result = Citizen.invokeNative<void>('0x9A122D542F2BB60E', alignX, alignY);
	return setScriptGfxAlign_result;
}
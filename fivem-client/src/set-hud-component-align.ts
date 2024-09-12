/**
 * CFX:SET_HUD_COMPONENT_ALIGN
 *
 * 0XEED219F2

 * See [SET_SCRIPT_GFX_ALIGN](#_0xB8A850F20A067EB6) for details about how gfx align works.
 * 
 * ------------------------------------------------------------------
 * @param {number} id The hud component id.
 * @param {number} horizontalAlign The horizontal alignment.
 * @param {number} verticalAlign The vertical alignment.
 */
export function setHudComponentAlign(id: number, horizontalAlign: number, verticalAlign: number): void {
	const setHudComponentAlign_result = Citizen.invokeNative<void>('0XEED219F2', id, horizontalAlign, verticalAlign);
	return setHudComponentAlign_result;
}
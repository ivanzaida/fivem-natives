import { EGfxDrawOrder } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_SCRIPT_GFX_DRAW_ORDER
 *
 * 0xA4F67CEB594AE064

 * 
 * Sets the draw order for script draw commands.
 * 
 * Examples from decompiled scripts:
 * GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(7);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v_4, v_5, v_6, a_0._f172, 0);
 * 
 * GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(1);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EGfxDrawOrder} drawOrder
 */
export function setScriptGfxDrawOrder(drawOrder: EGfxDrawOrder | number): void {
	const setScriptGfxDrawOrder_result = Citizen.invokeNative<void>('0xA4F67CEB594AE064', drawOrder);
	return setScriptGfxDrawOrder_result;
}
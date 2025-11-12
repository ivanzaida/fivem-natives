/**
 * GRAPHICS:DRAW_TV_CHANNEL
 *
 * 0x1A926FCDE89B4E6E

 * 
 * All calls to this native are preceded by calls to GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER and GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU, respectively.
 * 
 * "act_cinema.ysc", line 1483:
 * HUD::SET_HUD_COMPONENT_POSITION(15, 0.0, -0.0375);
 * HUD::SET_TEXT_RENDER_ID(l_AE);
 * GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(4);
 * GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU(1);
 * if (GRAPHICS::IS_TVSHOW_CURRENTLY_PLAYING(${movie_arthouse})) {
 *     GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 0.7375, 1.0, 0.0, 255, 255, 255, 255);
 * } else {
 *     GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
 * }
 * 
 * "am_mp_property_int.ysc", line 102545:
 * if (ENTITY::DOES_ENTITY_EXIST(a_2._f3)) {
 *     if (HUD::IS_NAMED_RENDERTARGET_LINKED(ENTITY::GET_ENTITY_MODEL(a_2._f3))) {
 *         HUD::SET_TEXT_RENDER_ID(a_2._f1);
 *         GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(4);
 *         GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU(1);
 *         GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
 *         if (GRAPHICS::GET_TV_CHANNEL() == -1) {
 *             sub_a8fa5(a_2, 1);
 *         } else {
 *             sub_a8fa5(a_2, 1);
 *             GRAPHICS::ATTACH_TV_AUDIO_TO_ENTITY(a_2._f3);
 *         }
 *         HUD::SET_TEXT_RENDER_ID(HUD::GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID());
 *     }
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} width
 * @param {number} height
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function drawTvChannel(centreX: number, centreY: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void {
	const drawTvChannel_result = Citizen.invokeNative<void>('0x1A926FCDE89B4E6E', centreX, centreY, width, height, rotation, r, g, b, a);
	return drawTvChannel_result;
}
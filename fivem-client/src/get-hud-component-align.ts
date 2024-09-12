import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_HUD_COMPONENT_ALIGN
 *
 * 0XCD949E20

 * See [SET_SCRIPT_GFX_ALIGN](#_0xB8A850F20A067EB6) for details about how gfx align works.
 * 
 * ------------------------------------------------------------------
 * @param {number} id The hud component id.
 * @param {IntRef} horizontalAlign [Ref]
 * @param {IntRef} verticalAlign [Ref]
 */
export function getHudComponentAlign(id: number, horizontalAlign: IntRef /* ptr */, verticalAlign: IntRef /* ptr */): void {
	const getHudComponentAlign_result = Citizen.invokeNative<void>('0XCD949E20', id, horizontalAlign.dataView, verticalAlign.dataView);
	return getHudComponentAlign_result;
}
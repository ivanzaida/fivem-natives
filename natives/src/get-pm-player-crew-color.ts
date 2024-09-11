import { IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_PM_PLAYER_CREW_COLOR
 *
 * 0x5412721BB04590F1

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} r [Ref]
 * @param {IntRef} g [Ref]
 * @param {IntRef} b [Ref]
 * @returns {boolean}  
 */
export function getPmPlayerCrewColor(r: IntRef /* ptr */, g: IntRef /* ptr */, b: IntRef /* ptr */): boolean {
	const getPmPlayerCrewColor_result = Citizen.invokeNative<boolean>('0x5412721BB04590F1', r.dataView, g.dataView, b.dataView);
	return getPmPlayerCrewColor_result;
}
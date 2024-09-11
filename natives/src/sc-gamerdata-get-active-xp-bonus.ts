import { FloatRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_GAMERDATA_GET_ACTIVE_XP_BONUS
 *
 * 0x7497E3ECE98A291B

 * 
 * ------------------------------------------------------------------
 * @param {FloatRef} xpBounsMult [Ref]
 * @returns {boolean}  
 */
export function scGamerdataGetActiveXpBonus(xpBounsMult: FloatRef /* ptr */): boolean {
	const scGamerdataGetActiveXpBonus_result = Citizen.invokeNative<boolean>('0x7497E3ECE98A291B', xpBounsMult.dataView);
	return scGamerdataGetActiveXpBonus_result;
}
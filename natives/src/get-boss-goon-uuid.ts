import { IntRef } from '@ivanzaida/structures'

/**
 * STATS:GET_BOSS_GOON_UUID
 *
 * 0xB91B042AE29D1DC0

 * 
 * ------------------------------------------------------------------
 * @param {number} characterSlot
 * @param {IntRef} valueA [Ref]
 * @param {IntRef} valueB [Ref]
 */
export function getBossGoonUuid(characterSlot: number, valueA: IntRef /* ptr */, valueB: IntRef /* ptr */): void {
	const getBossGoonUuid_result = Citizen.invokeNative<void>('0xB91B042AE29D1DC0', characterSlot, valueA.dataView, valueB.dataView);
	return getBossGoonUuid_result;
}
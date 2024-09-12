import { BwBossOnBossDeathMatch } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_BW_BOSSONBOSSDEATHMATCH
 *
 * 0x80D4C93EC30B0786

 * 
 * ------------------------------------------------------------------
 * @param {BwBossOnBossDeathMatch} data [Ref]
 */
export function playstatsBwBossonbossdeathmatch(data: BwBossOnBossDeathMatch /* ptr */): void {
	const playstatsBwBossonbossdeathmatch_result = Citizen.invokeNative<void>('0x80D4C93EC30B0786', data.dataView);
	return playstatsBwBossonbossdeathmatch_result;
}
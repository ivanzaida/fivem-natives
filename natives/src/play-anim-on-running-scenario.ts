import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:PLAY_ANIM_ON_RUNNING_SCENARIO
 *
 * 0x3BD18E9EF59645CF

 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSet
 * @param {string} clip
 */
export function playAnimOnRunningScenario(ped: PedIndex, clipSet: string, clip: string): void {
	const playAnimOnRunningScenario_result = Citizen.invokeNative<void>('0x3BD18E9EF59645CF', ped, clipSet, clip);
	return playAnimOnRunningScenario_result;
}
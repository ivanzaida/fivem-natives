import { ECutsceneOptionFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:START_CUTSCENE
 *
 * 0xED65412F8B26ED99

 * 
 * flags: Usually 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECutsceneOptionFlags} flags
 */
export function startCutscene(flags: ECutsceneOptionFlags | number = 0): void {
	const startCutscene_result = Citizen.invokeNative<void>('0xED65412F8B26ED99', flags);
	return startCutscene_result;
}
/**
 * REPLAY:REGISTER_EFFECT_FOR_REPLAY_EDITOR
 *
 * 0xF32B2D960EF3FA6E

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 * @param {boolean} useShallowDOF
 */
export function registerEffectForReplayEditor(effectName: string, useShallowDOF: boolean): void {
	const registerEffectForReplayEditor_result = Citizen.invokeNative<void>('0xF32B2D960EF3FA6E', effectName, useShallowDOF);
	return registerEffectForReplayEditor_result;
}
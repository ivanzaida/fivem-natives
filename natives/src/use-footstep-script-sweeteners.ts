import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:USE_FOOTSTEP_SCRIPT_SWEETENERS
 *
 * 0x1E8AEBD23A5C1511

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} use
 * @param {number} soundSetHash
 */
export function useFootstepScriptSweeteners(ped: PedIndex, use: boolean, soundSetHash: number): void {
	const useFootstepScriptSweeteners_result = Citizen.invokeNative<void>('0x1E8AEBD23A5C1511', ped, use, soundSetHash);
	return useFootstepScriptSweeteners_result;
}
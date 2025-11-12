import { ESrlPrestreamMode } from '@ivanzaida/structures'

/**
 * STREAMING:SET_SRL_FORCE_PRESTREAM
 *
 * 0x78081733656ABA54

 * 
 * Enable or disable forced prestreaming for cutscenes. If enabled, the SRL will always preload map data for the first
 * frame of a cutscene, even if it is far away. BE CAREFUL when using this function. Only use it when you are CERTAIN
 * that the current camera position and the first frame of the cutscene can't get too far away, and when you're certain
 * that the two scenes are not particularly rich in entities. Otherwise, you will crash with a pool overflow.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ESrlPrestreamMode} forcePrestream
 */
export function setSrlForcePrestream(forcePrestream: ESrlPrestreamMode | number): void {
	const setSrlForcePrestream_result = Citizen.invokeNative<void>('0x78081733656ABA54', forcePrestream);
	return setSrlForcePrestream_result;
}
import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ARE_HANDLES_THE_SAME
 *
 * 0xD43ED7463CB7671C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle1 [Ref]
 * @param {GamerHandle} gamerHandle2 [Ref]
 * @returns {boolean}  
 */
export function networkAreHandlesTheSame(gamerHandle1: GamerHandle /* ptr */, gamerHandle2: GamerHandle /* ptr */): boolean {
	const networkAreHandlesTheSame_result = Citizen.invokeNative<boolean>('0xD43ED7463CB7671C', gamerHandle1.dataView, gamerHandle2.dataView);
	return networkAreHandlesTheSame_result;
}
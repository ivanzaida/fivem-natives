import { ToFreemodeGamers } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DO_TRANSITION_TO_NEW_FREEMODE
 *
 * 0x9D1FE8B2049C8437

 * 
 * This will transition back to freemode from a launched activity session.
 * Like above but we immediately host a session.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ToFreemodeGamers} gamers [Ref]
 * @param {number} numGamers
 * @param {number} maxPlayers
 * @param {boolean} isPrivate
 * @param {boolean} allowPreviousJoin
 * @param {number} hostFlags
 * @returns {boolean}  
 */
export function networkDoTransitionToNewFreemode(gamers: ToFreemodeGamers /* ptr */, numGamers: number, maxPlayers: number, isPrivate: boolean, allowPreviousJoin: boolean = true, hostFlags: number = 0): boolean {
	const networkDoTransitionToNewFreemode_result = Citizen.invokeNative<boolean>('0x9D1FE8B2049C8437', gamers.dataView, numGamers, maxPlayers, isPrivate, allowPreviousJoin, hostFlags);
	return networkDoTransitionToNewFreemode_result;
}
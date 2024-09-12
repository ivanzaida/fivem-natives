import { TransitionInvite } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_INVITE_GAMERS_TO_TRANSITION
 *
 * 0x6DD03E2B054A8A3F

 * 
 * ------------------------------------------------------------------
 * @param {TransitionInvite} invite [Ref]
 * @param {number} numGamers
 * @returns {boolean}  
 */
export function networkInviteGamersToTransition(invite: TransitionInvite /* ptr */, numGamers: number): boolean {
	const networkInviteGamersToTransition_result = Citizen.invokeNative<boolean>('0x6DD03E2B054A8A3F', invite.dataView, numGamers);
	return networkInviteGamersToTransition_result;
}
import { TransitionMembers } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_TRANSITION_MEMBERS
 *
 * 0xE82C4DFDE9FB1B8B

 * 
 * Returns count.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {TransitionMembers} invite [Ref]
 * @param {number} maxMembers
 * @returns {number}  
 */
export function networkGetTransitionMembers(invite: TransitionMembers /* ptr */, maxMembers: number): number {
	const networkGetTransitionMembers_result = Citizen.invokeNative<number>('0xE82C4DFDE9FB1B8B', invite.dataView, maxMembers);
	return networkGetTransitionMembers_result;
}
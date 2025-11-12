import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_GAMER_INVITED_TO_TRANSITION
 *
 * 0xB502672BBF33603F

 * 
 * Used for players that are already in the session with you when you invite them, i.e. they get the invite through the cell phone instead of a system message
 * (i.e. when not using NETWORK_INVITE_GAMER_TO_TRANSITION or NETWORK_INVITE_GAMERS_TO_TRANSITION)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function networkSetGamerInvitedToTransition(gamer: GamerHandle /* ptr */): void {
	const networkSetGamerInvitedToTransition_result = Citizen.invokeNative<void>('0xB502672BBF33603F', gamer.dataView);
	return networkSetGamerInvitedToTransition_result;
}
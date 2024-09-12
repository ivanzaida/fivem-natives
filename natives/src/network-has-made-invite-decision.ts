import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_MADE_INVITE_DECISION
 *
 * 0xF3AA932723A7168A

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkHasMadeInviteDecision(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkHasMadeInviteDecision_result = Citizen.invokeNative<boolean>('0xF3AA932723A7168A', gamerHandle.dataView);
	return networkHasMadeInviteDecision_result;
}
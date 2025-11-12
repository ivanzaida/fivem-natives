import { EnterSessionPack } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_ENTER_SESSION_PACK
 *
 * 0x684BD5689373BE09

 * 
 * Telemetry  every time a player enters a session, and will allow PIA to discern whether or not a player is a Starter Pack player, or a Premium Edition player.
 * It will also detail what Starter Pack and Premium Edition items a player owned before purchasing the Starter Pack.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EnterSessionPack} data [Ref]
 */
export function playstatsEnterSessionPack(data: EnterSessionPack /* ptr */): void {
	const playstatsEnterSessionPack_result = Citizen.invokeNative<void>('0x684BD5689373BE09', data.dataView);
	return playstatsEnterSessionPack_result;
}
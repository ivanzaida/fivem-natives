import { PlayerIndex, GamerUserid } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PLAYER_GET_USERID
 *
 * 0x4DE98A9A01197527

 * 
 * Returns a string of the player's Rockstar Id.
 * Takes a 24 char buffer. Returns the buffer or "Invalid" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {GamerUserid} userid [Ref]
 * @returns {string}  
 */
export function networkPlayerGetUserid(player: PlayerIndex, userid: GamerUserid /* ptr */): string {
	const networkPlayerGetUserid_result = Citizen.invokeNative<string>('0x4DE98A9A01197527', player, userid.dataView);
	return networkPlayerGetUserid_result;
}
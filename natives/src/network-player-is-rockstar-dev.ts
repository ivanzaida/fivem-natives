import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PLAYER_IS_ROCKSTAR_DEV
 *
 * 0x6BAFBE8178274578

 * 
 * Checks if a specific value (BYTE) in CNetGamePlayer is nonzero.
 * Returns always false in Singleplayer.
 * 
 * No longer used for dev checks since first mods were released on PS3 & 360.
 * R now checks with the IS_DLC_PRESENT native for the dlc hash 2532323046,
 * if that is present it will unlock dev stuff.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkPlayerIsRockstarDev(player: PlayerIndex): boolean {
	const networkPlayerIsRockstarDev_result = Citizen.invokeNative<boolean>('0x6BAFBE8178274578', player);
	return networkPlayerIsRockstarDev_result;
}
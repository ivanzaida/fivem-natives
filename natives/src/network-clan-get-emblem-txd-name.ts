import { GamerHandle, StringRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_EMBLEM_TXD_NAME
 *
 * 0xE460920F3D75C34D

 * 
 * READ THIS
 * The crew emblem for a player can take time to download (a second or two), so if this returns false, but the player
 * is in a valid crew, you may need to try again later.
 * The crew emblem for each player is requested automatically when the player enters the session
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {StringRef} outTXDName [Ref]
 * @returns {boolean}  
 */
export function networkClanGetEmblemTxdName(gamerHandle: GamerHandle /* ptr */, outTXDName: StringRef /* ptr */): boolean {
	const networkClanGetEmblemTxdName_result = Citizen.invokeNative<boolean>('0xE460920F3D75C34D', gamerHandle.dataView, outTXDName.dataView);
	return networkClanGetEmblemTxdName_result;
}
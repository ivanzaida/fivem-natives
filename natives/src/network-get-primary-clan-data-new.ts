import { GamerHandle, NetworkClanDesc } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_NEW
 *
 * 0x2C34F64CC58753D7

 * 
 * Returns TRUE if data retrieval with NETWORK_GET_PRIMARY_CLAN_DATA_START has been successfull.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {NetworkClanDesc} memberInfo [Ref]
 * @returns {boolean}  
 */
export function networkGetPrimaryClanDataNew(gamer: GamerHandle /* ptr */, memberInfo: NetworkClanDesc /* ptr */): boolean {
	const networkGetPrimaryClanDataNew_result = Citizen.invokeNative<boolean>('0x2C34F64CC58753D7', gamer.dataView, memberInfo.dataView);
	return networkGetPrimaryClanDataNew_result;
}
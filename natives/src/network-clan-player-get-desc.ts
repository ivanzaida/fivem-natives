import { NetworkClanDesc, GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_PLAYER_GET_DESC
 *
 * 0xC07B1AA6155EC337

 * 
 * bufferSize is 35 in the scripts.
 * 
 * bufferSize is the elementCount of p0(desc), sizeof(p0) == 280 == p18 == 35  8, p2(netHandle) is obtained from NETWORK::NETWORK_HANDLE_FROM_PLAYER.  And no, I can't explain why 35  sizeof(int) == 280 and not 140, but I'll get back to you on that.
 * 
 * the answer is: because p0 an int64_t / int64_t[35].  and FYI p2 is an int64_t[13]
 * 
 * https://pastebin.com/cSZniHak
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkClanDesc} memberInfo [Ref]
 * @param {number} sizeOfData
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkClanPlayerGetDesc(memberInfo: NetworkClanDesc /* ptr */, sizeOfData: number, gamerHandle: GamerHandle /* ptr */): boolean {
	const networkClanPlayerGetDesc_result = Citizen.invokeNative<boolean>('0xC07B1AA6155EC337', memberInfo.dataView, sizeOfData, gamerHandle.dataView);
	return networkClanPlayerGetDesc_result;
}
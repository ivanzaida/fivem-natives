import { StringRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_IS_EMBLEM_READY
 *
 * 0xAE4A8E8C58358A87

 * 
 * ------------------------------------------------------------------
 * @param {number} clanId
 * @param {StringRef} outTXDName [Ref]
 * @returns {boolean}  
 */
export function networkClanIsEmblemReady(clanId: number, outTXDName: StringRef /* ptr */): boolean {
	const networkClanIsEmblemReady_result = Citizen.invokeNative<boolean>('0xAE4A8E8C58358A87', clanId, outTXDName.dataView);
	return networkClanIsEmblemReady_result;
}
import { NetworkClanDesc, StringRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_UI_FORMATTED_TAG
 *
 * 0x29B9959EF2236634

 * 
 * bufferSize is 35 in the scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkClanDesc} clanToCheck [Ref]
 * @param {number} sizeOfData
 * @param {StringRef} outTag [Ref]
 */
export function networkClanGetUiFormattedTag(clanToCheck: NetworkClanDesc /* ptr */, sizeOfData: number, outTag: StringRef /* ptr */): void {
	const networkClanGetUiFormattedTag_result = Citizen.invokeNative<void>('0x29B9959EF2236634', clanToCheck.dataView, sizeOfData, outTag.dataView);
	return networkClanGetUiFormattedTag_result;
}
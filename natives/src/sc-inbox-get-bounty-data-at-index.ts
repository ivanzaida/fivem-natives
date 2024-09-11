import { BountyInboxMsgData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_GET_BOUNTY_DATA_AT_INDEX
 *
 * 0x67B3687F7C69B969

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {BountyInboxMsgData} bountyData [Ref]
 * @returns {boolean}  
 */
export function scInboxGetBountyDataAtIndex(index: number, bountyData: BountyInboxMsgData /* ptr */): boolean {
	const scInboxGetBountyDataAtIndex_result = Citizen.invokeNative<boolean>('0x67B3687F7C69B969', index, bountyData.dataView);
	return scInboxGetBountyDataAtIndex_result;
}
import { BountyInboxMsgData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_SEND_BOUNTY_TO_RECIP_LIST
 *
 * 0xFAD0C862976B28B2

 * 
 * For sending a bounty completed notification message to the gamer's in teh recipiant
 * list, as created with SC_INBOX_MESSAGE_PUSH_GAMER_T0_RECIP_LIST
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BountyInboxMsgData} bountyData [Ref]
 * @returns {boolean}  
 */
export function scInboxSendBountyToRecipList(bountyData: BountyInboxMsgData /* ptr */): boolean {
	const scInboxSendBountyToRecipList_result = Citizen.invokeNative<boolean>('0xFAD0C862976B28B2', bountyData.dataView);
	return scInboxSendBountyToRecipList_result;
}
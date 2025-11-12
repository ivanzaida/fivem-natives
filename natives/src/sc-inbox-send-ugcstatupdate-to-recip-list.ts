import { UgcStateUpdateData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_SEND_UGCSTATUPDATE_TO_RECIP_LIST
 *
 * 0x078587F1408317CE

 * 
 * Send a UGCStatUpdate event to the inboxes of the recipient list created with
 * SC_INBOX_MESSAGE_PUSH_GAMER_T0_RECIP_LIST
 * 
 * 
 * ------------------------------------------------------------------
 * @param {UgcStateUpdateData} ugcdata [Ref]
 */
export function scInboxSendUgcstatupdateToRecipList(ugcdata: UgcStateUpdateData /* ptr */): void {
	const scInboxSendUgcstatupdateToRecipList_result = Citizen.invokeNative<void>('0x078587F1408317CE', ugcdata.dataView);
	return scInboxSendUgcstatupdateToRecipList_result;
}
import { StringRef } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_REFUND_CASH
 *
 * 0x9CBD6E7B088910A1

 * 
 * index
 * -------
 * See function sub_1005 in am_boat_taxi.ysc
 * 
 * context
 * ----------
 * "BACKUP_VAGOS"
 * "BACKUP_LOST"
 * "BACKUP_FAMILIES"
 * "HIRE_MUGGER"
 * "HIRE_MERCENARY"
 * "BUY_CARDROPOFF"
 * "HELI_PICKUP"
 * "BOAT_PICKUP"
 * "CLEAR_WANTED"
 * "HEAD_2_HEAD"
 * "CHALLENGE"
 * "SHARE_LAST_JOB"
 * "DEFAULT"
 * 
 * reason
 * ---------
 * "NOTREACHTARGET"
 * "TARGET_ESCAPE"
 * "DELIVERY_FAIL"
 * "NOT_USED"
 * "TEAM_QUIT"
 * "SERVER_ERROR"
 * "RECEIVE_LJ_L"
 * "CHALLENGE_PLAYER_LEFT"
 * "DEFAULT"
 * 
 * unk
 * -----
 * Unknown bool value
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {StringRef} type [Ref]
 * @param {StringRef} reason [Ref]
 * @param {boolean} toBank
 */
export function networkRefundCash(amount: number, type: StringRef /* ptr */, reason: StringRef /* ptr */, toBank: boolean): void {
	const networkRefundCash_result = Citizen.invokeNative<void>('0x9CBD6E7B088910A1', amount, type.dataView, reason.dataView, toBank);
	return networkRefundCash_result;
}
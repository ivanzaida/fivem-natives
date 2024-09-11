import { LeaderboardUpdateData } from '@ivanzaida/structures'

/**
 * STATS:LEADERBOARDS2_WRITE_DATA_FOR_EVENT_TYPE
 *
 * 0xFFC169CFE58B4AE2

 * 
 * ------------------------------------------------------------------
 * @param {LeaderboardUpdateData} lbData [Ref]
 * @param {string} eventType
 * @returns {boolean}  
 */
export function leaderboards2WriteDataForEventType(lbData: LeaderboardUpdateData /* ptr */, eventType: string): boolean {
	const leaderboards2WriteDataForEventType_result = Citizen.invokeNative<boolean>('0xFFC169CFE58B4AE2', lbData.dataView, eventType);
	return leaderboards2WriteDataForEventType_result;
}
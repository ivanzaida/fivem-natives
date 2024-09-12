/**
 * STATS:LEADERBOARDS2_READ_GET_ROW_DATA_INT
 *
 * 0x575A7688415EEE2A

 * 
 * ------------------------------------------------------------------
 * @param {number} row
 * @param {number} column
 * @returns {number}  
 */
export function leaderboards2ReadGetRowDataInt(row: number, column: number): number {
	const leaderboards2ReadGetRowDataInt_result = Citizen.invokeNative<number>('0x575A7688415EEE2A', row, column);
	return leaderboards2ReadGetRowDataInt_result;
}
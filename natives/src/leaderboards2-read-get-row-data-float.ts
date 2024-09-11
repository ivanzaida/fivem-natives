/**
 * STATS:LEADERBOARDS2_READ_GET_ROW_DATA_FLOAT
 *
 * 0xFF7C26AC7D71757C

 * 
 * ------------------------------------------------------------------
 * @param {number} row
 * @param {number} column
 * @returns {number}  
 */
export function leaderboards2ReadGetRowDataFloat(row: number, column: number): number {
	const leaderboards2ReadGetRowDataFloat_result = Citizen.invokeNative<number>('0xFF7C26AC7D71757C', row, column);
	return leaderboards2ReadGetRowDataFloat_result;
}
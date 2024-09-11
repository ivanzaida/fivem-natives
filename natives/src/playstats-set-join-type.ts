/**
 * STATS:PLAYSTATS_SET_JOIN_TYPE
 *
 * 0x011E6F76C331CFCE

 * 
 * ------------------------------------------------------------------
 * @param {number} type
 */
export function playstatsSetJoinType(type: number): void {
	const playstatsSetJoinType_result = Citizen.invokeNative<void>('0x011E6F76C331CFCE', type);
	return playstatsSetJoinType_result;
}
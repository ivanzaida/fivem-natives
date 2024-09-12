/**
 * NETWORK:UGC_HAS_QUERY_CREATORS_FINISHED
 *
 * 0x02D8B5E2968C2B8C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcHasQueryCreatorsFinished(): boolean {
	const ugcHasQueryCreatorsFinished_result = Citizen.invokeNative<boolean>('0x02D8B5E2968C2B8C', );
	return ugcHasQueryCreatorsFinished_result;
}
/**
 * MISC:GET_RAIN_LEVEL
 *
 * 0x12BE8EA03391694B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getRainLevel(): number {
	const getRainLevel_result = Citizen.invokeNative<number>('0x12BE8EA03391694B', );
	return getRainLevel_result;
}
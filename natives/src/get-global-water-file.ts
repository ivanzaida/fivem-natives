/**
 * STREAMING:GET_GLOBAL_WATER_FILE
 *
 * 0x5A9ACBB54EEA813F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGlobalWaterFile(): number {
	const getGlobalWaterFile_result = Citizen.invokeNative<number>('0x5A9ACBB54EEA813F', );
	return getGlobalWaterFile_result;
}
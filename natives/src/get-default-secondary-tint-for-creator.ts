/**
 * PED:GET_DEFAULT_SECONDARY_TINT_FOR_CREATOR
 *
 * 0xBED8C136A36DA2C4

 * 
 * ------------------------------------------------------------------
 * @param {number} tint
 * @returns {number}  
 */
export function getDefaultSecondaryTintForCreator(tint: number): number {
	const getDefaultSecondaryTintForCreator_result = Citizen.invokeNative<number>('0xBED8C136A36DA2C4', tint);
	return getDefaultSecondaryTintForCreator_result;
}
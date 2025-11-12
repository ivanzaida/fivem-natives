/**
 * MISC:_GET_CONTENT_PROP_TYPE
 *
 * 0x8BAF8AD59F47AAFC

 * 
 * Returns prop type for given model hash
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getContentPropType(): number {
	const getContentPropType_result = Citizen.invokeNative<number>('0x8BAF8AD59F47AAFC', );
	return getContentPropType_result;
}
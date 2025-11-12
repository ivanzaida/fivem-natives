/**
 * PAD:GET_IS_USING_ALTERNATE_DRIVEBY
 *
 * 0x7BC5EE3C02F4154B

 * 
 * Returns profile setting 225.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsUsingAlternateDriveby(): boolean {
	const getIsUsingAlternateDriveby_result = Citizen.invokeNative<boolean>('0x7BC5EE3C02F4154B', );
	return getIsUsingAlternateDriveby_result;
}
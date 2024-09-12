/**
 * VEHICLE:IS_NITROUS_ACTIVE
 *
 * 0x491E822B2C464FE4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNitrousActive(): boolean {
	const isNitrousActive_result = Citizen.invokeNative<boolean>('0x491E822B2C464FE4', );
	return isNitrousActive_result;
}
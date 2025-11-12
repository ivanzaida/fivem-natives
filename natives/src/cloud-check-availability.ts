/**
 * NETWORK:CLOUD_CHECK_AVAILABILITY
 *
 * 0x8D99EE58B1FB08FF

 * 
 * Use this to check if cloud is up
 * This just requests a small cloud file but is behind a function so that
 * we can swap out the functionality for something better if needed
 * CLOUD_GET_AVAILABILITY_CHECK_POSIX is the POSIX of when the check was last
 * run. Will be 0 if never called.
 * 
 * Downloads prod.cloud.rockstargames.com/titles/gta5/[platform]/check.json
 * 
 * 
 * ------------------------------------------------------------------
 */
export function cloudCheckAvailability(): void {
	const cloudCheckAvailability_result = Citizen.invokeNative<void>('0x8D99EE58B1FB08FF', );
	return cloudCheckAvailability_result;
}
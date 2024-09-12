/**
 * GRAPHICS:BEGIN_TAKE_MISSION_CREATOR_PHOTO
 *
 * 0xB8D7546CD4CFAF85

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function beginTakeMissionCreatorPhoto(): boolean {
	const beginTakeMissionCreatorPhoto_result = Citizen.invokeNative<boolean>('0xB8D7546CD4CFAF85', );
	return beginTakeMissionCreatorPhoto_result;
}
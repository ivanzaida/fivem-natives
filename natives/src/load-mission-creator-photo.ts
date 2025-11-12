/**
 * GRAPHICS:LOAD_MISSION_CREATOR_PHOTO
 *
 * 0x34BE4D7B1AB22F48

 * 
 * Instead of taking a new photo using BEGIN_TAKE_MISSION_CREATOR_PHOTO, you can load the photo for an existing mission using this command
 * Once GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO has returned PHOTO_OPERATION_SUCCEEDED, you can save the photo to the cloud with a new name using SAVE_MISSION_CREATOR_PHOTO
 * Once you're finished with the photo, call FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @param {number} fileID
 * @param {number} fileVersion
 * @param {number} language
 * @returns {boolean}  
 */
export function loadMissionCreatorPhoto(szContentID: string, fileID: number, fileVersion: number, language: number): boolean {
	const loadMissionCreatorPhoto_result = Citizen.invokeNative<boolean>('0x34BE4D7B1AB22F48', szContentID, fileID, fileVersion, language);
	return loadMissionCreatorPhoto_result;
}
/**
 * GRAPHICS:BEGIN_CREATE_MISSION_CREATOR_PHOTO_PREVIEW
 *
 * 0x7AF299087F97C750

 * 
 * Creates a copy of a photo taken with BEGIN_TAKE_MISSION_CREATOR_PHOTO so that it can be referenced by Scaleform
 * This command can only be called if BEGIN_TAKE_MISSION_CREATOR_PHOTO has successfully completed and hasn't been release;
 * in other words, the valid time window to use this command is in between BEGIN_TAKE_MISSION_CREATOR_PHOTO and FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function beginCreateMissionCreatorPhotoPreview(): boolean {
	const beginCreateMissionCreatorPhotoPreview_result = Citizen.invokeNative<boolean>('0x7AF299087F97C750', );
	return beginCreateMissionCreatorPhotoPreview_result;
}
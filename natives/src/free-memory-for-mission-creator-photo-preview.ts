/**
 * GRAPHICS:FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO_PREVIEW
 *
 * 0x0222C94B2B39C467

 * 
 * This frees the memory allocated by BEGIN_CREATE_MISSION_CREATOR_PHOTO_PREVIEW. This must be called when the photo preview is no longer needed and it's no longer being
 * used by Scaleform
 * 
 * 
 * ------------------------------------------------------------------
 */
export function freeMemoryForMissionCreatorPhotoPreview(): void {
	const freeMemoryForMissionCreatorPhotoPreview_result = Citizen.invokeNative<void>('0x0222C94B2B39C467', );
	return freeMemoryForMissionCreatorPhotoPreview_result;
}
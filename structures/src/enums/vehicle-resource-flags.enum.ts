export enum EVehicleResourceFlags {
	VrfRequestSeatAnims = 1,
	VrfRequestEntryAnims,
	VrfRequestExitToAimAnims = 4,
	VrfRequestAlternateEntryAnims = 8,
	VrfRequestBasicAnims = 3, // VRF_REQUEST_SEAT_ANIMS|VRF_REQUEST_ENTRY_ANIMS
	VrfRequestAllAnims = 15, // VRF_REQUEST_SEAT_ANIMS|VRF_REQUEST_ENTRY_ANIMS|VRF_REQUEST_EXIT_TO_AIM_ANIMS|VRF_REQUEST_ALTERNATE_ENTRY_ANIMS
}
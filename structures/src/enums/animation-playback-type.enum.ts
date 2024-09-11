export enum EAnimationPlaybackType {
	AptEmpty, // No anim will play at this priority
	AptSingleAnim, // A single anim will play at this priority
	Apt_3WayBlend, // A blend of three anims will be played at this priority. Weights can be controlled independently.
}
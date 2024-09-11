export enum ECloudLoadFailureCodes {
	LoadFailedReasonNone, // This is not a failure
	LoadFailedReasonFailedToLoad, // Failure codes
	LoadFailedReasonFileCorrupt,
	LoadFailedReasonServerTimeout,
	LoadFailedReasonServerError,
	LoadFailedReasonFileNotFound,
	LoadFailedReasonDirtyCloudRead,
	LoadFailedReasonDirtyProfileStatRead,
	LoadFailedReasonRefreshSavemigrationStatus,
	LoadFailedReasonMax,
}
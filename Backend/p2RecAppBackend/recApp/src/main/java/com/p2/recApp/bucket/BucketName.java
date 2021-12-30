package com.p2.recApp.bucket;




public enum BucketName {
	
	PROFILE_IMAGE("revature-project-two");
	
	private final String bucketName;

	private BucketName(String bucketName) {
		this.bucketName = bucketName;
	}
	
	public String getBucketName() {
		return bucketName;
	}

}

package com.p2.recApp.config;

import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AmazonConfig {
	
	public AmazonS3 S3() {
		
		AWSCredentials awsCredentials = new BasicAWSCredentials(
				 "AKIA27X2IFHHZFWHBJX4", 
				 "YnwKR+rh/FSJchSuvz4eFRIochSRg/zGcRxkFRIN"
				
				);
		return AmazonS3ClientBuilder
				.standard()
				.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
				.build();
		
		
	}

}

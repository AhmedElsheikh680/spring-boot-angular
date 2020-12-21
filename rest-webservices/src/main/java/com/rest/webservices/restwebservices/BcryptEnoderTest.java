package com.rest.webservices.restwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEnoderTest {
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i=1; i<=10;i++) {
			String encodedString = encoder.encode("elsayed");
			System.out.println(encodedString);
		}
		
	}

}

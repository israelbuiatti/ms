package com.ms.acl.service.util;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.ms.acl.util.HashUtil;

@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
public class HashUtilTests {

	@Test
	public void getSecureHashTest() {
		String hash = HashUtil.getSecureHash("123");
		assertThat(hash.length()).isEqualTo(64);
	}
}
